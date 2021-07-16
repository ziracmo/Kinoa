<template>
    <section class="p-4">
        <div class="pb-4">
            <SearchBar @search="handleSearchEvent($event)" />
        </div>
        <div v-if="cards.length" class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            <MagicCard v-for="card in cards" :card="card" v-bind:key="card.id" />
        </div>
    </section>
</template>

<script lang="ts">
import MagicCard from '../components/Cards/MagicCard.vue';
import MagicService from '../services/magic';
import SearchBar from '../components/SearchBar.vue';

import { defineComponent } from 'vue';
import { Card } from '@/models/magic';

type Data = {
    cards: Card[];
};

export default defineComponent({
    components: {
        MagicCard,
        SearchBar,
    },
    data: () => {
        return {
            cards: [],
        } as Data;
    },
    async mounted() {
        const res = await MagicService.getCardFromArena();
        this.cards = res.data;
    },
    methods: {
        async handleSearchEvent(query: string) {
            if (query) {
                const res = await MagicService.getCardsFromString(query);
                this.cards = res.data;
            }
        },
    },
});
</script>
