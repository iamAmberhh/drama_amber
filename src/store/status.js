import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router/index';


export const useStatusStore = defineStore('status', () => {
  const questionStatus = ref(1)
  const answerArr = ref([])

  const answerHandler = (value) => {
    answerArr.value.push(value)
    questionStatus.value ++
    if (questionStatus.value === 4) {
      router.push({
        path:'/result'
      })
    }
  }


  return { questionStatus, answerArr, answerHandler }
})