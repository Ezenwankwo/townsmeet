<template>
  <div class="py-24 bg-white overflow-hidden">
    <UContainer class="px-6 md:px-8 lg:px-12">
      <div class="text-center mb-20">
        <h2 class="text-slate-900 text-3xl md:text-5xl font-bold tracking-tight mb-6">
          A Tour of the <span class="text-orange-500">Operations OS</span>
        </h2>
        <p class="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Explore the high-performance interfaces we build to power established organizations.
        </p>
      </div>

      <div class="space-y-32">
        <div v-for="(example, index) in examples" :key="example.title" 
             class="flex flex-col lg:items-center gap-12 lg:gap-20"
             :class="index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'">
          
          <!-- Text Content -->
          <div class="lg:w-1/2 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider">
              {{ example.category }}
            </div>
            <h3 class="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {{ example.title }}
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed">
              {{ example.desc }}
            </p>
            
            <div class="grid sm:grid-cols-2 gap-4 pt-4">
              <div v-for="feature in example.features" :key="feature" class="flex items-center gap-2 text-slate-700 font-medium">
                <div class="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="material-symbols:check-small" class="text-indigo-600 w-6 h-6" />
                </div>
                {{ feature }}
              </div>
            </div>
            
            <div class="pt-6">
              <UButton :to="example.link" variant="link" color="primary" class="p-0 font-bold group">
                Learn more about this system
                <Icon name="material-symbols:arrow-right-alt" class="ml-2 group-hover:translate-x-1 transition-transform" />
              </UButton>
            </div>
          </div>

          <!-- Image Showcase -->
          <div class="lg:w-1/2 relative group">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <NuxtImg
                :src="example.image"
                :alt="example.title"
                class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const examples = [
  {
    title: "Operations Dashboard",
    category: "Visibility & Control",
    desc: "A centralized command center for leadership to monitor every operational KPI in real-time, replacing manual report compilation.",
    image: "/enterprise_dashboard.png",
    features: ["Real-time KPI Tracking", "Automated Reporting", "Data Visualization", "Role-based Access"],
    link: "/services"
  },
  {
    title: "Workflow Automation Map",
    category: "Efficiency & Speed",
    desc: "Intelligent process routing that handles approvals, notifications, and status updates automatically across departments.",
    image: "/workflow_automation_map.png",
    features: ["Node-based Logic", "Auto-notifications", "Audit Trails", "SLA Monitoring"],
    link: "/services"
  },
  {
    title: "Custom Admin Panel",
    category: "Data Management",
    desc: "A high-performance interface for managing complex business records, replacing fragile and disconnected spreadsheets.",
    image: "/custom_crm_admin_panel.png",
    features: ["Bulk Data Handling", "Advanced Filtering", "History Tracking", "Secure Storage"],
    link: "/services"
  }
];
</script>
