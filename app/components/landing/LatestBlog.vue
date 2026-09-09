<script setup>
const { data: list } = await useAsyncData('latest-blogs', () => {
  return queryCollection('blog')
    .limit(2)
    .all()
})
</script>

<template>
  <section class="py-24 bg-slate-50/60 border-t border-slate-200/80">
    <UContainer>
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
            Insights & Architecture
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            From our <span class="text-orange-500">engineering journal</span>
          </h2>
          <p class="text-base sm:text-lg mt-3 text-slate-600">
            Practical perspectives on building technology that empowers people, organisations, businesses, and communities.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 group self-start"
        >
          View all articles
          <Icon name="material-symbols:arrow-forward-rounded" class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article
          v-for="blog in list"
          :key="blog.path"
          class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div v-if="blog.image" class="overflow-hidden rounded-2xl mb-6 bg-slate-100 aspect-[16/9]">
              <NuxtImg
                :src="blog.image.src"
                :alt="blog.image.alt || blog.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
              <NuxtLink :to="blog.path">
                {{ blog.title }}
              </NuxtLink>
            </h3>
            
            <p class="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {{ blog.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-slate-500 font-medium group-hover:text-orange-600 transition-colors">
            <span>Read Article &rarr;</span>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>
