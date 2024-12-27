class LoginPage {
    visit() {
      cy.visit('/login');
    }
  
    login(email, password) {
      cy.get('[data-qa="login-email"]').type(email);
      cy.get('[data-qa="login-password"]').type(password);
      cy.get('[data-qa="login-button"]').click();
    }
  }
  
  export default LoginPage;
  