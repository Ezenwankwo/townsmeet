<script setup>
const activeTab = ref("all");

const items = [
  {
    id: "townsflow",
    title: "TownsFlow Operations OS",
    type: "internal",
    typeLabel: "In-House Platform",
    category: "Organisations & Teams",
    description: "Our operational operating system engineered to replace fragile spreadsheets and scattered messages with automated workflows, transparent approvals, and paperless order.",
    image: "/showcase/townsflow_os_mockup.jpg",
    metric: "75% Faster Request Approvals",
    stack: ["Paperless Workflows", "Approval Tracking", "Audit Logs"],
    link: "/work#townsflow"
  },
  {
    id: "pulseops",
    title: "PulseOps Telemetry Platform",
    type: "internal",
    typeLabel: "In-House Platform",
    category: "System Health & Reliability",
    description: "A real-time health monitoring suite built to ensure community portals, civic networks, and organisational platforms stay online 24/7 with zero unexpected downtime.",
    image: "/showcase/pulseops_analytics_mockup.jpg",
    metric: "99.99% Continuous Availability",
    stack: ["Uptime Monitoring", "Instant Alerts", "Community Trust"],
    link: "/work#pulseops"
  },
  {
    id: "apexpay",
    title: "ApexPay Settlement Core",
    type: "client",
    typeLabel: "Client Solution",
    category: "People & Businesses",
    description: "A secure financial settlement platform built for a regional institution, enabling everyday people and businesses to transact smoothly with instant automated ledger reconciliation.",
    image: "/showcase/apexpay_fintech_mockup.jpg",
    metric: "Sub-Second Transaction Settlement",
    stack: ["Reliable Payments", "Automated Ledgers", "Zero Reconciliation Errors"],
    link: "/work#apexpay"
  },
  {
    id: "carelogix",
    title: "CareLogix Emergency Command",
    type: "client",
    typeLabel: "Client Solution",
    category: "Community Healthcare",
    description: "A vital patient triage and emergency dispatch network connecting clinics, responders, and citizens in critical moments to ensure rapid medical attention.",
    image: "/showcase/carelogix_health_mockup.jpg",
    metric: "45% Faster Emergency Response",
    stack: ["Community Health", "Live Dispatch", "Patient Care"],
    link: "/work#carelogix"
  }
];

const filteredItems = computed(() => {
  if (activeTab.value === "all") return items;
  return items.filter(item => item.type === activeTab.value);
});
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <UContainer>
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
            Proven Results
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Solutions built for <span class="text-orange-500">real-world impact</span>
          </h2>
          <p class="mt-4 text-lg text-slate-600 max-w-2xl">
            Explore the software platforms we build and operate in-house, alongside mission-critical digital systems engineered for partner organisations, businesses, and communities.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 self-start">
          <button
            @click="activeTab = 'all'"
            class="px-4 py-2 text-sm font-semibold rounded-xl transition-all"
            :class="activeTab === 'all' 
              ? 'bg-slate-900 text-white shadow-xs' 
              : 'text-slate-600 hover:text-slate-900'"
          >
            All Work ({{ items.length }})
          </button>
          <button
            @click="activeTab = 'internal'"
            class="px-4 py-2 text-sm font-semibold rounded-xl transition-all"
            :class="activeTab === 'internal' 
              ? 'bg-orange-600 text-white shadow-xs' 
              : 'text-slate-600 hover:text-slate-900'"
          >
            Internal Products
          </button>
          <button
            @click="activeTab = 'client'"
            class="px-4 py-2 text-sm font-semibold rounded-xl transition-all"
            :class="activeTab === 'client' 
              ? 'bg-indigo-600 text-white shadow-xs' 
              : 'text-slate-600 hover:text-slate-900'"
          >
            Built for Clients
          </button>
        </div>
      </div>

      <!-- Showcase Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="group rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:border-slate-300 hover:shadow-xl"
        >
          <div>
            <!-- Top Badges -->
            <div class="flex items-center justify-between gap-4 mb-5">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                :class="item.type === 'internal' 
                  ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                  : 'bg-indigo-100 text-indigo-700 border border-indigo-200'"
              >
                <Icon 
                  :name="item.type === 'internal' ? 'material-symbols:rocket-launch-rounded' : 'material-symbols:domain-verification-rounded'" 
                  class="w-3.5 h-3.5" 
                />
                {{ item.typeLabel }}
              </span>

              <span class="text-xs font-medium text-slate-500">
                {{ item.category }}
              </span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              {{ item.description }}
            </p>

            <!-- Key Metric Pill -->
            <div class="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-medium text-white shadow-xs">
              <Icon name="material-symbols:trending-up-rounded" class="text-orange-400 w-4 h-4" />
              <span>Impact: <strong>{{ item.metric }}</strong></span>
            </div>

            <!-- Image Mockup -->
            <div class="mt-6 relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-md">
              <NuxtImg
                :src="item.image"
                :alt="item.title"
                class="w-full aspect-[16/9] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Bottom Tech Stack & Action -->
          <div class="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in item.stack"
                :key="tech"
                class="rounded-md bg-white border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {{ tech }}
              </span>
            </div>

            <NuxtLink
              :to="item.link"
              class="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 group/link"
            >
              Explore Architecture
              <Icon name="material-symbols:arrow-right-alt-rounded" class="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View All Work Banner -->
      <div class="mt-16 text-center">
        <UButton
          to="/work"
          color="primary"
          size="xl"
          class="font-semibold rounded-full px-8 shadow-md text-slate-950"
        >
          Explore Full Portfolio & System Specs
          <template #trailing>
            <Icon name="material-symbols:arrow-forward-rounded" class="w-4 h-4 ml-1" />
          </template>
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
