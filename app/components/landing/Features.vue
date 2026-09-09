<template>
  <section class="py-24 bg-slate-50/70 relative border-t border-slate-200/80">
    <UContainer>
      <!-- Section Header -->
      <div class="max-w-3xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          What We Deliver
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Digital solutions for <span class="text-orange-500">people, organisations & communities</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600 leading-relaxed">
          Whether you run an established institution, a growing business, a community network, or need software that people love using every day—we build technology that delivers real-world impact.
        </p>
      </div>

      <!-- Bento Grid of Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
        >
          <div>
            <!-- Icon & Tag -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-500/20 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Icon :name="service.icon" class="w-6 h-6" />
              </div>
              <span class="text-xs font-semibold text-slate-400 font-mono">{{ service.code }}</span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="mt-3 text-slate-600 text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Deliverables List -->
            <ul class="mt-6 space-y-2 border-t border-slate-100 pt-5">
              <li
                v-for="item in service.deliverables"
                :key="item"
                class="flex items-center gap-2 text-xs font-medium text-slate-700"
              >
                <Icon name="material-symbols:check-circle-rounded" class="text-orange-500 w-4 h-4 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Stack Tags -->
          <div class="mt-8 pt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
            <span
              v-for="tag in service.technologies"
              :key="tag"
              class="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Bottom Services Link -->
      <div class="mt-16 flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
        <div class="space-y-1 mb-6 sm:mb-0">
          <h3 class="text-xl font-bold">Have an organisational challenge or a project for your community?</h3>
          <p class="text-slate-400 text-sm">Tell us your vision. We’ll help you shape the architecture, timeline, and budget.</p>
        </div>
        <UButton
          to="/services"
          color="primary"
          size="lg"
          class="font-semibold rounded-full px-6 shadow-md text-slate-950"
        >
          Explore Full Capabilities
          <template #trailing>
            <Icon name="material-symbols:arrow-forward-rounded" class="w-4 h-4 ml-1" />
          </template>
        </UButton>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const services = [
  {
    code: "IMPACT-01",
    title: "Digital Products for People",
    icon: "material-symbols:devices-rounded",
    description: "Web and mobile applications designed with human empathy, accessibility, and intuitive simplicity so everyday people can access services with ease.",
    deliverables: [
      "Accessible Web & Mobile Applications",
      "Intuitive, Frictionless User Experiences",
      "Fast Loading on Any Device & Network",
      "100% Code & Asset Ownership"
    ],
    technologies: ["People-First", "Web & Mobile", "Accessibility"]
  },
  {
    code: "IMPACT-02",
    title: "Organisational Operations & Automation",
    icon: "material-symbols:account-tree-rounded",
    description: "Replace messy paper forms, WhatsApp threads, and fragile spreadsheets with structured internal platforms that help teams and institutions run without friction.",
    deliverables: [
      "Single Source of Truth for Member & Operational Data",
      "Automated Multi-Step Approval Workflows",
      "Transparent Staff Accountability & Audit Trails",
      "Drastic Reduction in Administrative Paperwork"
    ],
    technologies: ["Organisations", "Paperless Workflows", "Accountability"]
  },
  {
    code: "IMPACT-03",
    title: "Community Platforms & Member Networks",
    icon: "material-symbols:groups-rounded",
    description: "Bring community members, cooperatives, associations, and civic groups together with dedicated digital spaces for communication, directory access, and contributions.",
    deliverables: [
      "Member Directories & Secure Communication",
      "Online Dues, Contributions & Event Portals",
      "Transparent Group Coordination & News",
      "Accessible Self-Service Portals"
    ],
    technologies: ["Communities", "Member Networks", "Civic Portals"]
  },
  {
    code: "IMPACT-04",
    title: "Business Systems & Payment Engines",
    icon: "material-symbols:payments-rounded",
    description: "Reliable software foundations that help businesses transact smoothly, manage inventory, coordinate fulfillment, and reconcile finances with zero manual headache.",
    deliverables: [
      "Reliable Payment & Payout Workflows",
      "Automated Order & Inventory Tracking",
      "Seamless Integration with Local Banks & APIs",
      "Real-Time Financial Reconciliation"
    ],
    technologies: ["Businesses", "Reliable Commerce", "Automated Ledgers"]
  },
  {
    code: "IMPACT-05",
    title: "Smart Automation & Practical AI",
    icon: "material-symbols:smart-toy-rounded",
    description: "Deploy helpful, practical AI tools that assist people and staff by reading documents, processing verification requests, and answering member questions in seconds.",
    deliverables: [
      "Automated Document Processing & Record Verification",
      "Instant Search Across Organisational Guidelines",
      "24/7 Member & Customer Assistance",
      "Freeing Staff to Focus on Human Connection"
    ],
    technologies: ["Smart Workflows", "Time Saved", "Practical AI"]
  },
  {
    code: "IMPACT-06",
    title: "Dependable Hosting & Local Support",
    icon: "material-symbols:shield-with-heart-rounded",
    description: "Rest easy knowing your platform is secure, backed up, and maintained by a dedicated team that is always reachable when you or your community need assistance.",
    deliverables: [
      "99.9% Uptime with Zero Surprise Crashes",
      "Automatic Daily Backups & Disaster Recovery",
      "Data Protection & Privacy Safeguards",
      "Hands-on Local Support & Staff Training"
    ],
    technologies: ["Reliable Support", "Secure & Backed Up", "Always Available"]
  }
];
</script>
