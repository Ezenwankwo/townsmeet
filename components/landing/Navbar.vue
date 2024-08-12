<script setup>
const menuitems = [
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const open = ref(false);
</script>

<template>
  <div
    class="sticky top-0 z-50 bg-white/100 border-b"
  >
    <UContainer>
      <header
        class="flex flex-col lg:flex-row justify-between items-center"
      >
        <div class="flex w-full lg:w-auto items-center justify-between my-2">
          <NuxtLink
            to="/"
            class="flex items-center text-lg font-bold tracking-wider text-amber-950 uppercase lg:text-2xl"
          >
            <NuxtImg
              src="/logo.jpg"
              width="50"
              height="50"
              alt="logo"
              class="object-cover"
            />
            <span class="font-light">Towns</span
              ><span class="font-semibold">meet</span>
          </NuxtLink>
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800">
              <svg
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  v-show="open"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
                <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
          :class="{ block: open, hidden: !open }"
        >
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems">
              <NuxtLink
                :to="item.path"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <div class="lg:hidden flex items-center mt-3 gap-4">
            <UButton to="/contact" color="orange" size="xl">Let's Talk</UButton>
          </div>
        </nav>
        <div>
          <div class="hidden lg:flex items-center gap-4">
            <UButton to="/contact" color="orange" size="xl">Let's Talk</UButton>
          </div>
        </div>
      </header>
    </UContainer>
  </div>
</template>
