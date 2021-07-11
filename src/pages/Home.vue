<template>
    <div class="p-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8" v-if="cards.length">
        <MagicCard v-for="card in cards" :card="card" v-bind:key="card.id"/>
    </div>
</template>

<script lang="ts">
import MagicCard from '../components/Cards/MagicCard.vue';
import MagicService from '../services/magic';

import { defineComponent } from 'vue';

const data = {
    cards: [],
};

export default defineComponent({
    components: {
        MagicCard,
    },
    data: () => {
        return data;
    },
    async mounted() {
        const res = await MagicService.getAllCards();
        this.cards = res as any;
    },
});
</script>
