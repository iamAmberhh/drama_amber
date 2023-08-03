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
import QuestionPageComponent from '@/components/QuestionPageComponent.vue';

const store = useStatusStore()


const questionOne = ref({
  number:'Q1',
  content1: '哪一種個性特質，',
  content2: '和現階段的你/妳',
  content3: '最接近呢．．．？',
});

const questionOneOptions = ref([
  {
    label: 'A. 勇敢大膽',
    value: 'A',
  },
  {
    label: 'B. 幽默開朗',
    value: 'B',
  },
  {
    label: 'C. 直率真誠',
    value: 'C',
  },
]);

const questionTwo = ref({
  number:'Q2',
  content1: '如果不考慮經濟、',
  content2: '家庭、朋友等因素',
  content3: '你最想居住的地方是．．．？',
});

const questionTwoOptions = ref([
  {
    label: 'A. 閃亮亮的城市',
    value: 'A',
  },
  {
    label: 'B. 綠油油的鄉村',
    value: 'B',
  },
]);

const questionThree = ref({
  number:'Q3',
  content1: '你/妳希望或期許',
  content2: '自己未來的生活',
  content3: '或目標會是．．．？',
});

const questionThreeOptions = ref([
  {
    label: 'A. 持續成長 幫助他人',
    value: 'A',
  },
  {
    label: 'B. 平凡安穩 喜悅幸福',
    value: 'B',
  },
  {
    label: 'C. 充滿未知 熱血挑戰',
    value: 'C',
  },
]);

</script>
