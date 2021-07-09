<template>
    <router-link :to="route ? route : '/'">
        <a
            v-if="text"
            :class="{ 'border-transparent': !active, 'border-green-500': active }"
            href="#"
            class="border-b-2  hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6"
        >
            {{ text }}</a
        ></router-link
    >
</template>

<script>
export default {
    name: 'NavbarItem',
    props: {
        active: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            require: true
        },
        route: {
            type: String,
            require: true
        },
    },
}
</script>
