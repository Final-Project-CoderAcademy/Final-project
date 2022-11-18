/// <reference types="cypress" />

describe("<LogIn /> page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should not log in if the user isn't exist", () => {
    cy.get("#email").type("notExistUser@test.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.get(".fade").should("have.text", "email or password is invalid");
  });
  it("should log in when the user type the correct email and password and exist", () => {
    cy.get("#email").type("xinzhe@example.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.url().should("contain", "/");
  });
});
