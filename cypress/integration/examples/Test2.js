describe("Test 2", function () {
  it("My FristTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('[placeholder="Search for Vegetables and Fruits"]').type("ca");

    // Check count class : product (visible)
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products .product").should("have.length", 4);

    // Click Button
    for (let i = 2; i <= 3; i++) {
      cy.get(".products")
        .find(".product")
        .eq(i)
        .contains("ADD TO CART")
        .click();

      cy.get(".product-action").eq(i).should("have.text", "✔ ADDED");
    }

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();

    cy.get("button").contains("Place Order").click();
  });
});
