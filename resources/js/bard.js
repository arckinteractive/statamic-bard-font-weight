import ArckFontWeight from './ArckFontWeight';
import ArckFontWeightMenu from './ArckFontWeightMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new ArckFontWeight()));
Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontweight',
        text: 'Font Weight',
        command: 'textStyle',
        args: {
            key: ""
        },
        icon: 'arck-font-weight',
        component: ArckFontWeightMenu
    };
});