import { expect } from 'chai'
import { createLocalVue, mount } from '@vue/test-utils'
import ShowMixes from '@/components/ShowMixes.vue'
import BootstrapVue from 'bootstrap-vue';

// create an extended `Vue` constructor
const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);

describe('ShowMixes.vue', () => {
    it('loads mixes from the object array', () => {
        let mix = {
            title: "808 MIXTAPES v.104 mixed by ASHAN & PARTIUS",
            artwork_url: "https://i1.sndcdn.com/artworks-000097181185-cjn66j-t300x300.jpg",
            id: 176956029,
            uri: "https://api.soundcloud.com/tracks/176956029"
        }

        const wrapper = mount(ShowMixes, {
            localVue,
            computed: {
                mixes: function () {
                    return [mix];
                }
            }
        });

        expect(wrapper.text()).to.include(mix.title);
    });
});