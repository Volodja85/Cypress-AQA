import AddcarPage from "./AddcarPage";
import expensesCarIdPage from "./expensesCarIdPage";
import ExpensesPage from "./ExpensesPage";

class GaragePage {
  get buttonAddcar() {
    return cy.contains("Add car");
  }
  clickButtonAddcar() {
    this.buttonAddcar.click();
    return AddcarPage;
  }

  get buttonAddfuelexpense() {
    return cy.contains("Add fuel expense");
  }
  clickButtonAddfuelexpense() {
    this.buttonAddfuelexpense.click();
    return ExpensesPage;
  }
  //.btn.btn-white.btn-sidebar.sidebar_btn.-active
  //icon icon-fuel

  get buttonIconFuel() {
    return cy.contains(" Fuel expenses ");
  }
  clickButtonIconFuel() {
    this.buttonIconFuel.click();
    return expensesCarIdPage;
  }
}

export default new GaragePage();
