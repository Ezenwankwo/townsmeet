<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: "Townsmeet | Contact us",
  meta: [
    {
      name: "description",
      content: "We are here to help.",
    },
  ],
})

useServerSeoMeta({
  title: "Townsmeet | Contact us",
  ogTitle: "Townsmeet | Contact us",
  description: "We are here to help.",
  ogDescription: "We are here to help.",
});
</script>

<template>
  <UContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact us</template>
      <template v-slot:desc>We are here to help.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Let us know how we can help.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>FCT, Abuja Nigeria</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:info@townsmeet.com"
              >info@townsmeet.com</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+2348183096264</a
            >
          </div>
        </div>
        </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </UContainer>
</template>

