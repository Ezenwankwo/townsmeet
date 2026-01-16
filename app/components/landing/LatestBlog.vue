<script setup>
const { data: list } = await useAsyncData('latest-blogs', () => {
  return queryCollection('blog')
    .limit(2)
    .all()
})
</script>

<template>
  <UContainer>
    <div class="mt-20">
      <div>
        <h2
          class="text-amber-950 text-4xl lg:text-5xl font-bold lg:tracking-tight"
        >
          Latest Blog
        </h2>
        <p class="text-lg mt-4 text-slate-600">
          Learn how digital technology can transform your business.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
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
    </div>
  </UContainer>
</template>

