class RestaurantPage {
  clickOnFirstRestaurantDetails() {
    this.getRestaurantItems().contains("View Details").eq(0).click();
  }

  currentUrl() {
    return cy.url();
  }

  getRestaurantHeading() {
    return cy.get('h2[data-test="heading"]');
  }

  getRestaurantItems() {
    return cy.get("div.restaurant-item");
  }

  getRestaurantList() {
    return cy.get('div[data-test="restaurant-list"]');
  }

  interceptRestaurants() {
    cy.intercept("GET", "/restaurants", {
      body: [
        {
          address: "myAddress 1",
          contactEmail: "repollo@myResturant.com",
          id: "1",
          name: "Repollo",
        },
        {
          address: "myAddress 2",
          contactEmail: "pollodel8@myResturant.com",
          id: "2",
          name: "El Pollo del 8",
        },
      ],
      statusCode: 200,
    }).as("getRestaurants");
  }

  visit() {
    cy.visit("/");
  }

  waitForRestaurants() {
    cy.wait("@getRestaurants");
  }
}

export default new RestaurantPage();
