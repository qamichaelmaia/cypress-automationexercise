// cypress/support/pages/ProductPage.js

class ProductPage {
    searchProduct(product) {
      cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
      cy.get('#search_product').type(product); // Pesquisar produto
      cy.get('#submit_search').click();
    }
  
    viewProduct() {
      cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
    }
  
    updateProductQuantity(quantity) {
      cy.get('#quantity').clear().type(quantity); // Quantidade do produto
    }
  
    addToCart() {
      cy.get(':nth-child(5) > .btn').click();
    }
  
    assertProductAddedToCart() {
      cy.get('.modal-body > :nth-child(1)').should('contain.text', 'Your product has been added to cart.');
    }
  
    closeModal() {
      cy.get('.modal-footer > .btn').click();
    }
  
    goToCategory() {
      cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    }
  
    selectProductInCategory() {
      cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    }
  
    assertProductInCart() {
      cy.get('.modal-title').should('contain.text', 'Added!');
    }
  }
  
  export default ProductPage;
  