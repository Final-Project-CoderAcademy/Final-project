/// <reference types="cypress" />

describe("<SitesList />", () => {
  beforeEach(() => {
    cy.visit("/sites");
  });
  it("should visit login page by clicking 'Read More' button if the user is NOT logged in", () => {
    cy.get("#ReadMore").click();
    cy.url().should("contain", "/login");
  });
  it("should visit 'Hiking in Tasmania' site detail page by clicking the 'Read More' button if the user is logged in", () => {
    cy.userLogin();
    cy.get('[href="/sites"]').click();
    cy.get(
      ":nth-child(1) > .m-3 > .card-body > a > .text-end > .btn-round"
    ).click();
    cy.get("#siteTitle").should("have.text", "Hiking in Tasmania");
  });
  it("should post comment in the site detail page", () => {
    cy.userLogin();
    cy.get('[href="/sites"]').click();
    cy.get("#ReadMore").click();
    cy.get("#comment").type("test comment");
    cy.get("#commentPost").click();
    cy.get(":nth-child(2) > .card-body > .text-start").should(
      "have.text",
      "test comment"
    );
  });
  it("should delete the comment when the user click the delete button", () => {
    cy.userLogin();
    cy.get('[href="/sites"]').click();
    cy.get("#ReadMore").click();
    cy.get(":nth-child(3) > .btn").click();
    cy.get(".card-body").should("not.exist");
  });
});
