<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <header
        class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
    >
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo Section -->
            <div class="flex items-center space-x-2">
                <img
                    src="https://via.placeholder.com/40"
                    alt="Logo"
                    class="h-10"
                />
                <RouterLink to="/" class="text-2xl font-bold text-white">
                    K<span class="text-[#d17624]">ARA</span>MS
                </RouterLink>
            </div>

            <!-- Navigation Links -->
            <nav class="md:flex items-center space-x-6">
                <font-awesome-icon
                    class="md:hidden text-3xl text-white flex"
                    icon="bars"
                />
                <!-- Login and Sign Up Buttons -->
                <div class="ml-6 md:flex items-center space-x-4 hidden">
                    <a
                        href="#login"
                        class="px-6 py-2 bg-[#d17624] text-white font-semibold rounded hover:bg-[#F18C2D] transition duration-300"
                        >Se connecter</a
                    >
                    <RouterLink
                        to="/add-company"
                        class="px-6 py-2 border border-[#d17624] text-white font-semibold rounded hover:bg-[#d17624] hover:text-white hover:border-none transition duration-300"
                    >
                        <font-awesome-icon :icon="['fas', 'plus-circle']" />
                        Ajouter
                    </RouterLink>
                </div>
            </nav>
        </div>
    </header>
</template>
