<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent('NuxtSeo', {
  theme: "#F97316",
  siteLogo: "/logo.jpg",
})

useHead({
  title: "About",
  meta: [
    {
      name: "description",
      content: "We are a passionate and experienced team.",
    },
  ],
});

const team = [
  {
    name: "Augustus Ezenwankwo",
    title: "Product Engineer",
    avatar: "/team/augustus.jpg",
  },
  {
    name: "Kaselchumfa David",
    title: "Data/Business Analyst",
    avatar: "/team/kasel.jpg",
  },
  {
    name: "Ifeoma Chukwu",
    title: "Customer Relations",
    avatar: "/team/ifeoma.jpeg",
  },
  {
    name: "Samuel Odey",
    title: "IT Support Specialist",
    avatar: "/team/samuel.jpg",
  },
  {
    name: "Daniel Ugah",
    title: "Software Engineer",
    avatar: "/team/daniel.jpeg",
  },
  {
    name: "Jonas John",
    title: "QA Engineer",
    avatar: "/team/jonas.jpg",
  }
];
</script>

<template>
  <UContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a passionate and experienced team.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto mt-12">

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div v-for="item of team" :key="item.name" class="flex flex-col items-center">
          <img
            :src="item.avatar"
            alt="Team"
            class="w-48 h-48 object-cover rounded-full"
          />
          <h3 class="text-lg font-semibold mt-2 text-amber-950">{{ item.name }}</h3>
          <p class="text-sm text-slate-500">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

