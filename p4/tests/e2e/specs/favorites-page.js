describe('favorites-page', () => {

    let mix = {
        id: 182899946,
        title: "808 MIXTAPES v.107 mixed by SUPER CW",
        artwork_url: "https://i1.sndcdn.com/artworks-000101174080-m54g1c-t300x300.jpg",
        url: "https://api.soundcloud.com/tracks/182899946"
    };

    it('shows a message when there are no favorites', () => {
        cy.visit('/favorites');
        cy.contains('h5', "You haven't saved any favorites yet.");
    });

    it('displays favorite after adding one', () => {
        // add the favorite
        cy.visit('/');
        cy.get('[data-test="mix-link"').contains(mix.title).click();
        cy.get('[data-test="add-favorite-btn"').click();
        // check it's on the faves page
        cy.visit('/favorites');
        cy.contains('[data-test="mix"]', mix.title);
    });

    it('hides favorite after removing one', () => {
        // first, add the favorite
        cy.visit('/');
        cy.get('[data-test="mix-link"').contains(mix.title).click();
        cy.get('[data-test="add-favorite-btn"').click();
        cy.visit('/favorites');
        cy.contains('[data-test="mix"]', mix.title);
        cy.get('[data-test="mix-link"]').contains(mix.title).click();
        // then remove it
        cy.get('[data-test="remove-favorite-btn"]').click();
        // finally, ensure it does not exist on the faves page
        cy.visit('/favorites');
        cy.get('[data-test="mix"]').should('not.exist');
    });
});