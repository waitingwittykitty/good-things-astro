<script setup>
defineProps({
  classProp: String,
  size: Number,
});
</script>

<template>
  <img
    :class="classProp"
    alt="Logo"
    src="../../assets/logo.png"
    :width="size"
    height="auto"
  />
</template>
