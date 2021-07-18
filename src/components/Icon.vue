<template>
    <span :class="customClasses">
        <span v-if="name === 'home'">
            <HomeIcon class="h-5" />
        </span>
        <span v-if="name === 'cog'">
            <CogIcon class="h-5" />
        </span>
        <span v-if="name === 'collection'">
            <CollectionIcon class="h-5" />
        </span>
        <span v-if="name === 'star'">
            <StarIcon class="h-5" />
        </span>
    </span>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { HomeIcon, CogIcon, CollectionIcon, StarIcon} from 'heroicons-vue3/outline';
export default defineComponent({
    name: 'Icon',
    props: ['name', 'customClasses'],
    components: {
        HomeIcon,
        CogIcon,
        CollectionIcon,
        StarIcon
    }
})
</script>