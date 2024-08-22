<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent('NuxtSeo', {
  theme: "#F97316",
  siteLogo: "/logo.jpg",
})

useHead({
  title: "Blog",
  meta: [
    {
      name: "description",
      content: "Learn how digital technology can transform your business.",
    },
  ],
});
</script>

<template>
  <UContainer>
    <LandingSectionhead>
      <template v-slot:title>Blog</template>
      <template v-slot:desc
        >Learn how digital technology can transform your business.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-8 mt-12">
      <ContentList path="/blog" v-slot="{ list }">
        <header
          v-for="blog in list"
          :key="blog._path"
          class="grid md:grid-cols-5 gap-3"
        >
          <div class="overflow-hidden rounded-l-md md:col-span-2">
            <NuxtImg
              :src="blog.image.src"
              :alt="blog.image.alt"
              class="aspect-[16/9] h-42 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
            />
          </div>
          <div class="md:col-span-3">
            <h3 class="text-lg font-semibold">
              <NuxtLink :to="blog._path">
                <span class="line-clamp-3 text-amber-950">{{
                  blog.title
                }}</span></NuxtLink
              >
            </h3>
            <div class="text-stone-500 text-sm line-clamp-3">
              <p class="mb-2">{{ blog.description }}</p>
            </div>
          </div>
        </header>
      </ContentList>
    </div>
  </UContainer>
</template>
