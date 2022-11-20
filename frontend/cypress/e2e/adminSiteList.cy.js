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
  it("should render to 'The BIG BANANA in Coffs Harbour' edit page, when the user click the edit button", () => {
    cy.get(":nth-child(1) > :nth-child(4) > a > .btn-sm").click();
    // cy.request({
    //   method: "GET",
    //   url: "http://localhost:1010/api/sites",
    // }).then((res) => {
    //   cy.log(JSON.stringify(res.body[0]._id));
    //   const siteId = JSON.stringify(res.body[0]._id);
    cy.get("#siteTitle")
      .invoke("attr", "placeholder")
      .should("contain", "The BIG BANANA in Coffs Harbour");
    // });
  });
  it("should delete the site when the user click the delete button", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:1010/api/users/login",
      body: {
        email: "admin@example.com",
        password: "123456",
      },
      //   failOnStatusCode: false,
    }).then(() => {
      // create the site that is deleted here
      cy.request({
        method: "POST",
        url: "http://localhost:1010/api/sites",
        body: {
          name: "New site",
          description: "new site for testing that is deleted",
          rating: 3,
          image: "./cypress/fixtures/testImagae.jpg",
          category: "test",
        },
        failOnStatusCode: false,
      });
    });

    // click the delete button that I added just above and delete the site
    // cy.get(":nth-child(6) > :nth-child(5) > #userdelete").click();
    // expect(":nth-child(6) > #userEmail").to.not.equal("test@example.com");
  });
});
