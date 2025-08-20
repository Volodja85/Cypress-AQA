import RegistrationPage from "../../support/pages/UI/RegistrationPage";
import HomePage from "../../support/pages/UI/HomePage";

describe("Перевірка вікна Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Перевірка Field Name less than 2 letters", () => {
    HomePage.clickSignUpButton().typeUsername("V").usernameInput.blur();
    cy.contains("p", "Name has to be from 2 to 20 characters long").should(
      "be.visible"
    );
  });
  it("Перевірка Field Name more than 20 letters", () => {
    HomePage.clickSignUpButton()
      .typeUsername("V".repeat(25))
      .usernameInput.blur();
    cy.contains("p", "Name has to be from 2 to 20 characters long").should(
      "be.visible"
    );
  });

  it("Перевірка Field Last name less than 2 letters", () => {
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Z")
      .userlastnameInput.blur();
    cy.contains("p", "Last name has to be from 2 to 20 characters long").should(
      "be.visible"
    );
  });

  it("Перевірка Field Last name less than 20 letters", () => {
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Z".repeat(25))
      .userlastnameInput.blur();
    cy.contains("p", "Last name has to be from 2 to 20 characters long").should(
      "be.visible"
    );
  });

  it("помилки вводу некоректного email", () => {
    const invalidEmails = ["test", "test@", "@domain.com", "test@com", "t@.c"];
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Zhemela");
    for (const email of invalidEmails) {
      RegistrationPage.typeUserEmail(email).userEmailInput.blur();
      cy.contains("Email is incorrect").should("be.visible");
      RegistrationPage.userEmailInput.clear();
    }
  });

  it("помилки вводу некоректного пароля", () => {
    const invalidPasswords = [
      "Ab1!",
      "password123!",
      "PASSWORD123!",
      "Password!",
      //"Password123",
    ];
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Zhemela")
      .typeUserEmail("v.zemela@gmail.com");
    for (const Password of invalidPasswords) {
      RegistrationPage.typeUserPasswor(Password).userPasswordInput.blur();
      cy.contains(
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      ).should("be.visible");
      RegistrationPage.userPasswordInput.clear();
    }
  });

  it("помилки вводу некоректного повторного пароля", () => {
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Zhemela")
      .typeUserEmail("v.zemela@gmail.com")
      .typeUserPasswor("Password123")
      .typeUserRepeatPassword("Password1")
      .userRepeatPasswordInput.blur();

    cy.contains("Passwords do not match").should("be.visible");
  });

  it("провірка реєстрації юзера", () => {
    HomePage.clickSignUpButton()
      .typeUsername("Volodja")
      .typeUserlastname("Zhemela")
      .typeUserEmail("v.zemela@gmail.com")
      .typeUserPasswor("Password123")
      .typeUserRepeatPassword("Password123")
      .clickButtonRegister();

    cy.contains("User already exists").should("be.visible");
  });
});
