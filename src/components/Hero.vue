<script setup>
import CompaniesView from "@/views/CompaniesView.vue";
</script>

<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <div class="flex flex-col items-center px-6 py-20 text-center md:px-12">
            <!-- Tagline -->
            <p
                class="px-4 py-1 mb-6 text-sm font-medium text-white rounded-full inline-block"
            >
                Ce site n'est pas forcement une bonne référence
            </p>
            <!-- Main Heading -->
            <h1 class="text-4xl font-bold text-white md:text-5xl mt-10">
                <font-awesome-icon icon="rocket" />SN
                <span class="text-[#d17624] font-semibold text-balance mb-9">
                    Tsara Karama</span
                >
                à Madagascar<br />
                <span class="text-center text-3xl"
                    >Développeur Full Snack ? UI / Obelix Designer ?</span
                >
            </h1>
            <!-- Description -->
            <p class="mt-4 text-white md:text-lg text-balance">
                Découvrez les meilleures entreprises de service numérique bien
                remuneré<br />
            </p>
            <!-- Search Bar -->
            <div class="w-full max-w-lg mt-6">
                <input
                    type="text"
                    placeholder="Rechercher un esn.."
                    class="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>

        <!-- Categories Grid -->
        <CompaniesView />
    </div>
</template>
