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

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <ContentList path="/blogs" v-slot="{ list }">
        <NuxtLink :to="blog._path" v-for="blog in list" :key="blog._path">
          <div class="mb-4">
            <NuxtImg
              :src="blog.image.src"
              :alt="blog.image.alt"
              class="w-full h-48 mb-2 object-cover transform group-hover:scale-[101%] transition-transform ease-in duration-200"
            />
            <h3 class="text-lg font-semibold">
              {{ blog.title }}
            </h3>
          </div>
          <div class="flex justify-between">
		  	<span>April 9, 2024</span>
			<span class="italic">3 min read</span>
		  </div>
        </NuxtLink>
      </ContentList>
    </div>
  </UContainer>
</template>
