describe('about-page', () => {
    it('visits the about page', () => {
        cy.visit('/about');
        cy.get('[data-test="about-text"]').its('length').should('be', 1);
        cy.get('[data-test="logo-image"]').its('length').should('be', 1);
    });
});