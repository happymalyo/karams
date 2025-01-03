<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    company: {
        type: Object,
        required: true,
    },
});

// Vote types configuration with new vote categories
const voteTypes = [
    { emoji: "🐣", type: "intern_votes", label: "Stagiaire" },
    { emoji: "🚀", type: "junior_votes", label: "Junior" },
    { emoji: "💪", type: "mid_level_votes", label: "Confirmé" },
    { emoji: "🔥", type: "senior_votes", label: "Senior" },
];
</script>

<template>
    <div
        class="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-2 rounded-lg shadow-lg border border-slate-800"
    >
        <!-- Card Header -->
        <div class="flex items-center justify-between p-2 text-white">
            <div class="flex items-center space-x-2">
                <img
                    :src="company.logo_url"
                    :alt="`${company.company_name} Logo`"
                    class="h-8 w-16 sm:h-10 sm:w-20 object-contain"
                />
            </div>
            <div class="flex space-x-2">
                <a
                    :href="company.website"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="border border-slate-700 px-2 py-1 rounded-full text-xs text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                >
                    Visit Website
                </a>
            </div>
        </div>

        <!-- Company Info -->
        <div class="mx-2 sm:mx-4 mb-4 flex-grow">
            <h2 class="text-base sm:text-lg font-semibold text-white">
                {{ company.company_name }}
            </h2>
            <div class="flex flex-wrap gap-2 mt-2">
                <span
                    v-for="service in company.services"
                    :key="service"
                    class="text-[11px] text-slate-300 rounded-lg"
                >
                    #{{ service.split(" ").join("-") }}
                </span>
            </div>
            <div class="flex mt-2 text-slate-400 text-xs sm:text-sm">
                {{ company.city }} •
                <span class="pl-2 text-[#d17624]">
                    {{ company.department_name }}</span
                >
            </div>
        </div>

        <!-- Background Image -->
        <div class="relative">
            <img
                :src="company.bg_image"
                :alt="`${company.company_name} Background`"
                class="w-full h-36 sm:h-48 object-cover rounded"
            />
            <div
                class="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded"
            ></div>
        </div>

        <!-- Vote Section -->
        <div class="p-2 flex justify-between items-center mt-2">
            <div class="flex space-x-1 sm:space-x-4">
                <button
                    v-for="vote in voteTypes"
                    :key="vote.type"
                    class="group relative flex items-center text-gray-700 hover:text-white transition-colors"
                >
                    <!-- Tooltip -->
                    <div
                        class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap"
                    >
                        {{ vote.label }}
                        <div
                            class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"
                        ></div>
                    </div>

                    <span
                        class="text-xs group-hover:scale-110 transition-transform"
                    >
                        {{ vote.emoji }}
                    </span>
                    <span class="text-slate-500 text-xs">
                        {{ company[vote.type] }}
                    </span>
                </button>
            </div>

            <!-- Total Votes -->
            <div class="flex items-center space-x-1 px-2 sm:px-3 py-1">
                <font-awesome-icon class="text-slate-500" icon="comments" />
                <span class="text-slate-500 text-xs sm:text-sm font-medium">
                    {{ company.total_votes }}
                </span>
            </div>
        </div>
    </div>
</template>
