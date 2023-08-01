<template>
  <QuestionPageComponent
    v-if="store.questionStatus === 1"
    :title="questionOne"
    :options="questionOneOptions"
  />
  <QuestionPageComponent
    v-if="store.questionStatus === 2"
    :title="questionTwo"
    :options="questionTwoOptions"
  />
  <QuestionPageComponent
    v-if="store.questionStatus === 3"
    :title="questionThree"
    :options="questionThreeOptions"
  />
</template>

<script setup>
import { ref } from 'vue';
import { useStatusStore } from '@/store/status'
import QuestionPageComponent from '../components/QuestionPageComponent.vue';

const store = useStatusStore()


const questionOne = ref({
  number:'Q1',
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
    label: 'C. 789',
    value: 'C',
  },
]);

const questionTwo = ref({
  number:'Q2',
  content1: '如果你是1l311jo3i，',
  content2: '你覺得你fefw的角色',
  content3: '個性會是．．．？',
});

const questionTwoOptions = ref([
  {
    label: 'A. 222',
    value: 'A',
  },
  {
    label: 'B. 222',
    value: 'B',
  },
  {
    label: 'C. 222',
    value: 'C',
  },
]);

const questionThree = ref({
  number:'Q3',
  content1: '如果你是1l311jo3i，',
  content2: '你XXXXXXXfw的角色',
  content3: '個性會是．．．？',
});

const questionThreeOptions = ref([
  {
    label: 'A. 222',
    value: 'A',
  },
  {
    label: 'B. 222',
    value: 'B',
  },
]);

</script>
