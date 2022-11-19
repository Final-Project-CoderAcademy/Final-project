/// <reference types="cypress" />
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
  it("should render to edit page with id, when the user click the edit button", () => {
    cy.get(":nth-child(1) > :nth-child(4) > a > .btn-sm").click();
    const siteId = "637328652c48fb20ff1b324a";
    cy.url().should("eq", `http://localhost:3000/sites/${siteId}/edit`);
  });
  it("should create a new site by 'CREATE A SITE' button and render to admin site list", () => {
    cy.get('[data-button="create"]').click();
    cy.get('[data-id="title"]').type("New recommended site");
    cy.get('[data-id="category"]').type("new category");
    cy.get('[data-id="description"]').type(
      "This is a new site that we recomennded for you!"
    );
    cy.get('[data-id="image"]').selectFile("cypress/fixtures/testImage.jpg", {
      force: true,
    });
    cy.get("#createSite").click();
    cy.url().should("eq", "http://localhost:3000/admin/sitelist");
  });
});
