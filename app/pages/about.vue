<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#FFB86A",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "About Townsmeet | Digital Studio for People, Organisations & Communities",
  meta: [
    {
      name: "description",
      content:
        "Meet the team behind Townsmeet. We build accessible, dependable software solutions for people, organisations, businesses, and communities across Nigeria and Africa.",
    },
  ],
});

const values = [
  {
    icon: "material-symbols:groups-rounded",
    title: "People-First & Accessible Design",
    description: "We build for real people in real environments. Our applications load quickly on everyday smartphones, run smoothly on fluctuating networks, and are easy to understand regardless of digital literacy."
  },
  {
    icon: "material-symbols:account-balance-rounded",
    title: "Empowering Organisations & Civic Life",
    description: "Organisations, institutions, and community bodies carry society forward. We replace paper friction and lost records with transparent digital tools that foster trust, accountability, and smooth service delivery."
  },
  {
    icon: "material-symbols:pin-drop-rounded",
    title: "Rooted in Local Realities",
    description: "Headquartered in Abuja, Nigeria, we design with deep respect for local infrastructure, payment nuances, and community customs. We are not distant vendors—we are accessible local partners."
  },
  {
    icon: "material-symbols:handshake-rounded",
    title: "Genuine Ownership & Training",
    description: "You own 100% of your platform, data, and intellectual property. We provide hands-on training for your staff and community leaders so your team can operate with total independence and confidence."
  }
];

const team = [
  {
    name: "Augustus Ezenwankwo",
    title: "Founder & Lead Product Engineer",
    role: "System Architecture • Nuxt / Node.js • Cloud Infra",
    avatar: "/team/augustus.jpg",
  },
  {
    name: "Kaselchumfa David",
    title: "Data & Systems Analyst",
    role: "Operational Metrics • Reporting Dashboards • Process Maps",
    avatar: "/team/kasel.jpg",
  },
  {
    name: "Ifeoma Chukwu",
    title: "Head of Community & Partner Relations",
    role: "Partner Onboarding • User Training • Continuous Support",
    avatar: "/team/ifeoma.jpeg",
  },
  {
    name: "Samuel Odey",
    title: "IT Support & Systems Specialist",
    role: "Deployment Support • User Onboarding • Local Hardware",
    avatar: "/team/samuel.jpg",
  },
  {
    name: "Daniel Ugah",
    title: "Senior Software Engineer",
    role: "Web & Mobile Interfaces • Accessible UX • Frontend Systems",
    avatar: "/team/daniel.jpeg",
  },
  {
    name: "Jonas John",
    title: "QA & Reliability Engineer",
    role: "Accessibility Audits • Low-Network Testing • Security Checks",
    avatar: "/team/jonas.jpg",
  },
];
</script>

<template>
  <div class="py-16 bg-white min-h-screen">
    <UContainer>
      <!-- Page Header -->
      <div class="max-w-4xl mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          About Townsmeet
        </div>
        <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Building software that serves <span class="text-orange-500">everyday life & collective progress</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
          Headquartered in Abuja, Nigeria, Townsmeet builds digital products, operational systems, and community platforms that bridge the gap between people and the essential services they rely on.
        </p>
      </div>

      <!-- Core Mission Banner -->
      <div class="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 mb-24 relative overflow-hidden border border-slate-800 shadow-xl">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div class="relative z-10 max-w-3xl space-y-6">
          <span class="text-xs font-bold tracking-widest text-orange-400 uppercase font-mono">Our Conviction</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold leading-snug">
            "Technology in Africa must do more than chase industry hype. It must solve real human challenges—helping organisations run with transparency, giving communities a shared home, and making life easier for everyday people."
          </h2>
          <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether partnering with community town unions, civil society organisations, educational institutions, or local businesses, our commitment is uncompromised reliability, human dignity, and practical usefulness.
          </p>
        </div>
      </div>

      <!-- Principles Grid -->
      <div class="mb-28">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
            Our Commitments
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            How we design and build
          </h2>
          <p class="mt-3 text-slate-600 text-base">
            The principles that guide our architecture choices, user testing, and partnerships.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="v in values"
            :key="v.title"
            class="rounded-3xl border border-slate-200 bg-slate-50/50 p-8 shadow-xs hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300"
          >
            <div class="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-6">
              <Icon :name="v.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">
              {{ v.title }}
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ v.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Team Squad Section -->
      <div id="team" class="mb-24">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
            Our Team
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Meet the people behind Townsmeet
          </h2>
          <p class="mt-3 text-slate-600 text-base">
            A multidisciplinary team of software engineers, user advocates, and operational specialists based in Abuja.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div class="relative mb-5">
              <div class="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              <img
                :src="member.avatar"
                :alt="member.name"
                class="relative w-36 h-36 object-cover rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 class="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
              {{ member.name }}
            </h3>
            <p class="text-xs font-semibold text-orange-600 uppercase tracking-wider mt-1">
              {{ member.title }}
            </p>
            <p class="text-xs text-slate-500 mt-2 font-mono">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="rounded-3xl bg-slate-900 text-white p-10 sm:p-12 text-center flex flex-col items-center">
        <h3 class="text-2xl sm:text-3xl font-bold mb-3">Building for people, your organisation, or your community?</h3>
        <p class="text-slate-400 text-sm max-w-xl mb-6">
          Whether you want to digitize paper processes, launch a member portal, or build a dependable business system, our team in Abuja is ready to connect.
        </p>
        <UButton
          to="/contact"
          color="primary"
          size="xl"
          class="font-semibold rounded-full px-8 shadow-lg shadow-orange-500/20 text-slate-950"
        >
          Get in Touch
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

