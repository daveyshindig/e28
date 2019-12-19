import { expect } from 'chai'
import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import BootstrapVue from 'bootstrap-vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

describe('Navbar.vue', () => {
    it('links correctly to pages', () => {
        const wrapper = shallowMount(Navbar, {
            localVue,
            stubs: {
                RouterLink: RouterLinkStub
            }
        });

        let foundIconLink = wrapper.find('[data-test="icon-link"]').exists();
        let foundHomeLink = wrapper.find('[data-test="home-link"]').exists();
        let foundAboutLink = wrapper.find('[data-test="about-link"]').exists();
        let foundFavoritesLink = wrapper.find('[data-test="favorites-link"]').exists();

        expect(foundIconLink).to.equal(true);
        expect(foundHomeLink).to.equal(true);
        expect(foundAboutLink).to.equal(true);
        expect(foundFavoritesLink).to.equal(true);
    });
});
