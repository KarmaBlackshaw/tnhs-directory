<script setup>
import constants from '@/constants'
</script>

<template>
  <section
    id="home"
    class="min-h-screen max-w-screen relative flex items-center justify-center"
  >
    <div class="bg-[url(/assets/svg/grid.svg)] absolute inset-0 bg-center z-0"></div>

    <div class="z-[1]">
      <div class="max-w-[100ch] text-center flex flex-col gap-10 p-10">
        <section-title>
          We are {{ constants.SITE_TITLE }}
        </section-title>

        <h2 class="text-[35px] sm:text-[48px] font-medium leading-[1.4]">
          United by History, Shaping the Future.
        </h2>
      </div>
    </div>
  </section>
</template>

