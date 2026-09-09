<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#FFB86A",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "Townsmeet | Technology for People, Organisations & Communities",
  meta: [
    {
      name: "description",
      content:
        "Townsmeet builds accessible digital solutions, community platforms, and operational systems for people, organisations, businesses, and communities in Nigeria and across Africa.",
    },
  ],
});
</script>

<template>
  <div class="relative">
    <!-- Interactive Engineering Hero -->
    <LandingHero />
    <LandingStatsBar />
    <LandingProductsShowcase />
    <LandingFeatures />
    <LandingEngineeringMethodology />
    <LandingCta />
    <LandingLatestBlog />
  </div>
</template>
