<template>
    <div class="p-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card />
    </div>
</template>

<script lang="ts">
import Card from '../components/Card.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Card,
    },
});
</script>
