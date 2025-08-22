import GaragePage from "./GaragePage";

class AddcarPage {
  get carBrandName() {
    return cy.get("#addCarBrand");
  }
  clickCarBrandName(brand) {
    this.carBrandName.select(brand);
    return this;
  }

  get carModelName() {
    return cy.get("#addCarModel");
  }
  clickCarModelName(model) {
    this.carModelName.select(model);
    return this;
  }
  get carMileage() {
    return cy.get("#addCarMileage");
  }
  clickCarMileage(mileage) {
    this.carMileage.type(mileage);
    return this;
  }

  get buttonAdd() {
    return cy.get("app-add-car-modal .modal-footer button.btn-primary");
  }
  clickButtonAddcar() {
    this.buttonAdd.click();
    return GaragePage;
  }
}

export default new AddcarPage();
