<script setup>
import { useEventListener } from '@vueuse/core'

const isHomeVisible = ref(null)
onMounted(() => {
  const home = document.getElementById('home')

  isHomeVisible.value = isInViewport(home)
  useEventListener(document, 'scroll', () => {
    isHomeVisible.value = isInViewport(home)
  })
})
</script>

<template>
  <button
    :class="`
      fixed bottom-5 right-5
      wh-[40px]
      bg-blue-500
      text-white
      rounded-full
      flex items-center justify-center
      ${isHomeVisible ? 'translate-y-[64px]' : ''}
      transition
    `"
    @click="scrollToSection('home')"
  >
    <i class="i-tabler-chevron-up"></i>
  </button>
</template>

