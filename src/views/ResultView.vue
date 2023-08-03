<template>
  <div>
    <div
      class="position-relative mb-4"  
      data-aos="fade-down-left"
    >
      <img src="/polaroid-tag.png" alt="img" class="polaroid-tag" />
      <div class="character-picture">
        <img src="/amber_img.png" alt="img" class="img-fluid" />
      </div>
      <img
        src="/polaroid-block.png"
        alt="img"
        class="polaroid-block"
      />
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useStatusStore } from '@/store/status';
const store = useStatusStore();

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
  characterName.value = '#某某某';
  dramaName.value = '這裡是劇名劇名';
  resultContent.value =
    '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十';
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
</style>
