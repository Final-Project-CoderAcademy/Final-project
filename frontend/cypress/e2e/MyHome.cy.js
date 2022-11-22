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
  it("should take to my blog page by clicking 'To myBlog' button", () => {
    cy.get("#myBlogButton").click();
    cy.url().should("eq", "http://localhost:3000/myhome/myBlogs");
  });
});
