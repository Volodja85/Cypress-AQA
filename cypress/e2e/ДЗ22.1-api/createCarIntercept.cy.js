import HomePage from "../../support/pages/UI/HomePage";
import GaragePage from "../../support/pages/UI/GaragePage";
import expensesCarIdPage from "../../support/pages/UI/expensesCarIdPage";

describe("Intercept car creation and validate it in list", () => {
  before(() => {
    cy.visit("/");
    HomePage.clickSignInButton()
      .typeUserEmail(Cypress.env("email"))
      .typePassword(Cypress.env("password"))
      .clickLoginButton();
    cy.wait(4000); // коротка пауза для завершення логіну
    cy.getCookie("sid")
      .should("exist")
      .then((cookie) => {
        cy.writeFile("cypress/fixtures/cookies.json", { sid: cookie.value });
      });
    cy.intercept("POST", "**/api/cars").as("createCar");
    GaragePage.clickButtonAddcar()
      .clickCarBrandName("Audi")
      .clickCarModelName("TT")
      .clickCarMileage("123456")
      .clickButtonAddcar();
    cy.wait("@createCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      const carId = interception.response.body.data.id;

      cy.log("Створений car ID: " + carId);
      expect(carId).to.exist;

      cy.writeFile("cypress/fixtures/carData.json", { carId });
    });
  });

  it("should use carId from fixture", function () {
    cy.fixture("carData.json").as("carData");
    cy.get("@carData").then((data) => {
      const id = data.carId;
      cy.log(`Car ID from fixture: ${id}`);
      expect(id).to.exist;
    });
  });

  it("should get the car list via API and validate the created car is present", () => {
    cy.fixture("carData.json").then(({ carId }) => {
      cy.fixture("cookies.json").then(({ sid }) => {
        cy.request({
          method: "GET",
          url: "https://qauto.forstudy.space/api/cars",
          headers: {
            Cookie: `sid=${sid}`, // передаємо cookie sid
          },
        }).then((response) => {
          expect(response.status).to.eq(200);

          const cars = response.body.data;
          const foundCar = cars.find((car) => car.id === carId);

          expect(foundCar, "Машина має бути в списку").to.exist;
          expect(foundCar.brand).to.eq("Audi");
          expect(foundCar.model).to.eq("TT");
          expect(+foundCar.mileage).to.eq(123456);
        });
      });
    });
  });

  it("should create an expense and validate response", () => {
    cy.fixture("carData.json").then(({ carId }) => {
      cy.createExpense({
        carId,
        reportedAt: new Date().toISOString().split("T")[0],
        mileage: 123457,
        liters: 1111,
        totalCost: 11112,
        forceMileage: true,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.eq("ok");

        const expense = response.body.data;
        expect(expense.mileage).to.eq(123457);
        expect(expense.liters).to.eq(1111);
        expect(expense.totalCost).to.eq(11112);
        expect(expense.carId).to.eq(carId);
        expect(expense.id).to.exist;
      });
    });
  });

  it("should validate created expense is shown in UI", () => {
    cy.fixture("cookies.json").then(({ sid }) => {
      cy.setCookie("sid", sid);
      cy.visit("/panel/garage");
      GaragePage.clickButtonIconFuel();
      cy.url().should("include", "/expenses");
      expensesCarIdPage.CarName.should("have.text", "Audi TT");
      expensesCarIdPage.CarLiters.should("have.text", "1111L");
      expensesCarIdPage.CarMileage.should("have.text", "123457");
      expensesCarIdPage.CarTotalCost.should("have.text", "11112.00 USD");
    });
  });
});
