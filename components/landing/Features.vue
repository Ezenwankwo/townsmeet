<script setup>
const route = useRoute();
const features = [
  {
    title: "IT Advisory",
    description:
      "We develop your digital strategy, aligning business goals with technology, rethinking operational processes, and preparing the organization for digital change.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Technology Adoption",
    description:
      "Digital tools adoption, selecting and implementing the right technology solutions, ensuring seamless integration with existing systems.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Software Development",
    description:
      "Our team of developers, designers, and product managers work together to deliver high-quality custom software solutions.",
    icon: "bx:bxs-data",
  },
  {
    title: "Data Analytics",
    description:
      "We provide data-driven solutions to help businesses analyze and interpret data to make informed business decisions.",
    icon: "bx:bxs-bar-chart-alt-2",
  },
  {
    title: "IT Support",
    description:
      "We work closely with our clients to provide technical support for their IT systems, ensuring a smooth and efficient operations.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Training",
    description:
      "We offer training programs to help our clients and their employees grow and improve their digital capabilities.",
    icon: "bx:bxs-graduation",
  },
];
</script>

<template>
  <UContainer>
    <div v-if="route.path === '/'" class="mt-16 md:mt-0">
      <h2
        class="text-amber-950 text-4xl lg:text-5xl font-bold lg:tracking-tight"
      >
        All your digital needs in one place
      </h2>
      <p class="text-lg mt-4 text-slate-600">
        We provide a range of services to help our clients achieve their goals.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
      <div
        v-for="item of features"
        class="bg-slate-100 rounded-lg p-8 flex flex-col justify-center border hover:border-amber-950"
      >
        <div class="flex items-center mb-4">
          <div
            class="bg-amber-950 rounded-full p-2 w-10 h-10 flex items-center justify-center mr-4"
          >
            <Icon class="text-white" :name="item.icon" />
          </div>
          <h3 class="text-lg font-semibold text-amber-950">{{ item.title }}</h3>
        </div>
        <p class="text-slate-500 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
