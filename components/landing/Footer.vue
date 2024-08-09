<template>
  <div class="text-sm mt-20">
    <UContainer class="pt-12">
      <div class="flex flex-col md:flex-row mb-8">
        <div class="md:w-2/4">
          <NuxtLink to="/" class="text-xl font-bold text-center tracking-wider text-amber-950 uppercase lg:text-4xl">
            <span class="font-light">Towns</span><span class="font-semibold">meet</span>
          </NuxtLink>
          <p class="text-slate-600 my-4 md:w-3/5">
            Townsmeet is a digital transformation company. We provide
            innovative digital solutions to businesses and organisations. 
          </p>
          <div class="text-slate-700 space-x-4 mb-8">
            <span><Icon name="line-md:twitter-x" /></span>
            <span><Icon name="line-md:linkedin" /></span>
            <span><Icon name="jam:whatsapp" /></span>
          </div>
        </div>
        <div class="md:w-1/4 flex flex-col justify-center mb-8 md:mb-0">
          <h4 class="text-amber-950 text-lg font-semibold">
            Explore
          </h4>
          <ul class="text-slate-600 space-y-4 mt-4">
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/blogs">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="md:w-1/4 flex flex-col justify-center">
          <h4 class="text-amber-950 text-lg font-semibold">
            Contact Us
          </h4>
          <ul class="text-slate-600 space-y-4 mt-4 item">
            <li class="flex items-center">
              <Icon name="material-symbols:mail-outline" class="mr-2" />
              <span>info@townsmeet.com</span>
            </li>
            <li class="flex items-center">
              <Icon name="material-symbols:call" class="mr-2" /> 
              <span>08183096264</span>
            </li>
            <li class="flex items-center">
              <Icon name="jam:whatsapp" class="mr-2" />
              <span>08055789594</span>
            </li>
            <li class="flex items-center">
              <Icon name="line-md:map-marker-alt" class="mr-2" /> 
              <span>FCT, Abuja Nigeria</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="flex justify-center items-center text-white h-24">
        <p class="text-slate-700">© {{ new Date().getFullYear() }} Townsmeet Ltd. All rights reserved</p>
      </div>
    </UContainer>
  </div>
</template>
