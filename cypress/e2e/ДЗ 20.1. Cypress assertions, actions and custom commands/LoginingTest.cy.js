import RegistrationPage from "../../support/pages/UI/RegistrationPage";
import HomePage from "../../support/pages/UI/HomePage";

describe("Перевірка вікна Login", () => {
  //const homepage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
  });
  it("провірка правельного воду даних", () => {
    HomePage.clickSignInButton()
      .typeUserEmail("v.zemela@gmail.com")
      .typePassword("Password123")
      .clickLoginButton();

    cy.url().should("include", "/garage");
  });
  it("провірка неправельного воду даних Email", () => {
    HomePage.clickSignInButton()
      .typeUserEmail("v.zemela@gmail.co")
      .typePassword("Password123")
      .clickLoginButton();

    cy.contains("Wrong email or password").should("be.visible");
  });
  it("провірка неправельного воду даних Password", () => {
    HomePage.clickSignInButton()
      .typeUserEmail("v.zemela@gmail.com")
      .typePassword("Password1")
      .clickLoginButton();

    cy.contains("Wrong email or password").should("be.visible");
  });
});
