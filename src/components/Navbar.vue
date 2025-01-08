<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import LoginModal from "@/components/auth/LoginModal.vue";

const showLoginModal = ref(false);
const { user, isAuthenticated, signOut } = useAuth();
</script>

<template>
    <header
        class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4"
    >
        <div class="container mx-auto flex items-center justify-between">
            <!-- Logo Section -->
            <div class="flex items-center space-x-2">
                <img src="/assets/logo-karams.png" alt="Logo" class="h-10" />
            </div>

            <!-- Navigation Links -->
            <nav class="md:flex items-center space-x-6">
                <font-awesome-icon
                    class="md:hidden text-3xl text-white flex"
                    icon="bars"
                />
                <!-- Login and Sign Up Buttons -->
                <div class="ml-6 md:flex items-center space-x-4 hidden">
                    <template v-if="isAuthenticated">
                        <span class="user-email">{{ user?.email }}</span>
                        <button @click="signOut" class="btn-signout">
                            Sign Out
                        </button>
                    </template>
                    <button
                        v-else
                        @click="showLoginModal = true"
                        class="btn-signin px-6 py-2 bg-[#FE1F99] text-white hover:text-[#1a1a1a] font-semibold rounded"
                    >
                        Se connecter
                    </button>
                    <RouterLink
                        to="/add-company"
                        class="px-6 py-2 border border-[#FE1F99] text-white hover:text-[#FE1F99] font-semibold rounded"
                    >
                        <font-awesome-icon :icon="['fas', 'plus-circle']" />
                        Ajouter
                    </RouterLink>
                </div>
            </nav>
        </div>
        <LoginModal v-model="showLoginModal" />
    </header>
</template>
