<script setup>

import constants from '@/constants'
</script>

<template>
  <section
    id="vision"
    class="flex items-center justify-center min-h-screen"
  >
    <div class="max-w-[100ch] text-center flex flex-col gap-5 p-5">
      <h1 class="text-blue-500 text-2xl font-semibold">
        Our Vision
      </h1>

      <h2 class="text-[35px] sm:text-[48px] font-medium leading-[1.4]">
        Empower a brighter future through a network of <span class="font-bold text-blue-500">{{ constants.SITE_TITLE }}</span> alumni, creating transformative change in every sector of society.
      </h2>
    </div>
  </section>
</template>

