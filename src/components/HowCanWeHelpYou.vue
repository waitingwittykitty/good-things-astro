<script setup>
import { ref } from "vue";

import { homepageData } from "../config/staticData";
import StandardSelect from "./share/StandardSelect.vue";
import AppButton from "./share/AppButton.vue";

const {
  howCanWeHelpYou: { title, description, roles, services, callToAction },
} = homepageData;
const role = ref(roles?.[0].value);
const service = ref(services?.[0].value);

</script>

<template>
  <section class="container">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <form class="box" method="get" target="_self" :action="callToAction.to">
      I am <StandardSelect name="role" :items="roles" v-model="role" /> and I want
      <StandardSelect name="service" :items="services" v-model="service" />
      <AppButton color="red" varient="filled" type="submit">
        {{ callToAction.text }}
      </AppButton>
    </form>
  </section>
</template>

<style scoped>
section {
  background: var(--color-gray);
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

.box {
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  padding: 1.5rem;
  font-size: 18px;
  gap: 0.5rem;
}
</style>
