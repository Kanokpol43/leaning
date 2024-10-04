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

  it("Handling Frames", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('[href="mentorship"]').eq(0).click();

    cy.wait(2000);
    cy.iframe().find(".pricing-title").should("have.length", 2);
  });

  it.only("Calendars", () => {
    const monthNumber = "6",
      date = "15",
      year = "2027";

    const result = [monthNumber, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    cy.get(".react-date-picker__inputGroup").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();

    cy.contains("button", year).click();
    cy.get(".react-calendar__year-view__months__month")
      .eq(Number(monthNumber) - 1)
      .click();

    cy.contains("abbr", date).click();

    //Assertion
    cy.get(".react-date-picker__inputGroup__input").each((field, index) => {
      cy.wrap(field).invoke("val").should("eq", result[index]);
    });
  });
});
