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
    src="../../assets/icons/magnifier.svg"
    :width="size"
    height="auto"
  />
</template>
