/// <reference types="cypress" />

describe("<SitesList />", () => {
  beforeEach(() => {
    cy.visit("/sites");
  });
  it("should visit login page by clicking 'Read More' button if the user is NOT logged in", () => {
    cy.get("#readmoreButton").click();
    cy.url().should("contain", "/login");
  });
});
