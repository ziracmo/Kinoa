<template>
    <div class="w-9/12 m-auto py-16 min-h-full flex items-center justify-center">
        <div class="bg-white dark:bg-gray-900 shadow overflow-hidden sm:rounded-lg pb-8">
            <div class="border-t border-gray-200 dark:border-green-500 text-center pt-8">
                <h1 class="text-9xl font-bold text-green-400">404</h1>
                <h1 class="text-6xl font-medium py-8">Oops! Page not found</h1>
                <p class="text-2xl pb-8 px-12 font-medium">
                    Oops! The page you are looking for does not exist. It might have been moved or
                    deleted.
                </p>
                <router-link to="/home">
                    <button
                        class="
                            bg-gradient-to-r
                            from-green-400
                            to-green-700
                            hover:from-green-500 hover:to-gray-900
                            text-white
                            font-semibold
                            px-6
                            py-3
                            rounded-md
                            mr-6
                        "
                    >
                        HOME
                    </button></router-link
                >
            </div>
        </div>
    </div>
</template>
