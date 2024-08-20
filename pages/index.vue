<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Experience the Digital Advantage",
  meta: [
    {
      name: "description",
      content: "Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses and organisations.",
    },
  ],
})
</script>

<template>
  <LandingHero />
  <LandingFeatures />
  <LandingCta />
  <LandingLatestBlog />
</template>
