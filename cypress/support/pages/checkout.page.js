class CheckoutPage {
    proceedToCheckout() {
      cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
      cy.wait(1000);
      cy.get('.col-sm-6 > .btn').click();
    }
  
    assertCheckoutPage() {
      cy.get('.active').should('contain.text', 'Checkout');
      cy.get(':nth-child(2) > .heading').should('contain.text', 'Address Details');
      cy.get('[colspan="2"]').should('contain.text','Total Amount');
    }
  
    fillPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
      cy.get('[data-qa="name-on-card"]').type(name); // Nome impresso no cartão
      cy.get('[data-qa="card-number"]').type(cardNumber); // Número do cartão
      cy.get('[data-qa="cvc"]').type(cvc); // Código CVC
      cy.get('[data-qa="expiry-month"]').type(expiryMonth); // Mês de expiração
      cy.get('[data-qa="expiry-year"]').type(expiryYear); // Ano de Expiração
    }
  
    confirmOrder() {
      cy.get('[data-qa="pay-button"]').should('contain.text', 'Pay and Confirm Order').click();
      cy.wait(1500);
      cy.get('.col-sm-9 > p').should('contain.text', 'Congratulations! Your order has been confirmed!');
    }
  }
  
  export default CheckoutPage;
  