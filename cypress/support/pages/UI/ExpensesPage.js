import expensesCarIdPage from "./expensesCarIdPage";

class ExpensesPage {
  get Expensecalendar() {
    return cy.get(".icon.icon-calendar");
  }
  clickExpensecalendar() {
    this.Expensecalendar.click;
    return this;
  }

  get carExpenseMileage() {
    return cy.get("#addExpenseMileage");
  }
  clearExpenseMileage() {
    this.carExpenseMileage.clear();
    return this;
  }

  clickExpenseMileage(mileage) {
    this.carExpenseMileage.type(mileage);
    return this;
  }

  get addExpenseLiters() {
    return cy.get("#addExpenseLiters");
  }
  clickAddExpenseLiters(Liters) {
    this.addExpenseLiters.type(Liters);
    return this;
  }

  get addExpenseTotalCost() {
    return cy.get("#addExpenseTotalCost");
  }
  clickAddExpenseTotalCost(Cost) {
    this.addExpenseTotalCost.type(Cost);
    return this;
  }

  get buttonExpenseAdd() {
    return cy.get("app-add-expense-modal .modal-footer button.btn-primary");
  }

  clickButtonExpenseAddcar() {
    this.buttonExpenseAdd.click();
    return expensesCarIdPage;
  }
}
export default new ExpensesPage();
