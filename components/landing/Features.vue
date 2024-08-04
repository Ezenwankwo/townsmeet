<script setup>
const features = [
  {
    title: "Digital Strategy Consulting",
    description:
      `We develop your digital strategy, aligning business goals with technology, 
      rethinking operational processes, and preparing the organization for digital change.`,
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Technology Adoption",
    description:
      `Digital tools adoption, selecting and implementing the right technology solutions, 
      ensuring seamless integration with existing systems, and optimizing their use for maximum impact.`,
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Software Development",
    description:
      `We develop custom software solutions that meet your business needs. 
      Our team of developers, designers, and product managers work together to deliver high-quality products.`,
    icon: "bx:bxs-data",
  },
  {
    title: "IT Support",
    description:
      `We work closely with our clients to provide technical support for their IT systems, ensuring a smooth and efficient operation of your
      business. `,
    icon: "bx:bxs-bot",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-amber-950 text-4xl lg:text-5xl font-bold lg:tracking-tight">
      All your digital needs in one place
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Nuxt comes batteries included. It takes the best parts of state-of-the-art
      tools and adds its own innovations.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-amber-950 rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg text-amber-950">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
