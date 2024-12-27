import { faker } from "@faker-js/faker";
import LoginPage from "../support/pages/login.page";
import ProductPage from "../support/pages/product.page";
import CheckoutPage from "../support/pages/checkout.page";

describe('Products', () => {
  describe('The Product Search', () => {

    let numeroCard, cvv;

    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
      numeroCard = faker.finance.creditCardNumber();
      cvv = faker.finance.creditCardCVV();
      loginPage.visit();
    });

    it('Deve fazer login e realizar checkout completo de compra', () => {
      loginPage.login('anabelle_hessel@hotmail.com', 'password1234');

      productPage.searchProduct('T-shirt');
      productPage.viewProduct();
      productPage.updateProductQuantity('3');
      cy.get('.product-information > :nth-child(6)').should('contain.text', 'In Stock');
      productPage.addToCart();
      productPage.assertProductAddedToCart();
      productPage.closeModal();
      productPage.goToCategory();

      productPage.selectProductInCategory();
      productPage.updateProductQuantity('4');
      productPage.addToCart();
      productPage.assertProductInCart();
      productPage.closeModal();

      checkoutPage.proceedToCheckout();
      checkoutPage.assertCheckoutPage();
      cy.get(':nth-child(7) > .btn').click();

      checkoutPage.fillPaymentDetails('Anabelle Hessel', numeroCard, cvv, '05', '2029');
      checkoutPage.confirmOrder();
    });
  });
});
