/// <reference types="cypress" />

describe("<NavBar /> component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render to login page from BLOG link when the user isn't authenticated", () => {
    cy.contains("BLOG").click();
    cy.url().should("contain", "/login");
  });
  it("should NOT render to login page from BLOG link when the user is authenticated", () => {
    cy.userLogin();
    cy.contains("BLOG").click();
    cy.url().should("not.contain", "/login");
  });
  it("should render to site list page from FIND YOUR WAY link", () => {
    cy.contains("FIND YOUR WAY").click();
    cy.url().should("contain", "/sites");
  });
  it("should include Admin only menu if the user is admin", () => {
    cy.adminLogin();
    cy.get("#adminmenu").should("be.visible");
  });
  it("should NOT include Admin menu if the user is Not an admin user", () => {
    cy.userLogin();
    cy.get("#adminmenu").should("not.exist");
  });
});
