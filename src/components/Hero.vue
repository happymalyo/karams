<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Become a Vue Dev",
  },
  subtitle: {
    type: String,
    default: "Find the Vue job that fits your skills and needs",
  },
});
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="flex flex-col items-center px-6 py-20 text-center md:px-12">
      <!-- Tagline -->
      <p
        class="px-4 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full inline-block"
      >
        Made with ❤️ by Kely Karama →
      </p>
      <!-- Main Heading -->
      <h1 class="text-4xl font-bold text-gray-800 md:text-5xl">
        Trouvez l'ESN 
        <span class="text-[#FF6500] font-semibold"> Tsara Karama</span> à
        Madagascar <br/>
        <span class="text-center text-3xl">Développeur Junior ? Ou Stagaire ...?</span>
      </h1>
      <!-- Description -->
      <p class="mt-4 text-gray-600 md:text-lg">
        Découvrez les meilleures entreprises dans divers secteurs à Madagascar <br />
        Nous vous aidons à trouver des emplois bien rémunérés adaptés à vos
        compétences.
      </p>
      <!-- Search Bar -->
      <div class="w-full max-w-lg mt-6">
        <input
          type="text"
          placeholder="Search for tech..."
          class="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <!-- Categories Grid -->
    <div class="grid w-full max-w-6xl gap-6 px-6 py-12 mx-auto md:grid-cols-3">
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">Web Development</h3>
        <p class="mt-2 text-sm text-gray-600">
          Building and maintaining websites and web applications.
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">Mobile Development</h3>
        <p class="mt-2 text-sm text-gray-600">
          Creating apps for mobile devices like smartphones and tablets.
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">
          AI and ML Development
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          Building algorithms and models for tasks requiring human-like
          cognition and learning.
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">Desktop Development</h3>
        <p class="mt-2 text-sm text-gray-600">
          Designing and implementing software for native desktop systems.
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">Game Development</h3>
        <p class="mt-2 text-sm text-gray-600">
          Crafting interactive games for various platforms, including consoles,
          PCs, and mobile.
        </p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <h3 class="text-lg font-semibold text-gray-800">
          Cross-Platform Development
        </h3>
        <p class="mt-2 text-sm text-gray-600">
          Developing applications that work across multiple platforms with one
          codebase.
        </p>
      </div>
    </div>
  </div>
</template>
