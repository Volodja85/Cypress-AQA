class ExpensesCarIdPage {
  get CarDate() {
    return cy.get(".font-weight-bold");
  }
  get CarMileage() {
    return cy.get("tbody tr td:nth-child(2)");
  }
  get CarLiters() {
    return cy.get("tbody tr td:nth-child(3)");
  }
  get CarTotalCost() {
    return cy.get("tbody tr td:nth-child(4)");
  }
  get CarName() {
    return cy.get("#carSelectDropdown").should("be.visible");
  }
  clickButtoncarSelectDropdown() {
    this.CarName.click();
    return this;
  }
  get CarNameFirst() {
    //return cy.get("li:nth-child(1)");
    return cy.get("li.dropdown-item").contains("Audi TT").should("be.visible");
  }
  clickButtoncarSelectDropdownFirst() {
    this.CarNameFirst.click();
    return this;
  }
}

export default new ExpensesCarIdPage();
