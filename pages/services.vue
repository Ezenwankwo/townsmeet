<script setup>
definePageMeta({
    layout: "landing",
});

useHead({
    title: "Townsmeet | Services",
    meta: [
        {
            name: "description",
            content: "All your digital needs in one place.",
        },
    ],
});

useServerSeoMeta({
    title: "Townsmeet | Services",
    ogTitle: "Townsmeet | Services",
    description: "All your digital needs in one place.",
    ogDescription: "All your digital needs in one place.",
});
</script>

<template>
    <UContainer>
        <LandingSectionhead>
            <template v-slot:title>Services</template>
            <template v-slot:desc
                >All your digital needs in one place.</template
            >
        </LandingSectionhead>
        <LandingFeatures />
    </UContainer>
</template>