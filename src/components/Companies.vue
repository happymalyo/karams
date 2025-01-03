<script setup>
import Companie from "./Companie.vue";
import { reactive, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { supabase } from "../lib/supabaseClient";

const state = reactive({
    companies: [],
    isLoading: true,
    error: null,
});

onMounted(async () => {
    try {
        // Select data from the company_details_view
        const { data, error } = await supabase
            .from("company_details_view")
            .select("*");

        if (error) {
            throw error;
        }

        state.companies = data;
        console.log("Companies data:", data);
    } catch (error) {
        console.error("Error fetching companies:", error.message);
        state.error = error.message;
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
            <template v-if="!state.isLoading && !state.error">
                <Companie
                    v-for="company in state.companies"
                    :key="company.id"
                    :company="company"
                />
            </template>

            <div v-if="state.isLoading" class="col-span-3 flex justify-center">
                <PulseLoader color="#d17624" />
            </div>

            <div v-if="state.error" class="col-span-3 text-red-500 text-center">
                {{ state.error }}
            </div>
        </div>
    </div>
</template>
