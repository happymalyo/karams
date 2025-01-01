<script setup>
import Companie from "./Companie.vue";
import { reactive, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

const state = reactive({
    companies: [],
    isLoading: true,
});

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8000/companies");
        state.companies = response.data;
        console.log("resp", response);
    } catch (error) {
        console.error("Error fetching companies", error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <div class="grid w-full max-w-7xl gap-6 px-6 py-12 mx-auto md:grid-cols-3">
        <Companie
            v-for="company in state.companies"
            :key="company.id"
            :company="company"
        />
        <PulseLoader v-if="isLoading" color="#d17624" />
    </div>
</template>
