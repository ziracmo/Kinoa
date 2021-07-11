<template>
    <nav class="flex items-center justify-between flex-wrap bg-white dark:bg-gray-900 p-6 shadow-lg">
        <div class="mx-auto">
            <div class="flex items-center justify-center text-gray-600 capitalize dark:text-gray-300">
                <NavbarItem text="Home" :active="currentRoute === '/home'" route="/home" />
                <NavbarItem text="Decks" :active="currentRoute === '/deck'" route="/deck"/>
                <NavbarItem text="Favorites" :active="currentRoute === '/favorites'" route="/favorites"/>
                <NavbarItem text="Settings" :active="currentRoute === '/settings'" route="/settings"/>
            </div>
        </div>
    </nav>
</template>

<script>
import NavbarItem from './NavbarItem.vue'

export default {
    components: {
        NavbarItem
    },
    data: () => {
        return {
            currentRoute: '/'
        }
    },
    watch: {
        $route(to) {
            this.currentRoute = to.path;
        },
    },
}
</script>
