describe("Перевірка кнопок хедера і футера", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Перевірка чи тег кнопка і текст  Sign up", () => {
    cy.contains(".hero-descriptor_btn", "Sign up")
      .should("be.visible")
      .invoke("prop", "tagName")
      .should("eq", "BUTTON");
  });

  it("Перевірка кнопок хедера Contacts", () => {
    const headerButtons = [
      ".icon-facebook",
      ".icon-telegram",
      ".icon-youtube",
      ".icon-instagram",
      ".icon-linkedin",
    ];

    headerButtons.forEach((Selectors) => {
      cy.get(".socials_icon")
        .filter(".icon")
        .filter(`${Selectors}`)
        .scrollIntoView()
        .and("exist")
        .should("be.visible");
    });
  });

  it("Перевірка назви посиланнь contact link", () => {
    const footerLinks = [
      "ithillel.ua",
      "support@ithillel.ua",
      // .contacts_link.display-4
      // .contacts_link.h4
    ];

    footerLinks.forEach((text) => {
      cy.contains(".contacts_link", text).and("exist").should("be.visible");
    });
  });

  it("Перевірка, що href містить текст 'ithillel.ua'", () => {
    cy.contains(".contacts_link", "ithillel.ua")
      .should("be.visible")
      .invoke("attr", "href")
      .then((href) => {
        expect(href).to.include("ithillel.ua");
      });
  });
});
