<template>
    <div class="relative mx-auto text-gray-600">
        <input
            class="
                w-full
                border-2 border-green-700
                bg-transparent
                h-12
                px-5
                pr-16
                rounded-lg
                text-sm
                focus:outline-none
            "
            type="search"
            name="search"
            v-on:keyup.enter="emitQuery()"
            v-model="searchQuery"
            placeholder="Search as card..."
        />
        <button
            type="submit"
            class="absolute right-0 top-0 px-4 h-full bg-green-700 rounded-r-lg"
            v-on:click="emitQuery()"
        >
            <SearchIcon class="h-8 text-white" />
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { SearchIcon } from 'heroicons-vue3/solid';

type Data = {
    searchQuery: string;
};

const SearchBar = defineComponent({
    name: 'SearchBar',
    components: {
        SearchIcon,
    },
    data() {
        return {
            searchQuery: '',
        } as Data;
    },
    methods: {
        emitQuery() {
            this.$emit('search', this.$data.searchQuery);
        },
    },
});

export default SearchBar;
</script>
