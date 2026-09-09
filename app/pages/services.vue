<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#FFB86A",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "Services & Capabilities | Townsmeet Digital Product Studio",
  meta: [
    {
      name: "description",
      content:
        "Explore Townsmeet's capabilities: Digital Products for People, Organisational Workflow Systems, Community Platforms, Business & Commerce Solutions, Smart Automation, and Reliable Hosting & Local Support.",
    },
  ],
});

const serviceDetails = [
  {
    id: "digital-products",
    code: "01",
    target: "People & Everyday Users",
    title: "Digital Products for People",
    tagline: "Intuitive web & mobile applications designed for everyday usability, ease, and accessibility.",
    description: "We build everyday software tools that people love using. Whether it is an accessible mobile app, a public service portal, or a personal management tool, we design with empathy, low-data usage, and simplicity so that anyone can navigate with confidence.",
    capabilities: [
      "Accessible Web & Mobile Applications (iOS & Android)",
      "Low-Data Optimization & Offline-First Usability",
      "Inclusive UX Design & Clear Multi-Language Interfaces",
      "Secure Personal Accounts & Frictionless Self-Service"
    ],
    audience: ["People", "Everyday Users", "Citizens", "Families", "Students", "Workers"]
  },
  {
    id: "organisational-ops",
    code: "02",
    target: "Organisations & Institutions",
    title: "Organisational Operations & Automation",
    tagline: "Structured operational platforms that eliminate lost paper, spreadsheet chaos, and confusion.",
    description: "We help institutions, NGOs, civil society bodies, and corporate teams replace fragmented paper forms, slow manual sign-offs, and WhatsApp coordination with transparent, structured operational command centers.",
    capabilities: [
      "Custom Management Portals & Operational Dashboards",
      "Multi-Level Automated Approval Pipelines & Sign-Offs",
      "Digital Document Archiving, Search & Audit Records",
      "Role-Based Access Control (RBAC) & Team Accountability"
    ],
    audience: ["Organisations", "Institutions & NGOs", "Non-Profits", "Civil Society", "Administrative Teams"]
  },
  {
    id: "community-platforms",
    code: "03",
    target: "Communities & Civic Groups",
    title: "Community Platforms & Member Networks",
    tagline: "Dedicated digital spaces uniting associations, cooperatives, town unions, and diaspora groups.",
    description: "Communities thrive when member records are clear, communication is transparent, and participation is effortless from anywhere in the world. We create trusted digital homes for member directories, dues tracking, announcements, and joint community projects.",
    capabilities: [
      "Verified Member Registries & Family/Branch Directories",
      "Online Dues, Contributions & Instant Digital Receipts",
      "Community Noticeboards, Broadcasts & Member Polls",
      "Diaspora Engagement & Collaborative Project Funding"
    ],
    audience: ["Communities", "Town Unions", "Cooperatives", "Trade Associations", "Alumni Networks"]
  },
  {
    id: "business-systems",
    code: "04",
    target: "Businesses & Commerce",
    title: "Business Systems & Commerce Engines",
    tagline: "Reliable commerce, inventory, and payment infrastructure that powers local and growing businesses.",
    description: "From local merchants and logistics providers to growing commercial enterprises, we engineer dependable software that helps businesses process payments securely, manage stock, coordinate deliveries, and balance books without manual stress.",
    capabilities: [
      "Multi-Channel Payment Integration (Cards, Bank Transfers, USSD)",
      "Automated Order Tracking, Inventory & Store Management",
      "Customer Invoicing, Automated Receipts & Ledger Reconciliation",
      "Point-of-Sale (POS) & Supplier Fulfillment Portals"
    ],
    audience: ["Businesses", "Retailers & Merchants", "Logistics Providers", "Commercial Enterprises"]
  },
  {
    id: "smart-automation",
    code: "05",
    target: "Smart Automation & AI",
    title: "Smart Automation & Practical AI",
    tagline: "Sensible automation that saves hours of manual work and assists your people around the clock.",
    description: "We introduce practical, sensible automation that solves real headaches—from automated WhatsApp and SMS assistants that answer member inquiries 24/7, to smart tools that extract data from scanned receipts and official documents.",
    capabilities: [
      "WhatsApp & SMS Conversational Assistants for 24/7 Support",
      "Automated Document Processing (Receipts, Forms, IDs)",
      "Instant Knowledge Search across Guidelines & Policy By-Laws",
      "Automated Notifications, Reminders & Milestone Alerts"
    ],
    audience: ["Practical AI", "Time Saved", "24/7 Assistance", "Smart Workflows", "WhatsApp / SMS"]
  },
  {
    id: "hosting-support",
    code: "06",
    target: "Reliability & Support",
    title: "Dependable Hosting, Security & Local Support",
    tagline: "Peace of mind with rock-solid infrastructure, data protection, and an Abuja-based support team.",
    description: "Technology must be dependable to be trustworthy. We host your platforms on resilient, high-speed infrastructure with automatic daily backups, strict privacy safeguards, and an Abuja-based engineering team ready to provide hands-on help and staff training.",
    capabilities: [
      "99.9% Uptime with Fast Loading on Local Networks",
      "Automated Daily Backups & Disaster Recovery Protocols",
      "Strict Data Privacy & NDPR Regulatory Compliance",
      "Hands-on Staff Training & Direct Local Phone/WhatsApp Support"
    ],
    audience: ["Reliability", "Data Privacy", "Local Abuja Team", "Always Available", "Hands-on Training"]
  }
];

const engagementModels = [
  {
    title: "Collaborative Project Build",
    badge: "Milestone-Driven",
    desc: "Fixed scope, clear timeline, and predictable budget for creating a new community portal, organisational workflow system, mobile app, or business platform.",
    features: [
      "Clear milestone delivery with guaranteed timelines",
      "Human-centered design tested with your actual users",
      "Hands-on staff training and step-by-step user manuals",
      "Post-launch warranty and SLA technical support"
    ]
  },
  {
    title: "Long-Term Digital Partner",
    badge: "Continuous Growth",
    desc: "An ongoing partnership where our multidisciplinary team acts as your digital engineering unit, continuously supporting, securing, and improving your platforms.",
    features: [
      "Direct communication via WhatsApp, phone, or in-person in Abuja",
      "Continuous feature updates, security patches & backups",
      "Flexible resource allocation as your community or business expands",
      "Regular strategy and digital roadmap review sessions"
    ]
  },
  {
    title: "Workflow & Systems Modernization",
    badge: "High Impact",
    desc: "An operational deep-dive for established organisations, institutions, or community bodies seeking to digitize paper processes and eliminate bottlenecks.",
    features: [
      "Comprehensive review of existing paper forms & spreadsheets",
      "Clear migration plan to clean, secure digital records",
      "Staff workflow interviews to identify friction points",
      "Actionable modernization roadmap with minimal disruption"
    ]
  }
];
</script>

<template>
  <div class="py-16 bg-white min-h-screen">
    <UContainer>
      <!-- Page Header -->
      <div class="max-w-4xl mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          Services & Capabilities
        </div>
        <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Software solutions built for <span class="text-orange-500">people, organisations & communities</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
          From community platforms and member registries to paperless organisational workflows and business commerce engines, we build dependable digital solutions designed to serve people and stand the test of time.
        </p>
      </div>

      <!-- Services List Deep Dive -->
      <div class="space-y-16">
        <div
          v-for="service in serviceDetails"
          :key="service.id"
          class="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 sm:p-12 shadow-xs hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-5 space-y-4">
              <div class="flex items-center gap-3">
                <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-orange-100 text-orange-700">
                  SVC-{{ service.code }}
                </span>
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {{ service.target }}
                </span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">
                {{ service.title }}
              </h2>
              <p class="text-base font-semibold text-orange-600">
                {{ service.tagline }}
              </p>
              <p class="text-slate-600 text-sm leading-relaxed">
                {{ service.description }}
              </p>

              <div class="pt-2">
                <UButton
                  to="/contact"
                  variant="link"
                  color="primary"
                  class="p-0 font-bold group"
                >
                  Discuss This Capability
                  <Icon name="material-symbols:arrow-forward-rounded" class="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </UButton>
              </div>
            </div>

            <div class="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-200 lg:pl-10">
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Key Outcomes & Deliverables
                </h4>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div
                    v-for="cap in service.capabilities"
                    :key="cap"
                    class="flex items-start gap-2.5 rounded-xl bg-white border border-slate-200/80 p-3 text-xs sm:text-sm text-slate-700 shadow-xs"
                  >
                    <Icon name="material-symbols:check-circle-rounded" class="text-orange-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{{ cap }}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  Who This Serves
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="t in service.audience"
                    :key="t"
                    class="rounded-md bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs"
                  >
                    {{ t }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Engagement Models -->
      <div class="mt-28">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
            Ways to Partner
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How we can work together
          </h2>
          <p class="mt-4 text-base sm:text-lg text-slate-600">
            Tailored collaboration models adapted to your community, organisation, or business requirements and stage.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="model in engagementModels"
            :key="model.title"
            class="rounded-3xl border border-slate-200 bg-white p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-orange-500/40 transition-all duration-300"
          >
            <div>
              <div class="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-4 border border-orange-500/20">
                {{ model.badge }}
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3">
                {{ model.title }}
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                {{ model.desc }}
              </p>

              <ul class="space-y-3 border-t border-slate-100 pt-6">
                <li
                  v-for="feat in model.features"
                  :key="feat"
                  class="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                >
                  <Icon name="material-symbols:verified-rounded" class="text-orange-500 w-4 h-4 flex-shrink-0" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100">
              <UButton
                to="/contact"
                color="primary"
                size="md"
                block
                class="font-semibold rounded-xl justify-center shadow-xs text-slate-950"
              >
                Inquire About This Model
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Call To Action -->
      <div class="mt-24 p-12 rounded-3xl bg-slate-950 text-white text-center relative overflow-hidden border border-slate-800">
        <div class="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to build software that serves your people, organisation, or community?
          </h2>
          <p class="text-slate-300 text-sm sm:text-base">
            Whether you are replacing paper workflows, launching a community platform, or scaling a business system, our Abuja-based team is here to listen.
          </p>
          <UButton
            to="/contact"
            color="primary"
            size="xl"
            class="font-semibold rounded-full px-8 shadow-lg shadow-orange-500/30 text-slate-950"
          >
            Start a Conversation
          </UButton>
        </div>
      </div>
    </UContainer>
  </div>
</template>