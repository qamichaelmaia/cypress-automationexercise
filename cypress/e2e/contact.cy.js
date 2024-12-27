import 'cypress-file-upload';
import ContactUs from '../support/pages/contact.page'


describe('Contact Us', () => {
    beforeEach(() => {
        cy.visit('/contact_us')
    });
    it('Forms', () => {
        ContactUs.fillOutForm(
            'Anabelle Hessel', 
            'anabelle_hessel@hotmail.com', 
            'Add T-Shirt Github', 
            'I would like to request a T-shirt with a Github image for purchase in the store.😊(test)', 
            'tshirt.jpg' //arquivo de envio
        );

        //Botão enviar
        ContactUs.submitForm();

        //Confirmação de mensagem de envio
        ContactUs.checkForSuccessMessage();
    });
});
