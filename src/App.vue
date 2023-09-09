<template>
  <VueLoading
    v-model:active="isLoading"
    color="#F8CD4C"
    :is-full-page="true"
    background-color="#FFFCF1"
    :opacity="1"
  >
  <div class="loadingio-spinner-bars-il4j9qv1op8">
      <div class="ldio-cisgxfwb7it">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </VueLoading>
  <div v-if="isPhone" class="phone-show">
    <div class="container d-flex flex-column">
      <div class="phone">
        <span class="phone-direction phone-direction-1"></span>
        <span class="phone-direction phone-direction-2"></span>
        <div class="phone-bg-block"></div>
        <RouterView />
      </div>
      <h1 class="footer-name font-prime">@drama_amber</h1>
    </div>
  </div>
  <div v-else class="desktop-show d-flex flex-column">
    <p>請使用手機開啟😜</p>
    <h1 class="footer-name font-prime">@drama_amber</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import axios from 'axios';

const isPhone = ref(true);
const isLoading = ref(true);

const screenWidth = ref(
  window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
);

onBeforeMount(() => {
  if(screenWidth.value < 576){
    isPhone.value = true
  } else {
    isPhone.value = false
  }
  getDataBase();
});

const getDataBase = () => {
  isLoading.value = true;
  axios
    .get(`https://drama-data.onrender.com/dramas`)
    .then(() => {
      isLoading.value = false;
    })
    .catch(() => {
      alert('請重新載入')
    });
};
</script>

<style lang="scss" scoped>
  @import './assets/all.scss';
</style>
