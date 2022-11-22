/// <reference types="cypress" />

describe("<About />", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should visit signup page by clicking 'Let's start!' button", () => {
    cy.get("#aboutP-signup").click();
    cy.url().should("contain", "http://localhost:3000/register");
  });
  it("should visit site page by clicking 'Find Your Way' button", () => {
    cy.get("#aboutP-sites").click();
    cy.url().should("contain", "http://localhost:3000/sites");
  });
  it("should visit login page by clicking 'Login Now' button if the user not logged in", () => {
    cy.get("#aboutP-login").click();
    cy.url().should("contain", "http://localhost:3000/login");
  });
  it("should visit blog page by clicking 'Visit Blog Page' button if the user is logged in", () => {
    cy.userLogin();
    cy.get("#aboutP-blog").click();
    cy.url().should("eq", "http://localhost:3000/blogs");
  });
});
