<script setup>
defineProps({
  classProp: String,
  size: Number,
});
</script>

<template>
  <img
    :class="classProp"
    alt="Magnifier"
    src="/magnifier.svg"
    :width="size"
    height="auto"
  />
</template>
