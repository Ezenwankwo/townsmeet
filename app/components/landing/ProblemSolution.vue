<template>
  <div class="py-24 bg-white">
    <UContainer class="px-6 md:px-8 lg:px-12">
      <div class="text-center mb-20">
        <h2 class="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mb-6">
          From Operational Chaos to <span class="text-orange-500">Digital Order</span>
        </h2>
        <p class="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We replace fragile, manual processes with robust internal systems designed for scale.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- The Problem (Chaos) -->
        <div class="space-y-8">
          <div class="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/5 rounded-full blur-3xl"></div>
            <h3 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Icon name="material-symbols:warning-rounded" class="text-rose-500 w-8 h-8" />
              The Spreadsheet Trap
            </h3>
            <div class="space-y-6">
              <div v-for="problem in problems" :key="problem.title" class="flex gap-4">
                <div class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 flex-shrink-0"></div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">{{ problem.title }}</h4>
                  <p class="text-slate-500 text-sm leading-relaxed">{{ problem.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Solution (Order) -->
        <div class="space-y-8">
          <div class="p-8 rounded-3xl bg-indigo-600 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
              <Icon name="material-symbols:check-circle" class="text-indigo-200 w-8 h-8" />
              The Townsmeet Solution
            </h3>
            <div class="space-y-6">
              <div v-for="solution in solutions" :key="solution.title" class="flex gap-4">
                <div class="w-1.5 h-1.5 rounded-full bg-indigo-300 mt-2.5 flex-shrink-0"></div>
                <div>
                  <h4 class="font-bold mb-1">{{ solution.title }}</h4>
                  <p class="text-indigo-100 text-sm leading-relaxed">{{ solution.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const problems = [
  { title: "Fragile Data", desc: "Broken formulas, version conflicts, and no audit trail for critical business data." },
  { title: "Manual Handoffs", desc: "Operations relying on WhatsApp, email threads, and verbal confirmations." },
  { title: "Zero Visibility", desc: "Leadership can't answer basic questions without asking multiple staff members." },
  { title: "Human Error", desc: "Duplicate entries and lost records causing operational delays and financial loss." }
];

const solutions = [
  { title: "Single Source of Truth", desc: "Centralized, validated data with full version history and audit trails." },
  { title: "Automated Workflows", desc: "Structured processes with automatic notifications and status tracking." },
  { title: "Real-time Dashboards", desc: "Instant visibility into every KPI and operational metric at a glance." },
  { title: "Seamless Integration", desc: "Systems that connect your teams and tools into one unified platform." }
];
</script>
