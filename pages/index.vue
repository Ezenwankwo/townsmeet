<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#F97316",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "Experience the Digital Advantage",
  meta: [
    {
      name: "description",
      content:
        `Townsmeet is a digital transformation company. We provide innovative digital solutions to
        businesses in a variety of industries in Nigeria and across Africa.`,
    },
  ],
});
</script>

<template>
  <LandingHero />
  <LandingFeatures />
  <LandingCta />
  <LandingLatestBlog />
</template>
