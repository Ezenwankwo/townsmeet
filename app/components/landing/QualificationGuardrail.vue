<template>
  <div class="py-24 bg-slate-50">
    <UContainer class="px-6 md:px-8 lg:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Who We Serve
          </h2>
          <p class="text-xl text-slate-600 leading-relaxed">
            We specialize in building mission-critical internal systems for established organizations with complex operational needs.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Ideal Partner -->
          <div class="glass p-8 rounded-2xl border border-indigo-100 shadow-premium relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon name="material-symbols:check-circle" class="w-24 h-24 text-indigo-600" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Icon name="material-symbols:verified" class="text-white w-6 h-6" />
              </div>
              Ideal Partner
            </h3>
            <ul class="space-y-4">
              <li v-for="item in fits" :key="item" class="flex items-start gap-3 text-slate-600">
                <Icon name="material-symbols:check" class="text-indigo-600 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Not a Fit -->
          <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon name="material-symbols:cancel" class="w-24 h-24 text-slate-900" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                <Icon name="material-symbols:block" class="text-slate-600 w-6 h-6" />
              </div>
              Not a Fit
            </h3>
            <ul class="space-y-4">
              <li v-for="item in nonFits" :key="item" class="flex items-start gap-3 text-slate-500">
                <Icon name="material-symbols:close" class="text-slate-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 p-6 rounded-xl bg-indigo-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-200">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Icon name="material-symbols:info-outline" class="w-6 h-6" />
            </div>
            <p class="font-medium text-lg">
              We typically work with organisations with <span class="font-bold">10+ staff</span> and complex internal processes.
            </p>
          </div>
          <UButton to="/contact" color="white" variant="solid" size="lg" class="text-indigo-600 font-bold px-8">
            Check Compatibility
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const fits = [
  "10+ staff members managing daily operations",
  "Multiple departments requiring data synchronization",
  "Processes spanning several manual steps",
  "Data currently scattered across spreadsheets & tools",
  "Manual reporting taking hours of leadership time"
];

const nonFits = [
  "Public-facing marketing websites",
  "Consumer-facing mobile applications",
  "Simple landing pages or lead magnets",
  "E-commerce or retail storefronts",
  "Off-the-shelf software configuration only"
];
</script>
