<script setup>
definePageMeta({
  layout: "landing",
});

const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: "https://images.unsplash.com/photo-1574514366389-3c4fef242ca9?q=80&w=256&h=256&dpr=2&fit=crop",
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&dpr=2&fit=crop",
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&dpr=2&fit=crop",
  },
];
</script>

<template>
  <UContainer>
    <LandingSectionhead>
      <template v-slot:title>About</template>
      <template v-slot:desc>We are a small passionate team.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-12">
      <div class="flex flex-col items-center space-y-4">
        <h2 class="font-bold text-3xl text-amber-950">
          Empowering the world with Nuxt.
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 text-center">
          We're a multi-cultural team from around the world! We come from diverse
          backgrounds, bringing different personalities, experiences and skills to
          the job. This is what makes our team so special.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div v-for="item of team" :key="item.name" class="flex flex-col items-center">
          <NuxtImg
            :src="item.avatar"
            alt="Team"
            class="w-32 h-32 object-cover rounded-full"
            loading="lazy"
          />
          <h3 class="text-lg font-semibold mt-2 text-amber-950">{{ item.name }}</h3>
          <p class="text-sm text-slate-500">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </UContainer>
</template>

