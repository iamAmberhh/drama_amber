<template>
  <div class="time"></div>
  <div class="message-box">
    <div class="box-title">
      <div>
        <img src="" alt="img" />
        <span class="message">MESSAGE</span>
      </div>
      <span class="now">NOW</span>
    </div>
    <div class="content">hello</div>
  </div>
  <div class="search-bar">
    Let's start !
    <i class="bi bi-search"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

</script>

<style scoped lang="scss">

$brown: #7F664F;
.time {
  font-weight: bold;
  font-size: 50px;
  color: $brown;
  text-align: center;
  margin: 10px;
  height: 80px;
}

.message-box {
  border-radius: 15px;
  background-color: rgba(204, 213, 174, 0.6);
  width: 90%;
  height: 250px;
  margin: 0 auto;
}

.box-title {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
  }

  .message {
    font-weight: bold;
  }

  .now {
    font-size: 12px;
  }
}


</style>
