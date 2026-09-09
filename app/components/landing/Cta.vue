<template>
  <div class="py-20 bg-white">
    <UContainer>
      <div class="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 sm:px-12 sm:py-24 text-center border border-slate-800 shadow-2xl">
        <!-- Radial Orange Ambient Glow -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute inset-0 bg-dot-grid-dark opacity-30 pointer-events-none"></div>

        <div class="relative max-w-3xl mx-auto flex flex-col items-center">
          <div class="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold text-orange-400 mb-6">
            <span class="h-2 w-2 rounded-full bg-orange-400 animate-ping"></span>
            <span>Let's Build Meaningful Technology Together</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an initiative for your organisation or community? <br />
            <span class="text-orange-500">Let's bring it to life.</span>
          </h2>

          <p class="mt-6 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Whether you need a digital portal for your members, an automated system to replace paperwork, or custom software for your business—we are ready to partner with you.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <UButton
              to="/contact"
              color="primary"
              size="xl"
              class="w-full sm:w-auto font-semibold rounded-full px-8 py-3.5 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all justify-center text-slate-950"
            >
              Start a Conversation
              <template #trailing>
                <Icon name="material-symbols:arrow-forward-rounded" class="w-5 h-5 ml-1" />
              </template>
            </UButton>

            <a
              href="mailto:info@townsmeet.com"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-8 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-all"
            >
              <Icon name="material-symbols:mail-outline-rounded" class="w-4 h-4 text-orange-400" />
              <span>info@townsmeet.com</span>
            </a>
          </div>

          <!-- Quick stats -->
          <div class="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm">
            <div>
              <span class="block font-bold text-white text-base sm:text-lg">Friendly</span>
              Direct Consultation
            </div>
            <div>
              <span class="block font-bold text-white text-base sm:text-lg">100%</span>
              Code & Asset Ownership
            </div>
            <div>
              <span class="block font-bold text-white text-base sm:text-lg">Hands-on</span>
              Training & Support
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
