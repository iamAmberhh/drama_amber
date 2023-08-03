<template>
  <div class="position-relative mb-4">
    <img src="../../public/polaroid-tag.png" alt="img" class="polaroid-tag" />
    <div class="character-picture"></div>
    <img
      src="../../public/polaroid-block.png"
      alt="img"
      class="polaroid-block"
    />
    <p class="character-name">#某某某</p>
  </div>
  <span class="text-decoration">
    這裡是劇名劇名
  </span>
  <p class="content">一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十</p>
</template>

<script setup>
import { useStatusStore } from '@/store/status';
const store = useStatusStore();

console.log(store.answerArr);
</script>

<style scoped lang="scss">
@import '../assets/_color.scss';
.character-name {
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  bottom: 20px;
  right: 70px;
  letter-spacing: 2px;
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
  padding: 30px;
  font-weight: bold;
  letter-spacing: 1.5px;
}
</style>
