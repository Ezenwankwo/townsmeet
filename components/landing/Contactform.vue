<script setup>
const name = ref("");
const email = ref("");
const message = ref("");
</script>
<template>
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="form"
    class="flex flex-col gap-y-5 max-w-md mx-auto"
  >
    <div class="form-control">
      <UInput
        v-model="name"
        placeholder="Your name..."
        size="xl"
        variant="outline"
      />
    </div>
    <div class="form-control">
      <UInput
        v-model="email"
        placeholder="Your email..."
        size="xl"
        type="email"
		variant="outline"
      />
    </div>
    <div class="form-control">
      <UTextarea
        v-model="message"
        placeholder="Your message..."
        size="xl"
        rows="5"
        variant="outline"
      />
    </div>
    <div class="flex">
      <UButton color="orange" size="xl">Send</UButton>
    </div>
  </form>
</template>
