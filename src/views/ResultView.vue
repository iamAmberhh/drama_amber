<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="false"
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
  <div class="position-relative mb-4" data-aos="fade-down-left">
    <img src="/polaroid-tag.png" alt="img" class="polaroid-tag" />
    <div class="character-picture">
      <img :src="characterPicture" alt="img" class="img-fluid" />
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
import axios from 'axios';
import router from '@/router/index';

import { useStatusStore } from '@/store/status';
const store = useStatusStore();

const isLoading = ref(false);
const color = ref('#F8CD4C');

const characterName = ref(undefined);
const characterPicture = ref(undefined)
const dramaName = ref(undefined);
const resultContent = ref(undefined);

onMounted(() => {
  AOS.init({
    delay:500,
    duration: 1500,
    easing: 'ease',
    once: true,
  });
  getCharacterData();
});

const getCharacterData = () => {
  isLoading.value = true;
  const id = store.answerArr.join('')
  if(id){
    axios.get(`https://drama-data.onrender.com/dramas/?id=${id}`)
    .then(({data}) => {
      characterName.value = `#${data[0].character}`;
      characterPicture.value = `/${data[0].character}.png`;
      dramaName.value = data[0].drama;
      resultContent.value = data[0].content
    }).catch((err) => {
      console.log(err)
    }).finally(()=> {
      isLoading.value = false;
    })
  }else{
    router.push({
      path:'/'
    })
  }
};

</script>

<style scoped lang="scss">
@import '../assets/_color.scss';
@import '../assets/loading';

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
