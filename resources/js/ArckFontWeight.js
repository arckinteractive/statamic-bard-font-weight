
const { Mark, mergeAttributes } = Statamic.$bard.tiptap.core;

export const ArckFontWeight = Mark.create({
    name: 'arckFontWeight',

    addAttributes() {
        return {
            key: {
                default: '',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: "span.arck-font-weight",
                getAttrs: (dom) => ({
                    key: dom.getAttribute('data-class')
                })
            }
        ];
    },

    renderHTML({mark, HTMLAttributes}) {
        let style = 'font-weight: ' + mark.attrs.key.replace('afw-', '') + ';';

        return [
            "span",
            mergeAttributes(HTMLAttributes,
            {
                'data-class': mark.attrs.key,
                'style': style
            }),
            0,
        ];
    },

    addCommands() {
        return {
            toggleArckFontWeight: (attributes) => ({ commands }) => {
                console.log(attributes);
                return commands.toggleMark(this.name, attributes);
            }
        }
    },

    pasteRules({type}) {
        return [];
    },

    plugins() {
        return [];
    }
});





