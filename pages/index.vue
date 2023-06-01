<script setup>

const isShowSplashScreen = ref(false)
setInterval(() => {
  isShowSplashScreen.value = false
}, 3000)

</script>

<template>
  <div class="flex flex-col gap-10">
    <the-splash-screen v-if="isShowSplashScreen" />

    <the-navigation />

    <home-hero />

    <home-vision />

    <home-ethos />

    <home-team />

    <home-get-to-know-us />

    <home-call-to-action />

    <the-footer />

    <the-scroll-to-top />
  </div>
</template>

