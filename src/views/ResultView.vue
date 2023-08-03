<template>
  result
</template>

<script setup>
import { useStatusStore } from '@/store/status'
const store = useStatusStore()

console.log(store.answerArr)

</script>