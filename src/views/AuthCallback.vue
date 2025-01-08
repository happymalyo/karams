<template>
    <div class="callback-container">Processing authentication...</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabaseClient";

const router = useRouter();

onMounted(async () => {
    try {
        // Handle the OAuth callback
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        // Redirect to dashboard or home
        router.push("/");
    } catch (error) {
        console.error("Auth error:", error);
        router.push("/");
    }
});
</script>
