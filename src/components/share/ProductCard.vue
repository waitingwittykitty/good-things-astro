<script setup>
import AppButton from "./AppButton.vue";

defineProps({
  product: Object,
});
</script>

<template>
  <div class="box">
    <h3>{{ product?.name }}</h3>
    <p>{{ product?.description }}</p>
    <AppButton color="red" varient="outlined">Read more</AppButton>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-white);
  padding: 2rem;
}
</style>
