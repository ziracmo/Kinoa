<template>
    <div class="flex justify-center">
        <img v-if="card.image_uris"
            :src="card.image_uris.normal"
            @click="goToDetails()"
            class="rounded-xl"
            :class="customClasses ? customClasses : ''"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card } from '../../models/magic';

const MagicCard = defineComponent({
    props: {
        customClasses: String,
        card: Object as PropType<Card>,
    },
    methods: {
        goToDetails() {
            if (this.card) {
                this.$router.push({
                    name: 'CardDetails',
                    params: { id: this.card.id, url: this.card.uri },
                });
            }
        },
    },
});

export default MagicCard;
</script>
