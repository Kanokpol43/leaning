describe("Test 1", function () {
  it("My FristTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get('[placeholder="Search for Vegetables and Fruits"]').type("ca");

    // Check count class : product (visible)
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products .product").should("have.length", 4);

    // Click Button
    cy.get(":nth-child(3) > .product-action > button").click();
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

    cy.get(".brand")
      .should("have.text", "GREENKART")
      .then(function () {
        console.log("Name company");
      });

    cy.get(".brand").then(function (logo) {
      cy.log(logo.text());
    });
  });

  it("My SecountTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //window:alert
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    cy.on("window:alert", (Alert) => {
      expect(Alert).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:Confirm", (Alert) => {
      expect(Alert).to.equal("Hello , Are you sure you want to confirm?");
    });
  });

  it("New window tab", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get(".sub-menu-bar").contains("About us").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });

  it.only("Tables", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each((Course, Price) => {});
  });
});
