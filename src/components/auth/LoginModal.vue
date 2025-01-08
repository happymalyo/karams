<template>
    <div
        v-if="modelValue"
        class="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50"
        @click="closeModal"
    >
        <div
            class="bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6 transform transition-all"
            @click.stop
        >
            <!-- Header -->
            <div class="flex justify-between items-center mb-6">
                <div class="flex items-center space-x-3">
                    <img
                        src="@/assets/logo-karams.png"
                        alt="Logo"
                        class="h-8 w-auto"
                    />
                    <h2 class="text-xl font-semibold text-gray-800">Sign up</h2>
                </div>

                <button
                    @click="closeModal"
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <font-awesome-icon
                        icon="fa-solid fa-xmark"
                        class="text-xl"
                    />
                </button>
            </div>

            <!-- Error Message -->
            <div
                v-if="error"
                class="bg-red-50 text-red-500 p-3 rounded-md mb-4 flex items-center space-x-2"
            >
                <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
                <span>{{ error }}</span>
            </div>

            <!-- Buttons -->
            <div class="space-y-3">
                <div class="text-slate-600 m-5 text-center">
                    Join our community of friendly folks discovering and sharing
                    the latest products in tech.
                </div>
                <button
                    @click="signInWithGoogle"
                    :disabled="loading"
                    class="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src="@/assets/google.png"
                        alt="Logo google"
                        class="h-4 w-auto"
                    />
                    <span class="text-gray-700 font-medium">
                        {{ loading ? "Loading..." : "Continue with Google" }}
                    </span>
                </button>

                <button
                    @click="signInWithFacebook"
                    :disabled="loading"
                    class="w-full flex items-center justify-center space-x-3 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <img
                        src="@/assets/facebook.png"
                        alt="Logo fb"
                        class="h-4 w-auto"
                    />
                    <span class="text-gray-700 font-medium">
                        {{ loading ? "Loading..." : "Continue with Facebook" }}
                    </span>
                </button>
            </div>

            <!-- Terms -->
            <p class="mt-4 text-center text-sm text-gray-500">
                We'll never post to any of your accounts without your
                permission.
            </p>
        </div>
    </div>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth";

const props = defineProps({
    modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const { signInWithGoogle, signInWithFacebook, loading, error } = useAuth();

const closeModal = () => {
    emit("update:modelValue", false);
};
</script>

<style scoped>
/* Same CSS as before */
</style>
