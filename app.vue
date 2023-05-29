<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
