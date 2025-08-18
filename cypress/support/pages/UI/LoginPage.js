import GaragePage from "./GaragePage";

class LoginPage {
  get emailInput() {
    return cy.get("#signinEmail");
  }

  get passwordInput() {
    return cy.get("#signinPassword");
  }

  get loginButton() {
    return cy.get("button[class='btn btn-primary']");
  }

  typeUserEmail(Email) {
    this.emailInput.type(Email, { sensitive: true });
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password, { sensitive: true });
    return this;
  }

  clickLoginButton() {
    this.loginButton.click();
    return GaragePage;
  }
}

export default new LoginPage();
