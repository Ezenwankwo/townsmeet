<script setup>
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

const mail = useMail();

const toast = useToast();

const sendMessage = async () => {
  isLoading.value = true;
  try {
    await mail.send({
      from: `${formData.name} <${formData.email}>`,
      subject: "Contact Form Submission",
      text: formData.message,
    });
    toast.add({
      title: "Message Sent",
      icon: "success",
      color: "green",
    });
    resetForm();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  formData.name = "";
  formData.email = "";
  formData.message = "";
};
</script>
<template>
  <form
    class="flex flex-col gap-y-5 max-w-md mx-auto"
    @submit.prevent="sendMessage"
  >
    <div class="form-control">
      <UInput
        v-model="formData.name"
        placeholder="Your name..."
        size="xl"
        variant="outline"
      />
    </div>
    <div class="form-control">
      <UInput
        v-model="formData.email"
        placeholder="Your email..."
        size="xl"
        type="email"
        variant="outline"
      />
    </div>
    <div class="form-control">
      <UTextarea
        v-model="formData.message"
        placeholder="Your message..."
        size="xl"
        rows="5"
        variant="outline"
      />
    </div>
    <div class="flex">
      <UButton color="orange" size="xl" type="submit" :loading="isLoading"
        >Send</UButton
      >
    </div>
  </form>
</template>
