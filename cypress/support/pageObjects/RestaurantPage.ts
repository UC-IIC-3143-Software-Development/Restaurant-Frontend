class RestaurantPage {
  visit() {
    cy.visit("/");
  }

  getRestaurantHeading() {
    return cy.get('h2[data-test="heading"]');
  }

  getRestaurantList() {
    return cy.get('div[data-test="restaurant-list"]');
  }

  getRestaurantItems() {
    return cy.get("div.restaurant-item");
  }

  clickOnFirstRestaurantDetails() {
    this.getRestaurantItems().contains("View Details").eq(0).click();
  }

  interceptRestaurants() {
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
  }

  waitForRestaurants() {
    cy.wait("@getRestaurants");
  }

  currentUrl() {
    return cy.url();
  }
}

export default new RestaurantPage();
