<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent('NuxtSeo', {
  theme: "#FF8904",
  siteLogo: "/logo.jpg",
})

useHead({
  title: "Insights & Perspectives | Townsmeet",
  meta: [
    {
      name: "description",
      content: "Insights on technology that empowers people, organisations, businesses, and communities.",
    },
  ],
});

const { data: list } = await useAsyncData('blogs', () => {
  return queryCollection('blog').all()
})
</script>

<template>
  <UContainer class="py-16">
    <LandingSectionhead>
      <template v-slot:title>Insights & Articles</template>
      <template v-slot:desc
        >Perspectives on practical technology that empowers people, organisations, businesses, and communities.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-8 mt-12">
      <header
        v-for="blog in list"
        :key="blog.path"
        class="grid md:grid-cols-5 gap-3"
      >
        <div class="overflow-hidden rounded-l-md md:col-span-2">
          <NuxtImg
            v-if="blog.image"
            :src="blog.image.src"
            :alt="blog.image.alt"
            class="aspect-[16/9] h-42 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
          />
        </div>
        <div class="md:col-span-3">
          <h3 class="text-xl font-semibold">
            <NuxtLink :to="blog.path">
              <span class="line-clamp-3 text-amber-950">{{
                blog.title
              }}</span></NuxtLink
            >
          </h3>
          <div class="text-stone-500 text-base line-clamp-3">
            <p class="mb-2">{{ blog.description }}</p>
          </div>
        </div>
      </header>
    </div>
  </UContainer>
</template>

