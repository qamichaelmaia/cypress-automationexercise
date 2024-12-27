import { faker } from "@faker-js/faker";

describe('Products', () => {
  describe('The Product Searcgh', () => {

    let numeroCard, cvv;

    beforeEach(() => {

        numeroCard = faker.finance.creditCardNumber();
        cvv = faker.finance.creditCardCVV();
    
        cy.visit('/login'); 
    
    });

    it('Deve preencher dados de cadastro', () => {
        cy.get('[data-qa="login-email"]').type('anabelle_hessel@hotmail.com')
        cy.get('[data-qa="login-password"]').type('password1234')
        cy.get('[data-qa="login-button"]').click()

        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('#search_product').type('T-shirt');
        cy.get('#submit_search').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').should('contain.text', 'View Product').click()
        cy.get('#quantity').clear().type('3')
        cy.get('.product-information > :nth-child(6)').should('contain.text', 'In Stock')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-body > :nth-child(1)').should('contain.text', 'Your product has been added to cart.');
        cy.wait(1000);
        cy.get('.modal-footer > .btn').click();
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()

        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > p').should('contain.text', 'Premium Polo')
        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('.modal-title').should('contain.text', 'Added!')
        cy.get('.modal-footer > .btn').click()

        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.wait(1000)
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.active').should('contain.text', 'Checkout')
        cy.get(':nth-child(2) > .heading').should('contain.text', 'Address Details')
        cy.get('[colspan="2"]').should('contain.text','Total Amount')
        cy.get(':nth-child(7) > .btn').click()


        cy.get('.heading').should('contain.text', 'Payment')
        cy.get('[data-qa="name-on-card"]').type(' Anabelle Hessel')
        cy.get('[data-qa="card-number"]').type(numeroCard)
        cy.get('[data-qa="cvc"]').type(cvv)
        cy.get('[data-qa="expiry-month"]').type('05')
        cy.get('[data-qa="expiry-year"]').type('2029')
        cy.get('[data-qa="pay-button"]').should('contain.text', 'Pay and Confirm Order').click()
        cy.wait(1500)
        cy.get('.col-sm-9 > p').should('contain.text', 'Congratulations! Your order has been confirmed!')
    });
  });
});
