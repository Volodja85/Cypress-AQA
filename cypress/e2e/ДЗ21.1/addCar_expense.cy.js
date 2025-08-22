import GaragePage from "../../support/pages/UI/GaragePage";
import HomePage from "../../support/pages/UI/HomePage";
import LoginPage from "../../support/pages/UI/LoginPage";

describe("Garage & Expenses tests", () => {
  before(() => {
    cy.visit("/");
    // HomePage.clickSignInButton();
    // cy.get("input[formcontrolname='email']").type(Cypress.env("email"));
    // cy.get("input[formcontrolname='password']").type(Cypress.env("password"));
    // LoginPage.clickLoginButton();
  });

  it("Add car, fuel expense", () => {
    HomePage.clickSignInButton()
      .typeUserEmail(Cypress.env("email"))
      .typePassword(Cypress.env("password"))
      .clickLoginButton()
      .clickButtonAddcar()
      .clickCarBrandName("Audi")
      .clickCarModelName("TT")
      .clickCarMileage("10000")
      .clickButtonAddcar();

    cy.contains("Audi TT").should("exist");

    GaragePage.clickButtonAddfuelexpense()
      .clearExpenseMileage()
      .clickExpenseMileage("20000")
      .clickAddExpenseLiters(10)
      .clickAddExpenseTotalCost("10000")
      .clickButtonExpenseAddcar();

    cy.contains("10000").should("exist");
  });
});
