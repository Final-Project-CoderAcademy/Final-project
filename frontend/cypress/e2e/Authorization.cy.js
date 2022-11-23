/// <reference types="cypress" />

//----Log in user ----
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
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("should NOT log in when the user type the incorrect email", () => {
    cy.get("#email").type("xinzhe1@example.com");
    cy.get("#password").type("123456");
    cy.get("#login").click();
    cy.get(".fade").should("have.text", "email or password is invalid");
  });
  it("should NOT log in when the user type the incorrect password", () => {
    cy.get("#email").type("xinzhe@example.com");
    cy.get("#password").type("111111");
    cy.get("#login").click();
    cy.get(".fade").should("have.text", "email or password is invalid");
  });
});

//----Log Out user ----
describe("User LOG OUT", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.userLogin();
  });
  it("should log out by LOG OUT button", () => {
    cy.get("#username").click();
    cy.get("#logout").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});

//----sign up user ----
describe("<Register /> page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  it("should show the errors if the user does not enter values", () => {
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
