describe('home-page', () => {

    let mix = {
        id: 182899946,
        title: "808 MIXTAPES v.107 mixed by SUPER CW",
        artwork_url: "https://i1.sndcdn.com/artworks-000101174080-m54g1c-t300x300.jpg",
        url: "https://api.soundcloud.com/tracks/182899946"
    };

    it('displays mixes', () => {
        // confirm we see one of our mixes in particular
        cy.visit('/');
        cy.contains('[data-test="mix-title"]', mix.title);

        // confirm that at least 10 mixes show up
        cy.get('[data-test="mix"]').its('length').should('be.gte', 10);
    });

    it('has cover art setup correctly', () => {
        cy.visit('/');
        // we find the artwork
        cy.get('[data-test="mix-artwork-' + mix.artwork_url + '"]').click();
        // clicking on us gets us to the mix's page
        cy.url().should('include', mix.id);
    });
});
