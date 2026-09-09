<template>
  <section class="py-24 bg-white relative">
    <UContainer>
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
          How We Work With You
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          A collaborative path to <span class="text-orange-500">lasting digital impact</span>
        </h2>
        <p class="mt-4 text-lg text-slate-600">
          We partner closely with your team, listening deeply to your operational needs and community context to ensure every system we deliver is dependable and easy to use.
        </p>
      </div>

      <!-- 4-Step Pipeline -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <div
          v-for="(step, idx) in steps"
          :key="step.number"
          class="relative rounded-2xl border border-slate-200 bg-slate-50/40 p-6 sm:p-7 flex flex-col justify-between hover:border-orange-500/40 hover:bg-white hover:shadow-lg transition-all"
        >
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="font-mono text-2xl font-black text-orange-500">{{ step.number }}</span>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                {{ step.duration }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-slate-900 mb-2">
              {{ step.title }}
            </h3>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200/80">
            <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">What You Receive</span>
            <ul class="space-y-1">
              <li v-for="artifact in step.artifacts" :key="artifact" class="text-xs text-slate-700 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span>{{ artifact }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const steps = [
  {
    number: "01",
    duration: "Discovery",
    title: "Listening & Needs Discovery",
    description: "We meet with your leadership, operational staff, and community members to understand daily challenges, workflows, and goals before writing any code.",
    artifacts: ["Workflow Bottleneck Map", "Solution Blueprint", "Clear Timeline & Budget"]
  },
  {
    number: "02",
    duration: "Co-Creation",
    title: "Collaborative Previews",
    description: "Bi-weekly reviews where your team tests real, working screens and prototypes. You are always in the loop and guiding the solution at every stage.",
    artifacts: ["Interactive Working Demos", "Regular Feedback Sessions", "Transparent Progress"]
  },
  {
    number: "03",
    duration: "Testing",
    title: "Accessibility & Stress Testing",
    description: "We test on everyday smartphones, across local network speeds, and verify data security so that every member of your community has a seamless experience.",
    artifacts: ["Mobile & Low-Data Checks", "Security & Privacy Audits", "Bug-Free Verification"]
  },
  {
    number: "04",
    duration: "Adoption",
    title: "Launch, Training & Support",
    description: "A smooth launch supported by hands-on training sessions for your staff, simple user guides, and dedicated support so your organisation adopts the tools smoothly.",
    artifacts: ["Staff Training Sessions", "Step-by-Step User Guides", "Ongoing Technical Help"]
  }
];
</script>
