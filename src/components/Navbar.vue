<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/logo.jpg";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <header class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <img src="https://via.placeholder.com/40" alt="Logo" class="h-10" />
        <a href="#" class="text-2xl font-bold text-[#3D5300]"
          >Mada ESN Finder.</a
        >
      </div>

      <!-- Navigation Links -->
      <nav class="flex items-center space-x-6">
        <ul class="flex space-x-6">
          <li>
            <a
              href="#products"
              class="text-lg hover:text-[#F18C2D] transition duration-300"
              >Tous les ESN</a
            >
          </li>
        </ul>

        <!-- Login and Sign Up Buttons -->
        <div class="ml-6 flex items-center space-x-4">
          <a
            href="#login"
            class="px-6 py-2 bg-[#3D5300] text-white font-semibold rounded hover:bg-[#d17624] transition duration-300"
            >Login</a
          >
          <a
            href="#signup"
            class="px-6 py-2 border border-[#3D5300] text-[#3D5300] font-semibold rounded hover:bg-[#F18C2D] hover:text-white transition duration-300"
            >Sign Up</a
          >
        </div>
      </nav>
    </div>
  </header>
</template>
