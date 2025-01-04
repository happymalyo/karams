<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useHead } from "@vueuse/head";
import { RouterView } from "vue-router";
import ogImage from "@/assets/images/og-image.jpg";

const baseUrl = window.location.origin;
const imageUrl = `${baseUrl}${ogImage}`;

useHead({
    meta: [
        {
            property: "og:image",
            content: imageUrl,
        },
    ],
});
</script>

<template>
    <div class="bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>
