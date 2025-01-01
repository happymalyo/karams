<script setup>
import { defineProps } from "vue";

const props = defineProps({
    company: Object,
});
</script>

<template>
    <div
        class="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-6 rounded-lg shadow-lg border border-slate-800"
    >
        <!-- Card Header -->
        <div class="flex items-center justify-between p-2 text-white">
            <div class="flex items-center space-x-3">
                <img
                    :src="company.logo_url"
                    alt="Company Logo"
                    class="h-10 w-20"
                />
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    class="h-10 rounded-full"
                />
            </div>
            <a
                :href="company.contact.website"
                class="border border-slate-700 p-2 rounded-s-full text-sm text-slate-400"
                >Visit Website</a
            >
        </div>
        <div class="mx-4 mb-4 flex-grow">
            <h2 class="text-lg font-semibold text-white">{{ company.name }}</h2>
            <p class="text-sm text-gray-500">#Web-Dev #Tech</p>
        </div>
        <!-- Background Image -->
        <div class="relative">
            <img
                src="https://via.placeholder.com/400x200"
                alt="Background"
                class="w-full h-48 object-cover"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black opacity-40"
            ></div>
        </div>

        <!-- Card Footer with Buttons -->
        <div class="p-2 flex justify-between items-center">
            <div class="flex space-x-4">
                <button class="flex items-center space-x-1 text-gray-700">
                    <span class="text-xs">🐣</span>
                    <span class="text-slate-500">108</span>
                    <!-- Example vote count -->
                </button>
                <button class="flex items-center space-x-1 text-gray-700">
                    <span class="text-xs">🚀</span>
                    <span class="text-slate-500">158</span>
                    <!-- Example vote count -->
                </button>
                <button class="flex items-center space-x-1 text-gray-700">
                    <span class="text-xs">💪</span>
                    <span class="text-slate-500">225</span>
                    <!-- Example vote count -->
                </button>
                <button class="flex items-center space-x-1 text-gray-700">
                    <span class="text-xs">🔥</span>
                    <span class="text-slate-500">228</span>
                    <!-- Example vote count -->
                </button>
            </div>
            <div class="flex py-2">
                <button class="items-center space-x-1">
                    <span class="text-xs">⚖️ </span>
                    <span class="text-slate-500">228</span>
                    <!-- Example vote count -->
                </button>
            </div>
        </div>
    </div>
</template>
