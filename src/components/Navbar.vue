<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { useAuth } from "@/composables/useAuth";
import LoginModal from "@/components/auth/LoginModal.vue";
import { supabase } from "@/lib/supabaseClient";

const showLoginModal = ref(false);
const { user, isAuthenticated, loading, signOut } = useAuth();
const profile = ref(null);
//TODO : Make it in a separated file. This is not a good practice.
const fetchUserProfile = async (userId) => {
    try {
        loading.value = true;
        const { data, error: fetchError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", userId)
            .single();
        if (fetchError) throw fetchError;
        profile.value = data;
    } catch (e) {
        console.error("Error fetching profile", e);
    } finally {
        loading.value = false;
    }
};

// Watch for changes in the authenticated user
watch(user, (newUser) => {
    if (newUser) {
        fetchUserProfile(newUser.id); // Fetch profile when a user logs in
    } else {
        profile.value = null; // Clear profile when user logs out
    }
});

// Fetch profile on initial load if user is already logged in
onMounted(() => {
    if (user.value) {
        fetchUserProfile(user.value.id);
    }
});
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
                <div class="ml-6 md:flex tems-center space-x-4 hidden">
                    <template v-if="isAuthenticated">
                        <img
                            :src="profile?.avatar_url"
                            class="rounded-full w-10 h-10"
                            alt="User Avatar"
                        />
                        <button
                            @click="signOut"
                            class="btn-signout text-red-500"
                        >
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
