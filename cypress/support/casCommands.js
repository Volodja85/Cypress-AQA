Cypress.Commands.add(
  "createExpense",
  ({ carId, reportedAt, mileage, liters, totalCost, forceMileage }) => {
    return cy.fixture("cookies.json").then(({ sid }) => {
      expect(sid, "SID має бути у фікстурі").to.exist;

      return cy.request({
        method: "POST",
        url: "https://qauto.forstudy.space/api/expenses",
        headers: {
          Cookie: `sid=${sid}`,
        },
        body: {
          carId,
          reportedAt,
          mileage,
          liters,
          totalCost,
          //forceMileage,
        },
      });
    });
  }
);
