<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#FFB86A",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "Work & Platforms | Townsmeet Digital Product Studio",
  meta: [
    {
      name: "description",
      content:
        "Explore digital platforms built and operated by Townsmeet, alongside mission-critical systems engineered for people, organisations, businesses, and communities.",
    },
  ],
});

const activeCategory = ref("all");

const projects = [
  {
    id: "townsflow",
    title: "TownsFlow Operations OS",
    type: "internal",
    typeLabel: "In-House Platform",
    targetGroup: "organisations",
    category: "Organisations & Teams",
    headline: "An operational platform built to eliminate paper chaos and bring order to teams",
    description: "Built to solve administrative and operational friction for organisations, institutions, and community bodies. Features visual task workflows, automated approval pipelines, digital document records, and role-based accountability.",
    image: "/showcase/townsflow_os_mockup.jpg",
    stats: [
      { label: "Efficiency Boost", value: "75%" },
      { label: "Approval Time", value: "<15 mins" },
      { label: "Paperless Rate", value: "100%" }
    ],
    highlightsTitle: "Operational & Community Impact",
    highlights: [
      "Replaces lost paper forms, scattered WhatsApp messages, and untracked requests with one transparent system",
      "Automated email and WhatsApp notifications whenever approvals or document sign-offs are needed",
      "Complete tamper-evident audit logs so executives and community leadership have total visibility",
      "Fast, intuitive web and mobile interfaces that require zero technical training for staff"
    ],
    tags: ["Organisations", "Institutions", "Paperless Workflows", "Accountability", "Audit Records"]
  },
  {
    id: "pulseops",
    title: "PulseOps Telemetry Platform",
    type: "internal",
    typeLabel: "In-House Platform",
    targetGroup: "communities",
    category: "System Health & Communities",
    headline: "Real-time health monitoring that keeps public and community services online 24/7",
    description: "Our in-house monitoring platform built to guarantee that digital community hubs, public services, and business portals never suffer unexpected outages or lost transactions.",
    image: "/showcase/pulseops_analytics_mockup.jpg",
    stats: [
      { label: "Platform Uptime", value: "99.99%" },
      { label: "Alert Dispatch", value: "<1.2s" },
      { label: "Downtime Prevented", value: "Proactive" }
    ],
    highlightsTitle: "Reliability & Trust Safeguards",
    highlights: [
      "Continuous automated health checks across servers, payment gateways, and databases",
      "Immediate alerts via SMS and WhatsApp before users or community members notice an issue",
      "Clear public status and uptime dashboards that build confidence and trust with members and leadership",
      "Protects sensitive member and transactional data with continuous anomaly detection"
    ],
    tags: ["Reliability", "Uptime Guarantee", "24/7 Availability", "Zero Data Loss", "Community Trust"]
  },
  {
    id: "apexpay",
    title: "ApexPay Settlement Core",
    type: "client",
    typeLabel: "Client Solution",
    targetGroup: "businesses",
    category: "People & Businesses",
    headline: "Dependable payment and ledger system that ensures fast, transparent transactions",
    description: "Engineered for a regional financial institution to make payments simple, reliable, and transparent for everyday people and local businesses. Automates transfers, ledger balancing, and digital receipts with zero missing funds.",
    image: "/showcase/apexpay_fintech_mockup.jpg",
    stats: [
      { label: "Settlement Speed", value: "<1s" },
      { label: "Ledger Accuracy", value: "100%" },
      { label: "Lost Transactions", value: "Zero" }
    ],
    highlightsTitle: "Commercial & Financial Outcomes",
    highlights: [
      "Everyday people receive instant payment confirmations and verifiable digital receipts",
      "Local businesses can accept transfers and card payments without manual reconciliation headaches",
      "Double-entry bookkeeping ledger built with immutable records preventing discrepancies",
      "Engineered to handle peak surges during month-end dues and community collection drives"
    ],
    tags: ["Everyday People", "Local Businesses", "Instant Payments", "Balanced Ledgers", "Zero Friction"]
  },
  {
    id: "carelogix",
    title: "CareLogix Health Command",
    type: "client",
    typeLabel: "Client Solution",
    targetGroup: "people",
    category: "People & Healthcare",
    headline: "Emergency dispatch and patient coordination network connecting citizens with vital care",
    description: "Built for a healthcare network to connect people in medical distress with emergency responders, community clinics, and available hospital beds across metropolitan areas.",
    image: "/showcase/carelogix_health_mockup.jpg",
    stats: [
      { label: "Triage Speedup", value: "3.4x" },
      { label: "Bed Allocation", value: "100% Live" },
      { label: "Response Time", value: "-45%" }
    ],
    highlightsTitle: "Human & Community Impact",
    highlights: [
      "Helps citizens and families quickly request emergency medical dispatch and locate open clinics",
      "Live GPS ambulance routing calculating real-time traffic and hospital wait times",
      "Offline-first mobile synchronization allowing paramedics to record vitals even in low-network areas",
      "Encrypted patient health records compliant with strict medical privacy standards"
    ],
    tags: ["Citizens & Families", "Healthcare Clinics", "Emergency Response", "Civic Health", "Patient Care"]
  }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "all") return projects;
  return projects.filter(p => p.targetGroup === activeCategory.value);
});
</script>

<template>
  <div class="py-16 bg-white min-h-screen">
    <UContainer>
      <!-- Page Header -->
      <div class="max-w-4xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          Portfolio & Impact
        </div>
        <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Software that serves <span class="text-orange-500">people, organisations & communities</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
          We design and build practical digital platforms that make life easier for everyday users, bring order to organisations, empower local businesses, and keep communities connected.
        </p>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mt-10">
          <button
            @click="activeCategory = 'all'"
            class="px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer"
            :class="activeCategory === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'"
          >
            All Solutions ({{ projects.length }})
          </button>
          <button
            @click="activeCategory = 'organisations'"
            class="px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer"
            :class="activeCategory === 'organisations'
              ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'"
          >
            Organisations & Teams
          </button>
          <button
            @click="activeCategory = 'communities'"
            class="px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer"
            :class="activeCategory === 'communities'
              ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'"
          >
            Communities & Civic
          </button>
          <button
            @click="activeCategory = 'people'"
            class="px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer"
            :class="activeCategory === 'people'
              ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'"
          >
            People & Everyday Life
          </button>
          <button
            @click="activeCategory = 'businesses'"
            class="px-4 py-2 text-sm font-semibold rounded-full border transition-all cursor-pointer"
            :class="activeCategory === 'businesses'
              ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'"
          >
            Businesses & Commerce
          </button>
        </div>
      </div>

      <!-- Project Showcase Cards List -->
      <div class="space-y-24">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          :id="project.id"
          class="rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-xl transition-all duration-300"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <!-- Left Info Column -->
            <div class="lg:col-span-6 space-y-6">
              <!-- Type & Category Badges -->
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  :class="project.type === 'internal' 
                    ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                    : 'bg-indigo-100 text-indigo-700 border border-indigo-200'"
                >
                  <Icon 
                    :name="project.type === 'internal' ? 'material-symbols:rocket-launch-rounded' : 'material-symbols:domain-verification-rounded'" 
                    class="w-3.5 h-3.5" 
                  />
                  {{ project.typeLabel }}
                </span>
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {{ project.category }}
                </span>
              </div>

              <!-- Title & Headline -->
              <div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                  {{ project.title }}
                </h2>
                <p class="mt-2 text-base sm:text-lg font-medium text-orange-600">
                  {{ project.headline }}
                </p>
              </div>

              <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                {{ project.description }}
              </p>

              <!-- Metrics -->
              <div class="grid grid-cols-3 gap-4 pt-2">
                <div
                  v-for="stat in project.stats"
                  :key="stat.label"
                  class="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 text-center"
                >
                  <span class="block text-xl sm:text-2xl font-black text-slate-900">{{ stat.value }}</span>
                  <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{{ stat.label }}</span>
                </div>
              </div>

              <!-- Impact Highlights -->
              <div class="border-t border-slate-200 pt-6">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <Icon name="material-symbols:check-circle-rounded" class="text-orange-500 w-4 h-4" />
                  {{ project.highlightsTitle }}
                </h4>
                <ul class="space-y-2.5">
                  <li
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                  >
                    <Icon name="material-symbols:check-small-rounded" class="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <!-- Impact Tags -->
              <div class="flex flex-wrap gap-2 pt-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-lg bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-xs"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Right Image Column -->
            <div class="lg:col-span-6 space-y-6">
              <div class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl group">
                <div class="flex items-center gap-1.5 px-4 py-3 border-b border-slate-800 bg-slate-900 text-xs text-slate-400">
                  <span class="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span class="ml-2 font-mono text-[11px] text-slate-400">{{ project.id }}-live-system</span>
                </div>
                <NuxtImg
                  :src="project.image"
                  :alt="project.title"
                  class="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div class="rounded-2xl border border-orange-500/20 bg-orange-50/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span class="block text-sm font-bold text-slate-900">Need a platform for your group or initiative?</span>
                  <span class="text-xs text-slate-600">We work directly with your leadership and members to make it real.</span>
                </div>
                <UButton
                  to="/contact"
                  color="primary"
                  size="md"
                  class="font-semibold rounded-full px-5 flex-shrink-0 text-slate-950"
                >
                  Start a Conversation
                </UButton>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom Banner -->
      <div class="mt-24 text-center rounded-3xl bg-slate-950 p-12 text-white relative overflow-hidden border border-slate-800">
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build technology that serves your community or organisation?
          </h2>
          <p class="text-slate-300 text-sm sm:text-base">
            From listening to your daily needs to hands-on staff training and launch, our Abuja team is ready to partner with you.
          </p>
          <UButton
            to="/contact"
            color="primary"
            size="xl"
            class="font-semibold rounded-full px-8 shadow-lg shadow-orange-500/30 text-slate-950"
          >
            Start a Conversation
            <template #trailing>
              <Icon name="material-symbols:arrow-forward-rounded" class="w-5 h-5 ml-1" />
            </template>
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>

