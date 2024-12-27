import 'cypress-file-upload';


describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('/contact_us')
    });
    it('Forms', () => {
        cy.get('[data-qa="name"]').type('Anabelle Hessel')
        cy.get('[data-qa="email"]').type('anabelle_hessel@hotmail.com')
        cy.get('[data-qa="subject"]').type('Add T-Shirt Github')
        cy.get('[data-qa="message"]').type('I would like to request a T-shirt with a Github image for purchase in the store.😊(test)')
        cy.get(':nth-child(6) > .form-control').attachFile('tshirt.jpg')
        cy.get('[data-qa="submit-button"]').click()

        cy.get('.status').should('contain.text', 'Success! Your details have been submitted successfully.')
    });
});
