<script setup>
definePageMeta({
  layout: "landing",
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

    <div class="grid md:grid-cols-3 gap-4 mx-auto max-w-screen-lg mt-12">
      <ContentList path="/blogs" v-slot="{ list }">
        <div v-for="blog in list" :key="blog._path" class="group">
          <NuxtLink :to="blog._path">
            <div
              class="w-full h-64 bg-slate-100 rounded-lg overflow-hidden shadow-md group-hover:scale-[101%] transition-transform ease-in duration-200"
            >
              <NuxtImg
                :src="blog.image.src"
                :alt="blog.image.alt"
                class="h-full w-full object-cover group-hover:scale-[110%] transition-transform ease-in duration-300"
              />
            </div>
            <div
              class="mt-4 p-4 bg-white rounded-lg shadow-md group-hover:shadow-lg group-hover:bg-slate-50 transition-colors ease-in duration-200"
            >
              <h3 class="text-lg font-semibold text-amber-950 mb-3">
                {{ blog.title }}
              </h3>
              <div class="flex justify-between mt-2 text-sm text-slate-500">
                <p>{{ blog.publishedAt }}</p>
                <p>{{ blog.readingTime }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </UContainer>
</template>

