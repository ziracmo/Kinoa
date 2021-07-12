<template>
    <div class="flex justify-center">
        <img :src="card.image_uris.normal" class="rounded-xl" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Card } from '../../models/magic';

export default defineComponent({
    props: {
        card: Object as PropType<Card>,
    },
});
</script>
