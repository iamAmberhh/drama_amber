<template>
  <button class="search-bar">你的命定角色 <span>🔍</span></button>
  <p class="question-mark">Q1</p>
  <p class="question-content">
    {{ title.content1 }}<br />
    {{ title.content2 }}<br />
    {{ title.content3 }}
  </p>

  <ul class="question-btn">
    <li v-for="item in options" :key="item.value">
      <button>{{ item.label }}</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps(['title', 'options']);

// const questionOption = ref([
//   {
//     label: 'A. first',
//     value: 'A',
//   },
//   {
//     label: 'B. second',
//     value: 'B',
//   },
//   {
//     label: 'B. third',
//     value: 'B',
//   },
// ]);
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
    border: 2px solid $brown;
    border-radius: 5px;
    width: 80%;
    padding: 5px 15px;
    &:hover {
      background: $yellow;
    }
  }
}
</style>
