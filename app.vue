<script setup>
import AOS from 'aos'
onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
