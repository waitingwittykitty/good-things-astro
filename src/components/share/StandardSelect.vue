<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  items: Array,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <select v-model="value" :name="name">
    <option v-for="item in items" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<style scoped>
select {
  color: var(--color-primary);
  border: none;
  border-bottom: 2px solid var(--color-primary);
  font-size: inherit;
}
</style>
