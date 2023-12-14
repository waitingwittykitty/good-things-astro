<script setup>
defineProps({
  color: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "white", "green", "red"].includes(value),
  },
  varient: {
    type: String,
    default: "filled",
    validator: (value) => ["filled", "reversed", "outlined"].includes(value),
  },
  type: String,
  isLink: Boolean,
  href: String,
});
const emit = defineEmits(["click"]);
</script>

<template>
  <a v-if="isLink" :class="[color, varient]" :href="href">
    <slot></slot>
  </a>
  <button v-else :type="type" :class="[color, varient]" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
a, button {
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  transition: ease background 0.3s;
  font-weight: 600;
  font-size: 14px;
  line-height: normal;
}

.primary.reversed {
  color: var(--color-primary);
  border: var(--color-primary) solid 1px;
  background: var(--color-white);
}

.white.reversed {
  color: var(--color-white);
  border: var(--color-white) solid 1px;
  background: var(--color-primary);
}

.green.reversed {
  color: var(--color-green);
  border: var(--color-green) solid 1px;
  background: var(--color-white);
}

.red.reversed {
  color: var(--color-red);
  border: var(--color-red) solid 1px;
  background: var(--color-white);
}

.primary.outlined {
  color: var(--color-primary);
  border: var(--color-primary) solid 1px;
  background: none;
}

.white.outlined {
  color: var(--color-white);
  border: var(--color-white) solid 1px;
  background: none;
}

.green.outlined {
  color: var(--color-green);
  border: var(--color-green) solid 1px;
  background: none;
}

.red.outlined {
  color: var(--color-red);
  border: var(--color-red) solid 1px;
  background: none;
}

.primary.filled {
  color: var(--color-white);
  background: var(--color-primary);
}

.primary:hover {
  color: var(--color-white-soft);
  background: var(--color-primary-soft);
}

.white.filled {
  color: var(--color-black);
  background: var(--color-white);
}

.white:hover {
  color: var(--color-black);
  background: var(--color-white-soft);
}

.green.filled {
  color: var(--color-white);
  background: var(--color-green);
}

.green:hover {
  color: var(--color-white-soft);
  background: var(--color-green-soft);
}

.red.filled {
  color: var(--color-white);
  background: var(--color-red);
}

.red:hover {
  color: var(--color-white-soft);
  background: var(--color-red-soft);
}
</style>
