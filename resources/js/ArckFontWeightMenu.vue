<template>
    <div class="class-type-wrapper">
        <button
            class="bard-toolbar-button"
            :class="{ 'active': currentKey || showOptions }"
            v-html="button.html"
            v-tooltip="button.text"
            @click="showOptions = !showOptions"
        ></button>
        <div class="class-type-container" v-if="showOptions" v-click-outside="closeClassTypeMenu">
            <button v-for="(type, key) in classTypes" class="class-type-button" @click="setClassType(key)"
                    :class="{ 'active' : key == currentKey }">
                <span :class="getClass(key)">{{ type.name }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    mixins: [BardToolbarButton],
    computed: {
        classTypes() {
            return {
                'text-xs': {
                    name: 'Extra Small Text',
                },
                'text-sm': {
                    name: 'Small Text',
                },
                'text-base': {
                    name: 'Regular Text',
                },
                'text-lg': {
                    name: 'Large Text',
                },
                'text-xl': {
                    name: 'Text XL',
                },
                'text-2xl': {
                    name: 'Text 2XL',
                },
                'text-3xl': {
                    name: 'Text 3XL',
                },
                'text-4xl': {
                    name: 'Text 4XL',
                },
                'text-5xl': {
                    name: 'Text 5XL',
                },
                'text-6xl': {
                    name: 'Text 6XL',
                },
                'text-7xl': {
                    name: 'Text 7XL',
                },
                'text-8xl': {
                    name: 'Text 8XL',
                },
                'text-9xl': {
                    name: 'Text 9XL',
                },
            };
        },
        currentKey() {
            return this.editor.getAttributes('ArckFontWeight').key;
        }
    },
    data() {
        return {
            showOptions: false
        };
    },
    methods: {
        closeClassTypeMenu() {
            // close the menu
            this.showOptions = false;
        },
        setClassType(classTypeKey) {
            // update the editor
            this.editor.commands.toggleArckFontWeight({
                key: classTypeKey == this.currentKey ? false : classTypeKey
            })
            // hide the menu
            this.showOptions = false;
        },
        getClass(key) {
            const classes = {
                'class-type-label': true
            };

            classes['arck-' + key] = true;

            return classes;
        },
    }
};
</script>
<style lang="postcss">
.class-type-wrapper {
    @apply inline-block relative;
}
.class-type-container {
    @apply absolute bg-white border border-gray-300 rounded-sm z-10 divide-y divide-gray-100 shadow-lg;
}
.class-type-button {
    @apply text-left px-3 py-2 w-full hover:bg-gray-100 flex items-center;
}
.class-type-button.active {
    @apply bg-gray-200;
}
.class-type-label {
    @apply block text-left whitespace-nowrap;
}

</style>
