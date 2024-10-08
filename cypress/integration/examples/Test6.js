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

  it.only("Click button dynamic", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(2) > .nav-link").click();

    // วนลูปผ่าน array ของชื่อสินค้าใน this.data.productName (คือ ["Blackberry", "Nokia"])
    this.data.productName.forEach(function (element) {
      // เรียกฟังก์ชัน cy.selectProduct สำหรับแต่ละ element (สินค้า)
      // โดยในแต่ละรอบ element จะเป็นชื่อสินค้า เช่น "Blackberry" ในรอบแรก และ "Nokia" ในรอบถัดไป
      cy.selectProduct(element);
    });

    cy.selectProduct("Blackberry");
    cy.selectProduct("Nokia");
  });
});
