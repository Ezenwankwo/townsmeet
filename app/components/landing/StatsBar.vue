<template>
  <div class="border-y border-slate-200/80 bg-slate-50/50 py-12">
    <UContainer>
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
        <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col">
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {{ stat.value }}
            </span>
            <span class="text-xl font-bold text-orange-500">{{ stat.suffix }}</span>
          </div>
          <p class="mt-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
            {{ stat.label }}
          </p>
          <p class="mt-1 text-xs text-slate-400">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const stats = [
  {
    value: "People",
    suffix: "First",
    label: "Human-Centered Design",
    description: "Accessible, intuitive interfaces built for everyday users"
  },
  {
    value: "Zero",
    suffix: "Paper",
    label: "Organisational Efficiency",
    description: "Automated workflows eliminating manual paper & spreadsheet chaos"
  },
  {
    value: "Connected",
    suffix: "Hub",
    label: "Community Platforms",
    description: "Secure digital portals connecting members, staff, and citizens"
  },
  {
    value: "2-4",
    suffix: "Wks",
    label: "Rapid Deployment",
    description: "From strategy discovery to working, reliable software"
  }
];
</script>
