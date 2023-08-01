<template>
  <div class="container d-flex flex-column">
    <div class="phone">
      <span class="phone-direction phone-direction-1"></span>
      <span class="phone-direction phone-direction-2"></span>
      <div class="phone-bg-block"></div>
      <RouterView />
    </div>
    <h1 class="footer-name font-prime">@drama_amber</h1>
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
@import './assets/all.scss';
</style>
