/// <reference types="cypress" />

import "cypress-file-upload";

describe("<AdminSiteList /> page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.adminLogin();
    cy.get("#adminmenu").click();
    cy.get('[href="/admin/sitelist"]').click();
  });
  it("should back to home top page, if the user click the left-arrow icon", () => {
    cy.get('[data-id="back"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("should render to 'The BIG BANANA in Coffs Harbour' edit page, when the user click the edit button", () => {
    cy.get(":nth-child(1) > :nth-child(4) > a > .btn-sm").click();
    cy.get("#siteTitle")
      .invoke("attr", "placeholder")
      .should("contain", "The BIG BANANA in Coffs Harbour");
  });

  it("should create a site post from CREATE A SITE button", () => {
    cy.get("#createSiteButton").click();
    cy.get("#createSite").click();
    cy.get('[data-id="back"]').click();
    cy.url().should("eq", "http://localhost:3000/admin/sitelist");
    cy.get(":nth-child(6) > :nth-child(2)").should(
      "have.text",
      "name of the site"
    );
  });

  it("should delete the site when the user click the delete button", () => {
    cy.get(":nth-child(6) > :nth-child(4) > #deleteSiteButton").click();
    cy.get(":nth-child(6) > :nth-child(2)").should("not.exist");
  });
});
