class HomePage {
  getEditBox() {
    return cy.get('[name="name"]').eq(0);
  }

  getTwoWayDataBiding() {
    return cy.get('[name="name"]').eq(1);
  }

  getGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  getEntrepreneur() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
