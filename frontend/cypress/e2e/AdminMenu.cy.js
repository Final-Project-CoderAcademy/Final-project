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
  it("should render to 'Hiking in Tasmania' edit page, when the user click the edit button", () => {
    cy.get(":nth-child(1) > :nth-child(4) > a > .btn-sm").click();
    cy.get("#siteTitle")
      .invoke("attr", "placeholder")
      .should("contain", "Hiking in Tasmania");
  });

  it("should create a site post from CREATE A SITE button", () => {
    const firstNumOfUser = 6;
    cy.get("#createSiteButton").click();
    cy.get("#createSite").click();
    cy.get('[data-id="back"]').click();
    cy.url().should("eq", "http://localhost:3000/admin/sitelist");
    cy.get("table tr").should("have.length", firstNumOfUser + 1);
  });
  const firstNumOfUser = 7;
  it("should delete the site when the user click the delete button", () => {
    cy.get(":nth-child(6) > :nth-child(4) > #deleteSiteButton").click();
    cy.get("table tr").should("have.length", firstNumOfUser - 1);
  });
});

describe("<AdminUserList /> page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.adminLogin();
    cy.get("#adminmenu").click();
    cy.get('[href="/admin/userlist"]').click();
  });
  it("should back to home top page, if the user click the left-arrow icon", () => {
    cy.get('[data-id="back"]').click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("should delete the user when the user click the delete button", async () => {
    // create the user who is deleted here
    const firstNumOfUser = 6;
    cy.request({
      method: "POST",
      url: "http://localhost:1010/api/users/register",
      body: {
        name: "test",
        email: "test@example.com",
        password: "123456",
        confirmPassword: "123456",
      },
    });
    // click the delete button and delete the user who created above
    cy.get(":nth-child(6) > :nth-child(5) > #userdelete").click();
    cy.get("table tr").should("have.length", firstNumOfUser);
  });
});
