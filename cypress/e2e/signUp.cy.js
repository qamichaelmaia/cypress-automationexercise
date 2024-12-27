import { faker } from '@faker-js/faker';

faker.locale = 'pt_BR';

describe('Testes na Homepage do Automation Exercise', () => {
  describe('The Login Page', () => {

    let email, name, streetAddress, city, zipcode, country, state, firstName, lastName, company, phoneNumber;

    beforeEach(() => {
      email = faker.internet.email().toLowerCase(); 
      name = faker.person.fullName(); 
      firstName = name.split(' ')[0]; // Extrair o primeiro nome
      lastName = name.split(' ').slice(-1).join(' '); // Extrair o sobrenome
      company = faker.company.name(); 
      streetAddress = faker.address.streetAddress(); 
      zipcode = faker.address.zipCode('#####-###'); 
      country = faker.address.country(); 
      city = faker.address.city();
      state = faker.address.state(); 
      phoneNumber = faker.phone.number();

      cy.visit('/login'); 
    });

    it('Deve preencher dados de cadastro', () => {

      cy.get('[data-qa="signup-name"]').type(name);
      cy.get('[data-qa="signup-email"]').type(email);
      cy.get('[data-qa="signup-button"]').click();
      cy.url().should('include', '/signup');
      cy.get('#id_gender1').click(); 

      cy.get('[data-qa="password"]').type('password1234'); 
      cy.get('[data-qa="days"]').select('24'); 
      cy.get('[data-qa="months"]').select('April'); 
      cy.get('[data-qa="years"]').select('1996'); 

      //checkbox
      cy.get('#newsletter').click(); 
      cy.get('#optin').click(); 

      // Preencher os campos do formulário de endereço
      cy.get('form > .title > b').should('contain.text', 'Address Information');
      cy.get('[data-qa="first_name"]').type(firstName);
      cy.get('[data-qa="last_name"]').type(lastName);
      cy.get('[data-qa="company"]').type(company);
      cy.get('[data-qa="address"]').type(streetAddress); 
      cy.get('[data-qa="country"]').select(3); 
      cy.get('[data-qa="state"]').type(state); 
      cy.get('[data-qa="city"]').type(city)
      cy.get('[data-qa="zipcode"]').type(zipcode); 
      cy.get('[data-qa="mobile_number"]').type(phoneNumber)

      cy.get('[data-qa="create-account"]').should('contain.text', 'Create Account')
      cy.get('[data-qa="create-account"]').click();

      cy.get('b').should('contain.text', 'Account Created!');
      cy.get('.col-sm-9').should('contain.text', 'Congratulations! Your new account has been successfully created!');

    });
  });
});
