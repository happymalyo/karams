<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>
