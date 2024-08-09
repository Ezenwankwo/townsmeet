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
        <ContentList path="/blogs" v-slot="{ list }">
          <header
            v-for="blog in list.slice(0, 2)"
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
              <div class="text-stone-500 text-sm line-clamp-2">
                <p class="mb-2">{{ blog.description }}</p>
              </div>
            </div>
          </header>
        </ContentList>
      </div>
    </div>
  </UContainer>
</template>
