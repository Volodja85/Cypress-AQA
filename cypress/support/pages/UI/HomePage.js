import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";

class HomePage {
  get buttonSignUp() {
    return cy.get(".hero-descriptor_btn.btn.btn-primary");
  }
  get buttonSignIn() {
    return cy.contains("button", "Sign In");
  }

  clickSignUpButton() {
    this.buttonSignUp.click();
    return RegistrationPage;
  }

  clickSignInButton() {
    this.buttonSignIn.click();
    return LoginPage;
  }
}
export default new HomePage();
