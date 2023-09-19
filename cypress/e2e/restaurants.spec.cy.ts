describe("Restaurant application", function () {
    beforeEach(() => {
        // Intercept the successful call to the restaurants API
        cy.intercept('GET', '/restaurants', {
            statusCode: 200,
            body: [
                {
                    id: "1",
                    name: 'Restaurant 1',
                    address: "myAddress 1",
                    contactEmail: "myRestaurant1@myResturant.com"
                },
                {
                    id: "2",
                    name: 'Restaurant 2',
                    address: "myAddress 2",
                    contactEmail: "myRestaurant2@myResturant.com"
                },
            ]
        }).as('getRestaurants');
    });

    it("Render the Restaurant header", function () {
        cy.visit("/");
        cy.get('h2[data-test="heading"]').contains("Restaurants");
    });

    it("Render the restaurant list fetched from the backend api", () => {
        cy.visit("/");

        // Wait for the intercepted API call to finish before proceeding
        cy.wait('@getRestaurants');

        cy.get('div[data-test="restaurant-list"]').should("exist");
        cy.get("div.restaurant-item").should("have.length", 2);
    });

});


