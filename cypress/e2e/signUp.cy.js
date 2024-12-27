import { faker } from '@faker-js/faker';
import SignUpPage from '../support/pages/signUp.page';

faker.locale = 'pt_BR';

// Função para gerar número de telefone no formato br
function gerarTelefoneBrasileiro() {
  const ddd = faker.number.int({ min: 11, max: 99 }); // DDD
  const numero = faker.phone.number('## #########'); // Padrão telefone
  
  // Formatação do número 
  return `(${ddd}) ${numero.substr(0, 1)} ${numero.substr(1, 4)}-${numero.substr(5)}`;
}

console.log(gerarTelefoneBrasileiro());

describe('Sign Up', () => {
  describe('Deve realizar o fluxo de cadastro preenchendo todos os campos corretamente', () => {

    let email, name, streetAddress, city, zipcode, country, state, firstName, lastName, company, phoneNumber;

    const signUpPage = new SignUpPage();

    beforeEach(() => {
      email = faker.internet.email().toLowerCase(); 
      name = faker.person.fullName(); 
      firstName = name.split(' ')[0]; 
      lastName = name.split(' ').slice(-1).join(' '); 
      company = faker.company.name(); 
      streetAddress = faker.address.streetAddress(); 
      zipcode = faker.address.zipCode('#####-###'); 
      country = faker.address.country(); 
      city = faker.address.city();
      state = faker.address.state(); 
      phoneNumber = gerarTelefoneBrasileiro(); // Gerar telefone no formato brasileiro

      signUpPage.visit(); // Visita a página de login
    });

    it('Deve preencher dados de cadastro', () => {

      signUpPage.fillSignUpForm(name, email);
      signUpPage.fillGenderAndPassword();
      signUpPage.fillDobAndNewsletter();
      signUpPage.fillAddress(firstName, lastName, company, streetAddress, state, city, zipcode, phoneNumber);
      signUpPage.submitCreateAccount();
      signUpPage.verifyAccountCreated();
    });
  });
});
