describe('mix-page', () => {

    let mix = {
        id: 182899946,
        title: "808 MIXTAPES v.107 mixed by SUPER CW",
        artwork_url: "https://i1.sndcdn.com/artworks-000101174080-m54g1c-t300x300.jpg",
        url: "https://api.soundcloud.com/tracks/182899946"
    };

    it('the mix is found and playable', () => {
        // we navigate to the playlist
        cy.visit('/mix/' + mix.id);

        // working with iFrames thanks to the Cypress community on Github
        // https://github.com/cypress-io/cypress/issues/136#issuecomment-525994895
        cy.get('iframe')
            .iframeLoaded()
            .its('document')
            .getInDocument('.playButton')
            .should('exist');
    });
});
