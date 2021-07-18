<template>
    <router-link :to="route ? route : '/'">
        <a
            v-if="text"
            :class="{ 'border-transparent': !active, 'border-red-500': active }"
            href="#"
            class="
                border-b-2
                hover:text-gray-800
                dark:hover:text-gray-200
                hover:border-red-500
                mx-1.5
                sm:mx-6
                flex
            "
        >
            <Icon :name="icon" :class="{ 'text-red-500': active }" /> <span class="ml-2">{{ text }}</span>
        </a></router-link
    >
</template>

<script lang="ts">
import Icon from '../Icon.vue';

export default {
    name: 'NavbarItem',
    components: {
        Icon,
    },
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            require: true,
        },
        route: {
            type: String,
            require: true,
        },
        icon: {
            type: String,
            require: true,
        },
    },
};
</script>
