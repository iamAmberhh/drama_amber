<template>
  <p class="time font-mynerve">{{ now }}</p>
  <div class="message-box">
    <div class="message-box-title">
      <div>
        <img src="/amber_img.png" alt="img" />
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
      <h2
        class="message-end"
        data-aos="zoom-in"
        data-aos-delay="300"
      >您已收到來自 Amber 的邀請</h2>
    </div>
  </div>
  <button
    class="search-bar"
    data-aos="zoom-in"
    data-aos-delay="1800"
    @click="startGame"
  >
    Let's start ! <span>🔍</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useStatusStore } from '@/store/status';
import router from '@/router/index';
const store = useStatusStore();

const now = ref(undefined);

const startGame = () => {
  store.questionStatus = 1
  store.answerArr = []
  router.push({
    path:'/question'
  })
}


onMounted(() => {
  now.value = dayjs().format('HH:mm')
  AOS.init(
    {
      duration: 1500, 
      easing: 'ease',
      once: true,
    }
  )
})

</script>

<style scoped lang="scss">
@import '../assets/_color.scss';
.time {
  font-weight: bold;
  font-size: 80px;
  letter-spacing: 10px;
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

.message-end {
  font-size: 16px;
  color: white;
  padding: 10px;
  margin: 15% 0 10% 0;
  text-align: center;
  text-shadow: 0.1em 0.1em 0.2em black;
}
.fz-sm {
  font-size: 12px;
}

@keyframes btnScale {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

.search-bar {
  margin-top: 10%;
  padding: 6px 12px;
  animation-name: btnScale;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
  box-shadow: 0em 0em 1em $yellow;
}
</style>
