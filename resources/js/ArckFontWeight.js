const { Mark } = Statamic.$bard.tiptap.core;

const ArckFontWeight = Mark.create({
    name: 'ArckFontWeight',

    addAttributes() {
        return {
            key: {
                default: '',
                parseHtml: element => {element.querySelector('span.arck-font-weight').getAttribute('data-class')}
            }
        }
    },

    parseHtml() {
        return [
            {
                tag: "span.arck-font-weight"
            }
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return [
            'span',
            {
                ...HTMLAttributes,
                class: 'arck-font-weight',
                'data-class': HTMLAttributes.key,
                'style': 'font-weight: ' + HTMLAttributes.key.replace('afw-', '') + ';'
            },
            0
        ]
    },

    addCommands() {
        return {
            ArckFontWeight: (attributes) => ({ chain }) => {
                if (attributes.key) {
                    return chain()
                        .setMark(this.name, attributes)
                        .run()
                }
    
                return chain()
                    .unsetMark(this.name, { extendEmptyMarkRange: true })
                    .run()
            }
        }
    }
})

export default ArckFontWeight;