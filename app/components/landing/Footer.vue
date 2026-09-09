<template>
  <footer class="border-t border-slate-200 bg-white pt-16 pb-12 text-sm text-slate-600">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        <!-- Brand Column -->
        <div class="lg:col-span-2 space-y-4">
          <NuxtLink to="/" class="group flex items-center gap-3">
            <div class="rounded-xl border border-slate-200 bg-white p-1 shadow-xs">
              <NuxtImg
                src="/logo.jpg"
                width="36"
                height="36"
                alt="Townsmeet Logo"
                class="h-9 w-9 rounded-lg object-cover"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold tracking-tight text-slate-900">
                Towns<span class="text-orange-500">meet</span>
              </span>
              <span class="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                Digital Product Studio
              </span>
            </div>
          </NuxtLink>

          <p class="text-slate-500 text-sm max-w-sm leading-relaxed">
            Townsmeet builds innovative digital solutions for people, organisations, businesses, and communities in Nigeria and across Africa.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://x.com" target="_blank" rel="noopener" class="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              <Icon name="line-md:twitter-x" class="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              <Icon name="line-md:linkedin" class="w-4 h-4" />
            </a>
            <a href="https://wa.me/2348183096264" target="_blank" rel="noopener" class="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors">
              <Icon name="jam:whatsapp" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Capabilities</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Digital Products for People</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Organisational Automation</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Community Platforms</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Business & Commerce Systems</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Smart Automation & AI</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-orange-600 transition-colors">Hosting & Ongoing Support</NuxtLink></li>
          </ul>
        </div>

        <!-- Products & Work -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Portfolio</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><NuxtLink to="/work#townsflow" class="hover:text-orange-600 transition-colors">TownsFlow OS (Internal)</NuxtLink></li>
            <li><NuxtLink to="/work#pulseops" class="hover:text-orange-600 transition-colors">PulseOps Telemetry (Internal)</NuxtLink></li>
            <li><NuxtLink to="/work#apexpay" class="hover:text-orange-600 transition-colors">ApexPay Core (FinTech)</NuxtLink></li>
            <li><NuxtLink to="/work#carelogix" class="hover:text-orange-600 transition-colors">CareLogix Health (Logistics)</NuxtLink></li>
            <li><NuxtLink to="/work" class="hover:text-orange-600 transition-colors font-medium text-orange-600">All Case Studies &rarr;</NuxtLink></li>
          </ul>
        </div>

        <!-- Company & Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><NuxtLink to="/about" class="hover:text-orange-600 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/about#team" class="hover:text-orange-600 transition-colors">Engineering Squad</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-orange-600 transition-colors">Engineering Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-orange-600 transition-colors">Contact</NuxtLink></li>
            <li class="pt-2 text-xs text-slate-500">
              <span class="block font-semibold text-slate-700">Office</span>
              Abuja, Nigeria
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Status & Copyright -->
      <div class="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div class="flex items-center gap-2">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span class="font-medium text-slate-700">Production Grid: All Systems Operational</span>
        </div>

        <p>© {{ new Date().getFullYear() }} Townsmeet Ltd. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>
