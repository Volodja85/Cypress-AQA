import HomePage from "./HomePage";
import GaragePage from "./GaragePage";

class RegistrationPage {
  get usernameInput() {
    return cy.get("#signupName");
  }

  get userlastnameInput() {
    return cy.get("#signupLastName");
  }

  get userEmailInput() {
    return cy.get("#signupEmail");
  }

  get userPasswordInput() {
    return cy.get("#signupPassword");
  }
  get userRepeatPasswordInput() {
    return cy.get("#signupRepeatPassword");
  }

  get buttonRegister() {
    return cy.contains("button", "Register");
    //button[class='btn btn-primary']
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typeUserlastname(lastname) {
    this.userlastnameInput.type(lastname);
    return this;
  }

  typeUserEmail(userEmail) {
    this.userEmailInput.type(userEmail);
    return this;
  }

  typeUserPasswor(userPasswor) {
    this.userPasswordInput.type(userPasswor, { sensitive: true });
    return this;
  }
  typeUserRepeatPassword(userRepeatPassword) {
    this.userRepeatPasswordInput.type(userRepeatPassword, { sensitive: true });
    return this;
  }

  clickButtonRegister() {
    this.buttonRegister.click();
    return new GaragePage();
  }
  reloadPage() {
    cy.reload();
  }
}

export default new RegistrationPage();
//export default RegistrationPage;
