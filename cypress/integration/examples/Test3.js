describe("Test 3", () => {
  it("My FristTest case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Checkbox
    cy.get("#checkBoxOption1").check().should("be.checked");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    // Checkbox multiple
    cy.get('input[type="checkbox"]')
      .should("not.be.checked")
      .check()
      .and("be.checked");

    cy.get('input[type="checkbox"]').uncheck(["option2", "option3"]);

    // Static Dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic dropdown
    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item").each((value) => {
      if (value.text() === "India") value.click();
      cy.get("#autocomplete").should("have.value", "India");
    });

    // Visible and Invisible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    // Radio Button
    cy.get('[value="radio2"]').check().should("be.checked");
    cy.get('[value="radio3"]').check().should("be.checked");
    cy.get('[value="radio2"]').should("not.be.checked");
  });
});
