export default class ArckFontWeight {
    name() {
        return "ArckFontWeight";
    }

    schema() {
        return {
            attrs: {
                key: '',
            },
            parseDOM: [
                {
                    tag: "span.arck-font-weight",
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
                }
            ],
            toDOM: (mark) =>  {
                let style = 'font-weight: ' + mark.attrs.key.replace('afw-', '') + ';';

                return [
                    "span",
                    {
                        'data-class': mark.attrs.key,
                        'style': style,
                    },
                    0,
                ];
            }
        };
    }

    commands({type, updateMark, removeMark}) {
        return attrs => {
            if (attrs.key) {
                return updateMark(type, attrs)
            }

            return removeMark(type)
        }
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}