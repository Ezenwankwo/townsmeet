<template>
  <UContainer>
    <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
      <div class="p-6 md:p-24 order-1 md:block">
        <NuxtImg
          class="rounded-full transition-transform transform hover:scale-125"
          src="/hero1.webp"
          alt="Starship starts the engine"
          width="512"
          height="512"
        />
      </div>

      <div>
        <h1
          class="text-amber-950 text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight"
        >
          Experience the Digital Advantage.
        </h1>
        <p class="text-lg mt-4 text-slate-600 max-w-xl">
          Townsmeet empowers businesses and organisations through innovative
          digital solutions.
        </p>
        <div class="mt-6">
          <UButton to="/contact" color="orange" size="xl">Let's Talk</UButton>
        </div>
      </div>
    </main>
  </UContainer>
</template>
