describe("Test4", () => {
  it("Handling Child Windows", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });

  it("Handling Web Table", function () {
    // เปิดหน้าเว็บที่ต้องการทดสอบ
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // เข้าถึงคอลัมน์ที่ 2 ของแต่ละแถวในตาราง และทำการวนลูป (แต่ละแถวในคอลัมน์)
    cy.get("tr td:nth-child(2)").each((course, index) => {
      // เก็บข้อความของคอร์สในแต่ละแถว
      const text = course.text();

      // ตรวจสอบว่าชื่อคอร์สมีคำว่า "Python" หรือไม่
      if (text.includes("Python")) {
        // ถ้าเจอคอร์สที่มีคำว่า "Python" ให้เข้าถึงราคาของคอร์สในคอลัมน์ถัดไป (คอลัมน์ที่ 3)
        cy.get("tr td:nth-child(2)")
          .eq(index) // ระบุตำแหน่งของคอร์สที่เจอ
          .next() // เลื่อนไปยังคอลัมน์ถัดไป (ราคา)
          .then(function (price) {
            // เก็บข้อความของราคาจากคอลัมน์นั้น
            const priceText = price.text();

            // ตรวจสอบว่าราคาของคอร์สเป็น 25 หรือไม่
            expect(priceText).to.equal("25");
          });
      }
    });
  });

  it("Handling Mouse hover popus", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#mousehover").invoke("show");
    cy.contains("Top").click({ force: true });

    cy.get(".mouse-hover-content");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
});
