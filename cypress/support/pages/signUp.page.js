class SignUpPage {
    visit() {
      cy.visit('/login');
    }
  
    fillSignUpForm(name, email) {
      cy.get('[data-qa="signup-name"]').type(name);
      cy.get('[data-qa="signup-email"]').type(email);
      cy.get('[data-qa="signup-button"]').click();
    }
  
    fillGenderAndPassword() {
      cy.url().should('include', '/signup');
      cy.get('#id_gender1').click(); // Seleciona o gênero
      cy.get('[data-qa="password"]').type('password1234'); // Senha
    }
  
    fillDobAndNewsletter() {
      cy.get('[data-qa="days"]').select('24');
      cy.get('[data-qa="months"]').select('April');
      cy.get('[data-qa="years"]').select('1996');
      cy.get('#newsletter').click(); // Checkbox do newsletter
      cy.get('#optin').click(); // Checkbox de opt-in
    }
  
    fillAddress(firstName, lastName, company, streetAddress, state, city, zipcode, phoneNumber) {
      cy.get('form > .title > b').should('contain.text', 'Address Information');
      cy.get('[data-qa="first_name"]').type(firstName); // Nome
      cy.get('[data-qa="last_name"]').type(lastName); // Sobrenome
      cy.get('[data-qa="company"]').type(company); // Empresa
      cy.get('[data-qa="address"]').type(streetAddress); // Endereço
      cy.get('[data-qa="country"]').select(3); // País
      cy.get('[data-qa="state"]').type(state); // Estado
      cy.get('[data-qa="city"]').type(city); // Cidade
      cy.get('[data-qa="zipcode"]').type(zipcode); // Cep
      cy.get('[data-qa="mobile_number"]').type(phoneNumber); //Telefone
    }
  
    submitCreateAccount() {
      cy.get('[data-qa="create-account"]').should('contain.text', 'Create Account');
      cy.get('[data-qa="create-account"]').click();
    }
  
    verifyAccountCreated() {
      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('.col-sm-9').should('contain.text', 'Congratulations! Your new account has been successfully created!');
    }
  }
  
  export default SignUpPage;
  