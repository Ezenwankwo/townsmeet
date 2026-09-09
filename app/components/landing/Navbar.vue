<script setup>
const route = useRoute();
const open = ref(false);

const navItems = [
  { title: "Services", path: "/services" },
  { title: "Work & Products", path: "/work" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

watch(() => route.path, () => {
  open.value = false;
});
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-all">
    <UContainer>
      <div class="flex h-20 items-center justify-between">
        <!-- Logo & Brand -->
        <NuxtLink to="/" class="group flex items-center gap-3">
          <div class="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xs transition-transform group-hover:scale-105">
            <NuxtImg
              src="/logo.jpg"
              width="36"
              height="36"
              alt="Townsmeet Logo"
              class="h-9 w-9 rounded-lg object-cover"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="text-xl font-bold tracking-tight text-slate-900">
                Towns<span class="text-orange-500">meet</span>
              </span>
            </div>
            <span class="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
              Digital Product Studio
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1.5 px-3 shadow-xs">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all"
            :class="route.path === item.path 
              ? 'bg-white text-slate-950 shadow-xs font-semibold' 
              : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'"
          >
            {{ item.title }}
          </NuxtLink>
        </nav>

        <!-- Right Side CTA & Availability Indicator -->
        <div class="hidden lg:flex items-center gap-4">
          <div class="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3 py-1 text-xs font-medium text-emerald-700">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for New Projects</span>
          </div>

          <UButton
            to="/contact"
            color="primary"
            size="lg"
            class="font-semibold shadow-xs hover:shadow-md transition-all rounded-full px-5 text-slate-950"
          >
            Start a Project
            <template #trailing>
              <Icon name="material-symbols:arrow-forward-rounded" class="w-4 h-4 ml-1" />
            </template>
          </UButton>
        </div>

        <!-- Mobile Menu Trigger -->
        <div class="flex items-center gap-3 lg:hidden">
          <UButton
            to="/contact"
            color="primary"
            size="sm"
            class="font-semibold rounded-full px-3.5 text-slate-950"
          >
            Let's Talk
          </UButton>

          <button
            @click="open = !open"
            aria-label="Toggle Menu"
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          >
            <Icon
              :name="open ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'"
              class="h-6 w-6"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="open" class="border-t border-slate-200 bg-white pb-6 pt-4 lg:hidden">
          <nav class="flex flex-col gap-1">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors"
              :class="route.path === item.path
                ? 'bg-orange-50 text-orange-600 font-semibold'
                : 'text-slate-700 hover:bg-slate-50'"
            >
              <span>{{ item.title }}</span>
              <Icon name="material-symbols:chevron-right-rounded" class="h-5 w-5 text-slate-400" />
            </NuxtLink>
          </nav>

          <div class="mt-4 border-t border-slate-100 pt-4 px-2">
            <div class="flex items-center gap-2 mb-4 px-2 text-xs font-medium text-emerald-700">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Available for New Projects & Product Partnerships</span>
            </div>
            <UButton
              to="/contact"
              color="primary"
              size="xl"
              block
              class="font-semibold rounded-xl justify-center text-slate-950"
            >
              Book Technical Consultation
            </UButton>
          </div>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>
