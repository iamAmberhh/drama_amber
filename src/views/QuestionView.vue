<template>
  <QuestionPageComponent :title="questionOne" :options="questionOneOptions" />
</template>

<script setup>
import { ref } from 'vue';
import QuestionPageComponent from '../components/QuestionPageComponent.vue';

const questionOne = ref({
  content1: '如果你是主角，',
  content2: '你覺得你的角色',
  content3: '個性會是．．．？',
});

const questionOneOptions = ref([
  {
    label: 'A. 123',
    value: 'A',
  },
  {
    label: 'B. 456',
    value: 'B',
  },
  {
    label: 'B. 789',
    value: 'B',
  },
]);

const questionTwo = ref({
  content1: '如果你是主角，',
  content2: '你覺得你的角色',
  content3: '個性會是．．．？',
});
</script>
