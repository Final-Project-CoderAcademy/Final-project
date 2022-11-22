/// <reference types="cypress" />

describe("<MyHome /> page and component test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.userLogin();
    cy.get("#username").click();
    cy.get('[href="/myhome"]').click();
  });
  it("should take to my detail page by clicking 'To myDetail' button", () => {
    cy.get("#myDetailButton").click();
    cy.url().should("eq", "http://localhost:3000/myhome/myDetails");
  });
  it("should show the user current detail in the form", () => {
    cy.get("#myDetailButton").click();
    cy.get("#userName").should("have.value", "todd");
    cy.get("#email").should("have.value", "todd@example.com");
  });
  it("should update the user detail by 'UPDATE' button", () => {
    cy.get("#myDetailButton").click();
    cy.get("#userName").clear().type("todd1");
    cy.get("#email").clear().type("todd1@example.com");
    cy.get("#password").type("123456");
    cy.get("#confirmPassword").type("123456");
    cy.get("#updateButton").click();
    cy.get("#username").should("have.text", "todd1");
    // try to be the details back to normal
    cy.get("#username").click();
    cy.get('[href="/myhome"]').click();
    cy.get("#myDetailButton").click();
    cy.get("#userName").clear().type("todd");
    cy.get("#email").clear().type("todd@example.com");
    cy.get("#password").type("123456");
    cy.get("#confirmPassword").type("123456");
    cy.get("#updateButton").click();
    cy.get("#username").should("have.text", "todd");
  });
  it("should take to my blog page by clicking 'To myBlog' button", () => {
    cy.get("#myBlogButton").click();
    cy.url().should("eq", "http://localhost:3000/myhome/myBlogs");
  });
});
