<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="false"
    background-color="#FFFCF1"
    :opacity="0.9"
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
  <div class="position-relative mb-4" data-aos="fade-down-left">
    <img src="/polaroid-tag.png" alt="img" class="polaroid-tag" />
    <div class="character-picture">
      <img src="/amber_img.png" alt="img" class="img-fluid" />
    </div>
    <img src="/polaroid-block.png" alt="img" class="polaroid-block" />
    <p class="character-name">{{ characterName }}</p>
  </div>
  <span
    class="text-decoration"
    data-aos="fade-down-right"
    data-aos-delay="1000"
  >
    {{ dramaName }}
  </span>
  <p class="content" data-aos="fade-up">{{ resultContent }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useStatusStore } from '@/store/status';
const store = useStatusStore();

const isLoading = ref(false);
const color = ref('#F8CD4C');

const characterName = ref(undefined);
const dramaName = ref(undefined);
const resultContent = ref(undefined);

onMounted(() => {
  AOS.init({
    duration: 1500,
    easing: 'ease',
    once: true,
  });
  getCharacterData();
});

const getCharacterData = () => {
  isLoading.value = true;
  setTimeout(() => {
    characterName.value = '#某某某';
    dramaName.value = '這裡是劇名劇名';
    resultContent.value =
      '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十';
    isLoading.value = false;
  }, 3000);
};

console.log(store.answerArr);
</script>

<style scoped lang="scss">
@import '../assets/_color.scss';

@keyframes nameMove {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
.character-name {
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  bottom: 20px;
  right: 70px;
  letter-spacing: 2px;
  animation-name: nameMove;
  animation-duration: 0.5s;
  animation-delay: 2s;
  animation-direction: normal;
  animation-fill-mode: forwards;
}

.character-picture {
  background: $lightGreen;
  transform: rotate(2deg);
  width: 80%;
  position: absolute;
  top: 12%;
  right: 10%;
  bottom: 10%;
}

.polaroid-block {
  width: 90%;
  margin: 30px 10px 0px 18px;
  transform: rotate(2deg);
}

.polaroid-tag {
  width: 30%;
  transform: rotate(-15deg);
  position: absolute;
  top: 5px;
  right: 110px;
  z-index: 10;
}

.text-decoration {
  border-radius: 20px;
  border: 3px solid $brown;
  text-align: center;
  font-weight: bold;
  background: $lightGreen;
  font-size: 18px;
  padding: 3px 25px;
  margin-left: -5%;
}

.content {
  padding: 20px 30px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
@keyframes ldio-cisgxfwb7it {
  0% { opacity: 1 }
  50% { opacity: .5 }
  100% { opacity: 1 }
}
.ldio-cisgxfwb7it div {
  position: absolute;
  width: 21.5px;
  height: 86px;
  top: 64.5px;
  animation: ldio-cisgxfwb7it 5.2631578947368425s cubic-bezier(0.5,0,0.5,1) infinite;
}.ldio-cisgxfwb7it div:nth-child(1) {
  transform: translate(32.25px,0);
  background: #f8cd4c;
  animation-delay: -3.1578947368421053s;
}.ldio-cisgxfwb7it div:nth-child(2) {
  transform: translate(75.25px,0);
  background: #7f664f;
  animation-delay: -2.1052631578947367s;
}.ldio-cisgxfwb7it div:nth-child(3) {
  transform: translate(118.25px,0);
  background: #f8cd4c;
  animation-delay: -1.0526315789473684s;
}.ldio-cisgxfwb7it div:nth-child(4) {
  transform: translate(161.25px,0);
  background: #7f664f;
  animation-delay: -5.2631578947368425s;
}
.loadingio-spinner-bars-il4j9qv1op8 {
  width: 215px;
  height: 215px;
  display: inline-block;
  overflow: hidden;
  opacity: 0.8;
}
.ldio-cisgxfwb7it {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-cisgxfwb7it div { box-sizing: content-box; }
</style>
