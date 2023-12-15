<script setup>
import AppButton from "./share/AppButton.vue";

const { data } = defineProps({
  data: Object
})

const { banner, subBanner } = data;
</script>

<template>
  <div class="banner">
    <div class="main-banner">
      <h2>{{ banner.title }}</h2>
      <p>{{ banner.description }}</p>
      <AppButton is-link color="red" varient="reversed" :href="banner.callToAction.to">
        {{ banner.callToAction.text }}
      </AppButton>
    </div>
    <div class="left-banner"></div>
    <div class="right-banner">
      <h2>{{ subBanner.title }}</h2>
      <p>{{ subBanner.description }}</p>
      <AppButton
        is-link
        color="white"
        varient="outlined"
        :href="subBanner.callToAction.to"
      >
        {{ subBanner.callToAction.text }}
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.main-banner {
  grid-column: 1/3;
  padding: 4rem;
  background: url(../assets/images/main-banner.jpg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.main-banner h2 {
  background: var(--color-primary);
  color: var(--color-white);
  display: block;
  font-size: 56px;
  padding: 0.2rem 1rem;
}

.main-banner p {
  background: var(--color-white);
  color: var(--color-primary);
  width: 50%;
  padding: 1rem;
  font-size: 18px;
  font-weight: 600;
}

.left-banner {
  background: url(../assets/images/left-banner.png);
  background-size: cover;
  background-position: center;
  height: 20rem;
}

.right-banner {
  background: var(--color-green);
  color: white;
  padding: 2rem 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 20rem;
}

.right-banner h2 {
  font-size: 24px;
  font-weight: 600;
}

.right-banner p {
  font-size: 18px;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .banner {
    grid-template-columns: 1fr;
  }

  .main-banner {
    grid-column: 1/2;
    padding: 2rem;
    height: 50rem;
  }

  .main-banner h2 {
    font-size: 32px;
  }

  .main-banner p {
    width: 100%;
  }

  .right-banner {
    grid-row: 2/3;
    padding: 2rem;
    align-items: center;
  }

  .right-banner h2 {
    font-size: 16px;
  }

  .banner p {
    font-size: 14px;
  }
}
</style>
