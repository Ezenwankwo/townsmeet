<script setup>
definePageMeta({
  layout: "landing",
});

defineOgImageComponent("NuxtSeo", {
  theme: "#FFB86A",
  siteLogo: "/logo.jpg",
});

useHead({
  title: "Contact & Project Intake | Townsmeet Digital Product Studio",
  meta: [
    {
      name: "description",
      content:
        "Discuss your community initiative, organisational workflow, digital product, or business system with Townsmeet's team in Abuja, Nigeria.",
    },
  ],
});
</script>

<template>
  <div class="py-16 bg-slate-50/50 min-h-screen">
    <UContainer>
      <!-- Page Header -->
      <div class="max-w-4xl mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          Start a Conversation
        </div>
        <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Let’s build something meaningful for <span class="text-orange-500">your people, organisation or community</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed">
          Whether you represent a community association, non-profit, growing business, or public institution, our team in Abuja is ready to listen, advise, and partner with you.
        </p>
      </div>

      <!-- Main Layout: Contact Details on Left, Form on Right -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left Column: Contact Channels & Direct Info -->
        <div class="lg:col-span-5 space-y-8">
          <!-- Availability Card -->
          <div class="rounded-3xl border border-emerald-500/30 bg-emerald-50/60 p-6 sm:p-8">
            <div class="flex items-center gap-2 mb-3">
              <span class="relative flex h-2.5 w-2.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Squad Status: Welcoming New Initiatives & Projects
              </span>
            </div>
            <p class="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              We are actively partnering on community platforms, organisational systems, mobile applications, and commerce solutions.
            </p>
          </div>

          <!-- Direct Channels -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <h3 class="text-lg font-bold text-slate-900">Direct Inquiries</h3>
            
            <div class="space-y-4 text-sm">
              <a href="mailto:info@townsmeet.com" class="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Icon name="material-symbols:mail-outline-rounded" class="w-5 h-5" />
                </div>
                <div>
                  <span class="block text-xs text-slate-400">Email</span>
                  <span class="font-medium">info@townsmeet.com</span>
                </div>
              </a>

              <a href="tel:+2348183096264" class="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Icon name="material-symbols:call-outline-rounded" class="w-5 h-5" />
                </div>
                <div>
                  <span class="block text-xs text-slate-400">Phone Support</span>
                  <span class="font-medium">+234 818 309 6264</span>
                </div>
              </a>

              <a href="https://wa.me/2348183096264" target="_blank" rel="noopener" class="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors group">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Icon name="jam:whatsapp" class="w-5 h-5" />
                </div>
                <div>
                  <span class="block text-xs text-slate-400">WhatsApp Direct</span>
                  <span class="font-medium">+234 818 309 6264</span>
                </div>
              </a>

              <div class="flex items-start gap-3 text-slate-700 pt-2 border-t border-slate-100">
                <div class="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Icon name="material-symbols:location-on-outline-rounded" class="w-5 h-5" />
                </div>
                <div>
                  <span class="block text-xs text-slate-400">Location</span>
                  <span class="font-medium">Abuja, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <!-- What Happens Next -->
          <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              What happens after you reach out?
            </h4>
            <ol class="space-y-3 text-xs sm:text-sm text-slate-600">
              <li class="flex items-start gap-2.5">
                <span class="font-mono font-bold text-orange-500">1.</span>
                <span>Our team reviews your brief within 24 hours.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="font-mono font-bold text-orange-500">2.</span>
                <span>We schedule a 30-minute discovery call to listen and clarify goals.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="font-mono font-bold text-orange-500">3.</span>
                <span>You receive a clear, practical roadmap, timeline, and transparent budget.</span>
              </li>
            </ol>
          </div>
        </div>

        <!-- Right Column: Interactive Intake Form -->
        <div class="lg:col-span-7">
          <LandingContactform />
        </div>
      </div>
    </UContainer>
  </div>
</template>

