<template>
    <div class="flex flex-row mx-auto text-gray-600">
        <input
            class="
                w-full
                bg-transparent
                h-12
                px-5
                text-sm
                border
                border-gray-500
                focus:outline-none
                text-white
                
            "
            name="search"
            v-on:keyup.enter="emitQuery()"
            v-model="searchQuery"
            placeholder="Search as card..."
        />
        <button type="submit" class="px-4 ml-2 h-12 text-white bg-red-700" v-on:click="emitQuery()">
            Search
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
