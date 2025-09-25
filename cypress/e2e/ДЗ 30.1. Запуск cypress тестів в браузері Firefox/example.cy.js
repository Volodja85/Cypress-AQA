describe("Firefox test", () => {
  it("Visits example site", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("Kitchen Sink");
    cy.screenshot(); // робить скріншот
  });
});
