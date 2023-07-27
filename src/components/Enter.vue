<template>
  <p class="time font-mynerve">{{ now }}</p>
  <div class="message-box">
    <div class="message-box-title">
      <div>
        <img src="../../public/amber_img.png" alt="img" />
        <span class="fw-bold">MESSAGE</span>
      </div>
      <span class="fz-sm">Now</span>
    </div>
    <div class="p-3">
      <p>
        哈囉～<br />
        跟 Amber 一樣喜歡追劇的朋朋們<br />
        2023 年就快要結束啦！<br />
        <br />
        有沒有想過如果你是主角<br />
        會是什麼樣的角色呢?<br />
        快來測驗一下自己的命定角色吧😜
      </p>
      <p class="message-highlight">您已收到來自 Amber 的測驗</p>
    </div>
  </div>
  <!-- <div class="search-bar"> -->
    <button class="search-bar">
      Let's start ! <span>🔍</span>
    </button>
  <!-- </div> -->
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import dayjs from 'dayjs';

defineProps({
  msg: String,
});

const now = ref(dayjs().format('HH:mm'));
console.log(now.value);

// onMounted(() => {
//   time.textContent = now;
//   setInterval(() => {
//     time.textContent = now;
//   }, 30000);
// });

watch();
</script>

<style scoped lang="scss">
@import '../assets/_color.scss';
.time {
  font-weight: bold;
  font-size: 80px;
  letter-spacing: 10px;
  color: $brown;
  text-align: center;
  margin: 20px 0px;
}

.message-box {
  border-radius: 15px;
  background-color: rgba(204, 213, 174, 0.6);
  width: 90%;
  margin: 0 auto;

  &-title {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgb(255, 255, 255, 0.5);

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 5px;
    }
  }
}

.message-highlight{
  background: $green;
  color: white;
  border-radius: 20px;
  padding: 10px;
  margin: 20% 0 15% 0;
  text-align: center;
  text-shadow: 0.1em 0.1em 0.2em black;
}
.fz-sm {
  font-size: 12px;
  color: $brown;
}

.search-bar {
  margin-top: 10%;
}
</style>
