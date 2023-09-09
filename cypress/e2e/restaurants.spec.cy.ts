describe("Restaurant application", function () {
  it("Visits the restaurants page list", function () {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Restaurants");
  });
});

it("Shows a book list", () => {
  cy.visit("http://localhost:3000/");
  cy.get('div[data-test="restaurant-list"]').should("exist");
  cy.get("div.restaurant-item").should("have.length", 2);
});
