<template>
  <span
    class="text-decoration text-decoration-top"
    data-aos="fade-up-left"
  >
    #drama
  </span>
  <button class="search-bar">你的命定角色 <span>🔍</span></button>
  <p class="question-mark" data-aos="fade-up">{{ title.number }}</p>
  <div class="position-relative">
    <p class="question-content" data-aos="fade-up" data-aos-delay="300">
      {{ title.content1 }}<br />
      {{ title.content2 }}<br />
      {{ title.content3 }}
    </p>
    <span
      class="text-decoration text-decoration-middle"
      data-aos="fade-up-right"
    >
      #character
    </span>
  </div>
  <ul class="question-btn">
    <li
      v-for="item in options"
      :key="item.value"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <button
        @click="store.answerHandler(item.value)"
      >
        {{ item.label }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue';
import { useStatusStore } from '@/store/status'
const store = useStatusStore()


defineProps(['title', 'options']);

onMounted(() => {
  AOS.init(
    {
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // 
    }
  )
})
</script>

<style scoped lang="scss">
@import '../assets/_color.scss';

.search-bar {
  margin: 20px auto;
}

.question-mark {
  font-size: 30px;
  color: $brown;
  font-weight: bold;
  margin: 10%;
}

.question-content {
  font-size: 22px;
  font-weight: bold;
  margin-left: 20%;
  margin-bottom: 30%;
  color: $brown;
  letter-spacing: 6px;
}
.question-btn {
  padding: 0;
  button {
    display: block;
    margin: 0 auto 20px;
    background-color: $lightGreen;
    color: $brown;
    font-weight: bold;
    letter-spacing: 3px;
    border: 2px solid $brown;
    border-radius: 5px;
    width: 80%;
    padding: 20px 15px;
    &:hover {
      background: $yellow;
    }
  }
}

.text-decoration{
  
  color: $brown;
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: 3px solid $brown;
  padding: 0px 15px;
  position: absolute;
  text-align: center;
  font-weight: bold;
  font-family: 'Mynerve', cursive;
  &-top {
    right: -5%;
    top: 150px;
    background: $lightGreen;
  }
  &-middle {
    left:-5%;
    bottom: -50%;
    background: $green;
  }
}
</style>
