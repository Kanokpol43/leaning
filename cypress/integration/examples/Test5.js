import "cypress-iframe";

describe("Test5", () => {
  it("Handling Child Window", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then(function (link) {
      const url = link.prop("href");
      cy.visit(url);
      cy.origin(url, () => {
        cy.contains("Learn More").click();
      });
    });
  });

  it("Handling Child Window Refactor", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab")
      .invoke("prop", "href")
      .then((url) => {
        cy.visit(url);
        cy.origin(url, () => {
          cy.contains("Learn More").click();
        });
      });
  });

  it.only("Handling Frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('[href="mentorship"]').eq(0).click();

    cy.wait(2000);
    cy.iframe().find(".pricing-title").should("have.length", 2);
  });
});
