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
  it("should visit 'Hiking in Tasmania' site detail page by clicking the 'Read More' button if the user is logged in", () => {
    cy.userLogin();
    cy.get('#basic-navbar-nav > [href="/sites"]').click();
    cy.get(
      ":nth-child(1) > .m-3 > .card-body > a > .text-end > .btn-round"
    ).click();
    cy.get("#siteTitle").should("have.text", "Hiking in Tasmania");
  });
  it("should post comment in the site detail page", () => {
    cy.userLogin();
    cy.get('#basic-navbar-nav > [href="/sites"]').click();
    cy.get(":nth-child(1) > .m-3 > .card-body > a > .text-end").click();
    cy.get("#comment").type("test comment");
    cy.get("#commentPost").click();
    cy.get(":nth-child(2) > .card-body > .text-start").should(
      "have.text",
      "test comment"
    );
  });
});
