describe("Framework", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Hook Fucntion", function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('[name="name"]').eq(0).type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);
  });
});
