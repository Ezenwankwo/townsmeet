<script setup>
definePageMeta({
  layout: "landing",
});

useServerSeoMeta({
  title: "Townsmeet",
  ogTitle: "Townsmeet",
  description: "Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses and organisations.",
  ogDescription: "Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses and organisations.",
  ogImage: "https://townsmeet.com/og.png",
  twitterCard: "summary_large_image",
  twitterImage: "https://townsmeet.com/og.png",
  twitterTitle: "Townsmeet",
  twitterDescription: "Townsmeet is a digital transformation company. We provide innovative digital solutions to businesses and organisations.",
  twitterUrl: "https://townsmeet.com",
  ogUrl: "https://townsmeet.com",
  ogSiteName: "Townsmeet",
  ogType: "website",
  ogLocale: "en_US",
  ogImageAlt: "Townsmeet",
  ogPublisher: "Townsmeet Ltd.",
})
</script>

<template>
  <LandingHero />
  <LandingFeatures />
  <LandingCta />
  <LandingLatestBlog />
</template>
