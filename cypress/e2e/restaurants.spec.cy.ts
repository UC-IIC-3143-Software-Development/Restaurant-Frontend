import RestaurantPage from "../support/pageObjects/RestaurantPage";

describe("Restaurant application", function () {
  beforeEach(() => {
    RestaurantPage.interceptRestaurants();
  });

  it("Render the Restaurant header", function () {
    RestaurantPage.visit();
    RestaurantPage.getRestaurantHeading().contains("Restaurants");
  });

  it("Render the restaurant list fetched from the backend api", () => {
    RestaurantPage.visit();
    RestaurantPage.waitForRestaurants();
    RestaurantPage.getRestaurantList().should("exist");
    RestaurantPage.getRestaurantItems().should("have.length", 2);
  });

  it("Goes to the detail page", () => {
    RestaurantPage.visit();
    RestaurantPage.waitForRestaurants();
    RestaurantPage.clickOnFirstRestaurantDetails();
    RestaurantPage.currentUrl().should("include", "/restaurants/1");
  });
});
