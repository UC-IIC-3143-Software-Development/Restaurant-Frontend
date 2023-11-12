describe("Restaurant application", function () {
  beforeEach(() => {
    // Intercept the successful call to the restaurants API
    cy.intercept("GET", "/restaurants", {
      statusCode: 200,
      body: [
        {
          id: "1",
          name: "Repollo",
          address: "myAddress 1",
          contactEmail: "repollo@myResturant.com",
        },
        {
          id: "2",
          name: "El Pollo del 8",
          address: "myAddress 2",
          contactEmail: "pollodel8@myResturant.com",
        },
      ],
    }).as("getRestaurants");
  });

  it("Render the Restaurant header", function () {
    cy.visit("/");
    cy.get('h2[data-test="heading"]').contains("Restaurants");
  });

  it("Render the restaurant list fetched from the backend api", () => {
    cy.visit("/");

    // Wait for the intercepted API call to finish before proceeding
    cy.wait("@getRestaurants");

    cy.get('div[data-test="restaurant-list"]').should("exist");
    cy.get("div.restaurant-item").should("have.length", 2);
  });

  it("Goes to the detail page", () => {
    cy.visit("/");

    // Wait for the intercepted API call to finish before proceeding
    cy.wait("@getRestaurants");

    cy.get("div.restaurant-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/restaurants/1");

    //cy.get("h2.restaurant-title").contains("Repollo");
  });
});
