<template>
  <div class="container d-flex flex-column">
    <div class="phone">
      <span class="phone-direction phone-direction-1"></span>
      <span class="phone-direction phone-direction-2"></span>
      <div class="phone-bg-block"></div>
      <Enter />
    </div>
    <div class="footer-name font-prime">@drama_amber</div>
  </div>
</template>

<script setup>
import Enter from '@/components/Enter.vue'
</script>

<style lang="scss" scoped>
@import './assets/all.scss';
</style>
