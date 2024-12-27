class ContactUs {
    get nameInput() {
        return cy.get('[data-qa="name"]');
    }
    get emailInput(){
        return cy.get('[data-qa="email"]');
    }
    get subjectInput(){
        return cy.get('[data-qa="subject"]');
    }
    get messageInput(){
        return cy.get('[data-qa="message"]');
    }
    get fileInput(){
        return cy.get(':nth-child(6) > .form-control');
    }
    get summitButton(){
        return cy.get('[data-qa="submit-button"]');
    }
    get successMessage(){
        return cy.get('.status');
    }

    // Interação com os elementos
    fillOutForm(name, email, subject, message, filePath) {
        this.nameInput.type(name); // Nome do Usuário
        this.emailInput.type(email); // E-mail
        this.subjectInput.type(subject); // Tipo de produto
        this.messageInput.type(message); // Mensagem de formulário
        this.fileInput.attachFile(filePath); // Arquivo de seleção
    }

    submitForm(){
        this.summitButton.click();
    }
    checkForSuccessMessage(){
        this.successMessage.should('contain.text', 'Success! Your details have been submitted successfully.')
    }
}

export default new ContactUs();