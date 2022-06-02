import ArckFontWeight from './ArckFontWeight';
import ArckFontWeightMenu from './ArckFontWeightMenu.vue';

Statamic.$bard.addExtension(() => ArckFontWeight);

Statamic.$components.register('ArckFontWeightMenu', require('./ArckFontWeightMenu.vue').default);

Statamic.$bard.buttons(() => {
    return {
        name: 'arckFontWeight',
        text: 'Font Weight',
        args: { key: "" },
        icon: 'arck-font-weight',
        component: ArckFontWeightMenu,
        command: (editor) => editor.command.setCustomExtension(),
    };
});
