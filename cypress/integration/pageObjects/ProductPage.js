class ProductPage {
  checkOutButton() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default ProductPage;
