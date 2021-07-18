<template>
    <section class="h-full">
        <div v-if="card" class="grid grid-cols-1 md:grid-cols-4 md:gap-6 m-4">
            <div>
                <MagicCard :card="card" :customClasses="'h-80 md:h-96'" />
            </div>
            <div class="col-span-3 mt-3 md:mt-0">
                <h1 class="text-5xl mb-4 text-center md:text-left border-b-2 border-red-500 pb-3">{{card.name}}</h1>
                <p v-if="card.flavor_text">{{card.flavor_text}}</p>
                <p v-if="card.oracle_text">{{card.oracle_text}}</p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Card } from '@/models/magic';
import MagicService from '@/services/magic';
import axios from 'axios';
import { defineComponent } from 'vue';
import MagicCard from '../components/Cards/MagicCard.vue';

type Data = {
    card?: Card;
    loading: boolean;
};
export default defineComponent({
    name: 'CardDetails',
    components: {
        MagicCard,
    },
    data: () => {
        return {
            card: undefined,
            loading: false,
        } as Data;
    },
    async mounted() {
        this.$data.loading = true;
        const url: string = this.$route.params.url as string;
        if (url) {
            const res = await axios.get(url);
            this.$data.card = res.data;
        } else {
            const id: string = this.$route.params.id as string;
            this.$data.card = await MagicService.getCardById(id);
        }
        this.$data.loading = false;
    },
});
</script>
