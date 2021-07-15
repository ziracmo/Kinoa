<template>
    <section
        class="p-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        v-if="cards.length"
    >
        <MagicCard v-for="card in cards" :card="card" v-bind:key="card.id" />
    </section>
</template>

<script lang="ts">
import MagicCard from '../components/Cards/MagicCard.vue';
import MagicService from '../services/magic';

import { defineComponent } from 'vue';
import { Card } from '@/models/magic';

type Data = {
    cards: Card[];
};

export default defineComponent({
    components: {
        MagicCard,
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
});
</script>
