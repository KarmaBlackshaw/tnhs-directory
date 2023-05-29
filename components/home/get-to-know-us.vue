<script setup>

import constants from '@/constants'

const assets = import.meta.glob('~/assets/images/gallery/8th-alumni/*', {
  eager: true,
  import: 'default'
})

</script>

<template>
  <section
    id="get-to-know-us"
    class="p-10 flex items-center justify-center"
  >
    <div class="flex flex-col gap-10 max-w-[1000px]">
      <h1 class="text-5xl font-semibold">
        Get to Know Us
      </h1>

      <h5 class="text-xl">
        Embrace the spirit of {{ constants.SITE_TITLE }}. While we're spread far and wide, our commitment to preserving our shared memories, insights, and learnings never wanes. Our remote activities, ranging from engaging meetups to insightful retrospectives, keep the vibrant pulse of Batch 2015 alive. Explore the journey, resonate with the legacy.
      </h5>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(asset, assetKey) in assets"
          :key="assetKey"
          :style="{
            backgroundImage: `url(${asset})`
          }"
          class="w-full h-[300px] bg-cover"
        >
        </div>
      </div>
    </div>
  </section>
</template>

console.log(object);