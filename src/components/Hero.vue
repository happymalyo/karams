<script setup>
import CompaniesView from "@/views/CompaniesView.vue";
</script>

<template>
    <div class="min-h-screen mb-20">
        <!-- Hero Section -->
        <div class="flex flex-col items-center px-6 py-20 text-center md:px-12">
            <!-- Tagline -->
            <p
                class="px-4 py-1 mb-6 text-xs font-medium text-white bg-gradient-to-r from-slate-90 shadow shadow-sky-500 via-black to-gray-900 rounded-md inline-block"
            >
                Ce site n'est pas forcement une bonne référence
            </p>
            <!-- Main Heading -->
            <h1 class="text-4xl font-bold text-white md:text-5xl mt-10">
                <font-awesome-icon icon="rocket" /> ESN, Startups, PME, Banques
                <br />
                <span class="text-center text-3xl"
                    >Mba tsara
                    <span
                        class="text-[#d17624] font-semibold text-balance mb-9"
                    >
                        Karams </span
                    >ve ao ? 🤔</span
                >
            </h1>
            <!-- Description -->
            <p class="mt-4 text-white md:text-lg text-balance">
                Découvrons ensemble les societés offrant des rémunérations
                attractives.<br />
            </p>
            <!-- Search Bar -->
            <div class="w-full max-w-lg mt-6">
                <input
                    type="text"
                    placeholder="Rechercher une societé.."
                    class="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>

        <!-- Categories Grid -->
        <CompaniesView />
    </div>
</template>
