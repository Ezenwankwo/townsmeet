<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent('NuxtSeo', {
  theme: "#F97316",
  siteLogo: "/logo.jpg",
})
</script>

<template>
  <UContainer>
    <ContentDoc v-slot="{ doc }">
      <article class="mt-16 w-full md:w-[80%] lg:w-[60%] mx-auto">
        <div class="text-sm text-slate-600">
          <span>{{ doc.publishedAt }}</span>
        </div>

        <h1
          class="text-3xl lg:text-4xl text-amber-950 font-bold mt-4 leading-tight"
        >
          {{ doc.title }}
        </h1>

        <img
          class="w-full h-96 mt-4 rounded-lg object-cover"
          :src="doc.image.src"
          :alt="doc.title"
        />

        <!-- Content Section -->
        <div class="text-slate-700 content mt-8">
          <ContentRenderer :value="doc" />
        </div>
      </article>
    </ContentDoc>
  </UContainer>
</template>

<style>
/* General Styles */
.content {
  font-family: "Inter", sans-serif;
  line-height: 1.75;
  color: #334155;
}

/* Spacing */
.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-3;
}

/* Typography */
.content h1 {
  @apply text-3xl font-bold mt-8;
}
.content h2 {
  @apply text-2xl font-bold mt-6;
}
.content h3 {
  @apply text-xl font-semibold mt-4;
}
.content h4 {
  @apply text-lg font-semibold mt-4;
}
.content p {
  @apply text-base leading-relaxed;
}

/* Blockquote Styling */
.content blockquote {
  @apply border-l-4 border-amber-500 pl-4 italic text-slate-600;
}

/* Code Block Styling */
.content pre {
  @apply bg-gray-100 p-4 rounded-md text-sm overflow-x-auto;
}

/* Table Styling */
.content table {
  @apply w-full border-collapse;
}
.content th,
.content td {
  @apply border border-slate-300 p-2 text-left;
}
.content th {
  @apply bg-slate-100 font-semibold;
}

/* List Styling */
.content ol {
  @apply list-decimal pl-4;
}
.content ul {
  @apply list-disc pl-4;
}
</style>
