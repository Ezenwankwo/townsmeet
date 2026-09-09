<script setup>
const formData = reactive({
  name: "",
  email: "",
  company: "",
  projectType: "Community Platform / Portal",
  budget: "Flexible / Exploring Possibilities",
  message: "",
});

const projectTypes = [
  "Community Platform / Portal",
  "Organisational / NGO Workflow",
  "Business & Commerce System",
  "Mobile & Web App for People",
  "Smart Automation & AI",
  "Other Project or Initiative"
];

const budgetRanges = [
  "Flexible / Exploring Possibilities",
  "Grassroots / Community Funded",
  "Standard Project Scope",
  "Institutional / Enterprise Scope"
];

const isLoading = ref(false);
const toast = useToast();

const sendMessage = async () => {
  if (!formData.name || !formData.email || !formData.message) {
    toast.add({
      title: "Missing Information",
      description: "Please fill in your name, email, and project details.",
      color: "amber"
    });
    return;
  }

  isLoading.value = true;
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
      },
    });

    toast.add({
      title: "Inquiry Received",
      description: "Our team will review your project and reply within 24 hours.",
      icon: "material-symbols:check-circle-rounded",
      color: "primary",
    });

    resetForm();
  } catch (error) {
    console.error("Form submission error:", error);
    const errorMsg =
      error?.data?.statusMessage ||
      error?.statusMessage ||
      "Unable to send message directly. Please contact us at info@townsmeet.com or via WhatsApp at +234 818 309 6264.";

    toast.add({
      title: "Notice",
      description: errorMsg,
      color: "amber",
    });
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  formData.name = "";
  formData.email = "";
  formData.company = "";
  formData.message = "";
};
</script>

<template>
  <form
    class="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl"
    @submit.prevent="sendMessage"
  >
    <!-- Project Type Selection -->
    <div>
      <label class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
        What kind of initiative are you planning?
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          v-for="type in projectTypes"
          :key="type"
          @click="formData.projectType = type"
          class="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border cursor-pointer"
          :class="formData.projectType === type
            ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
            : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100'"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <!-- Name & Email -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
        <UInput
          v-model="formData.name"
          placeholder="e.g. Amina Bello"
          size="lg"
          class="w-full"
          required
        />
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Contact Email *</label>
        <UInput
          v-model="formData.email"
          placeholder="amina@example.com"
          type="email"
          size="lg"
          class="w-full"
          required
        />
      </div>
    </div>

    <!-- Company & Budget -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Organisation, Community, or Business</label>
        <UInput
          v-model="formData.company"
          placeholder="e.g. Unity Town Association / GreenTech Ltd"
          size="lg"
          class="w-full"
        />
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1.5">Project Scope / Budget</label>
        <select
          v-model="formData.budget"
          class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-xs focus:border-orange-500 focus:outline-hidden focus:ring-1 focus:ring-orange-500"
        >
          <option v-for="b in budgetRanges" :key="b" :value="b">{{ b }}</option>
        </select>
      </div>
    </div>

    <!-- Message -->
    <div>
      <label class="block text-xs font-semibold text-slate-700 mb-1.5">
        Tell us about your project & goals *
      </label>
      <UTextarea
        v-model="formData.message"
        placeholder="Briefly describe who this is for (people, members, staff, customers), your goals, and any key challenges..."
        rows="4"
        size="lg"
        class="w-full"
        required
      />
    </div>

    <!-- Submit Button -->
    <div>
      <UButton
        type="submit"
        color="primary"
        size="xl"
        block
        :loading="isLoading"
        class="font-semibold rounded-xl justify-center shadow-md shadow-orange-500/20 text-slate-950 cursor-pointer"
      >
        Send Project Brief
        <template #trailing>
          <Icon name="material-symbols:send-rounded" class="w-4 h-4 ml-1" />
        </template>
      </UButton>
      <p class="text-[11px] text-slate-400 text-center mt-3">
        We treat every brief with care and confidentiality. We typically respond within 24 hours.
      </p>
    </div>
  </form>
</template>

