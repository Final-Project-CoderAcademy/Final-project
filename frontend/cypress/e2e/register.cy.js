/// <reference types="cypress" />

describe("<Register /> page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  it("should show the errors if the user does not enter values", () => {
    cy.get("#signupForm").within(() => {
      cy.get("#username").clear();
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#confirmPassword").clear();
    });
    cy.get("#signUp").click();
    cy.get('[data-error="username"]').should(
      "have.text",
      "Please enter your username"
    );
    cy.get('[data-error="email"]').should(
      "have.text",
      "Please enter your email"
    );
    cy.get('[data-error="password"]').should(
      "have.text",
      "Please enter password"
    );
    cy.get('[data-error="confirmPassword"]').should(
      "have.text",
      "Please enter confirm password"
    );
  });
  it("should NOT register if the user is already exist", () => {
    cy.get("#signupForm").within(() => {
      cy.get("#username").type("yuka");
      cy.get("#email").type("yuka@example.com");
      cy.get("#password").type("123456");
      cy.get("#confirmPassword").type("123456");
    });
    cy.get("#signUp").click();
    cy.get(".fade").should("have.text", "User already exists!");
  });
  it("should get an error if the password and confirm password does not match", () => {
    cy.get("#signupForm").within(() => {
      cy.get("#username").type("yuka");
      cy.get("#email").type("yuka@example.com");
      cy.get("#password").type("111111");
      cy.get("#confirmPassword").type("123456");
    });
    cy.get("#signUp").click();
    cy.get('[data-error="confirmPassword"]').should(
      "have.text",
      "password and confirm password must be the same"
    );
  });
});
