<template>
    <section class="p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 pb-4">
            <div class="mb-2">
                <h1 class="text-2xl font-bold">Home</h1>
                <h2 class="text-red-500 text-xl font-bold">Arena Cards</h2>
            </div>
            <div>
                <SearchBar @search="handleSearchEvent($event)" />
            </div>
        </div>
        <div
            v-if="cards.length && !loading"
            class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
            <MagicCard v-for="card in cards" :card="card" v-bind:key="card.id" />
        </div>
        <div v-else-if="loading" class="text-center pt-28">
            <Loading />
        </div>
        <div v-else>
            <h1 class="text-2xl font-bold text-center pt-8">No Card Found</h1>
        </div>
    </section>
</template>

<script lang="ts">
import MagicCard from '../components/Cards/MagicCard.vue';
import MagicService from '../services/magic';
import SearchBar from '../components/SearchBar.vue';

import { defineComponent } from 'vue';
import { Card } from '@/models/magic';
import Loading from '../components/Loader.vue';

type Data = {
    cards: Card[];
    loading: boolean;
};

export default defineComponent({
    components: {
        MagicCard,
        SearchBar,
        Loading,
    },
    data: () => {
        return {
            cards: [],
            loading: false,
        } as Data;
    },
    async mounted() {
        this.loading = true;
        const res = await MagicService.getCardFromArena();
        this.cards = res.data;
        this.loading = false;
    },
    methods: {
        async handleSearchEvent(query: string) {
            if (query) {
                this.loading = true;
                const res = await MagicService.getCardsFromString(query);
                this.cards = res.data;
                this.loading = false;
            }
        },
    },
});
</script>
