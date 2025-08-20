import AddcarPage from "./AddcarPage";
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
}

export default new GaragePage();
