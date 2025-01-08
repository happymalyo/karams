<template>
    <div class="privacy-policy text-white">
        <h1 class="text-2xl font-bold mb-6">Politique de Confidentialité</h1>

        <section
            v-for="(section, index) in policySections"
            :key="index"
            class="mb-8"
        >
            <h2 class="text-xl font-semibold mb-4">{{ section.title }}</h2>
            <div class="space-y-4">
                <p
                    v-for="(paragraph, pIndex) in section.content"
                    :key="pIndex"
                    class="text-gray-400"
                >
                    {{ paragraph }}
                </p>
            </div>
        </section>

        <div class="mt-8 text-sm text-gray-600">
            <p>Dernière mise à jour : {{ lastUpdated }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PrivacyPolicy",
    data() {
        return {
            lastUpdated: new Date("2025-01-08").toLocaleDateString("fr-FR"),
            policySections: [
                {
                    title: "1. Collecte des Informations",
                    content: [
                        "Nous collectons les informations que vous nous fournissez directement lorsque vous créez un compte et utilisez notre service:",
                        "• Informations de profil (nom, adresse email)",
                        "• Informations d'authentification via Google",
                        "• Données de connexion et d'utilisation",
                        "• Préférences de langue et paramètres",
                    ],
                },
                {
                    title: "2. Utilisation des Informations",
                    content: [
                        "Nous utilisons les informations collectées pour:",
                        "• Fournir, maintenir et améliorer nos services",
                        "• Personnaliser votre expérience",
                        "• Communiquer avec vous concernant votre compte",
                        "• Assurer la sécurité de nos services",
                    ],
                },
                {
                    title: "3. Partage des Informations",
                    content: [
                        "Nous ne vendons pas vos informations personnelles. Nous pouvons partager vos informations dans les situations suivantes:",
                        "• Avec votre consentement",
                        "• Pour des raisons légales",
                        "• Avec nos fournisseurs de services (comme Supabase pour l'authentification)",
                    ],
                },
                {
                    title: "4. Sécurité",
                    content: [
                        "Nous prenons la sécurité de vos données au sérieux et mettons en œuvre des mesures techniques appropriées pour protéger vos informations.",
                        "Toutes les données sont chiffrées en transit et au repos.",
                    ],
                },
                {
                    title: "5. Vos Droits",
                    content: [
                        "Vous avez le droit de:",
                        "• Accéder à vos données personnelles",
                        "• Corriger vos données personnelles",
                        "• Supprimer votre compte",
                        "• Retirer votre consentement à tout moment",
                    ],
                },
                {
                    title: "6. Cookies et Technologies Similaires",
                    content: [
                        "Nous utilisons des cookies et technologies similaires pour:",
                        "• Maintenir votre session",
                        "• Mémoriser vos préférences",
                        "• Analyser l'utilisation de nos services",
                    ],
                },
                {
                    title: "7. Contact",
                    content: [
                        "Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à:",
                        "rtafitamario@gmail.com",
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.privacy-policy {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}
</style>
