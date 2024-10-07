describe("Framework", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Hook Fucntion", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('[name="name"]').eq(0).type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
    cy.get('[name="name"]').eq(1).should("have.value", this.data.name);
    cy.get('[name="name"]').eq(0).should("have.attr", "minlength", 2);
    cy.get("#inlineRadio3").should("be.disabled");
  });

  it("Click button dynamic", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();

    cy.selectProduct("Note");
  });
});
