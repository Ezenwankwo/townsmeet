<script setup>
definePageMeta({
    layout: "landing",
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