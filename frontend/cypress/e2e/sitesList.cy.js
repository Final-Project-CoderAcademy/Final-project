/// <reference types="cypress" />

describe("<SitesList />", () => {
  beforeEach(() => {
    cy.visit("/sites");
  });
  it("should visit login page by clicking 'Read More' button if the user is NOT logged in", () => {
    cy.get(
      ":nth-child(1) > .m-3 > .card-body > a > .text-end > .btn-round"
    ).click();
    cy.url().should("contain", "/login");
  });
  it("should visit site detail page by clicking 'Read More' button if the user is NOT logged in", () => {
    cy.get(
      ":nth-child(1) > .m-3 > .card-body > a > .text-end > .btn-round"
    ).click();
    cy.url().should("contain", "/login");
  });
});
