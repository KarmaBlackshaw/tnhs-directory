<script setup>
import _ from 'lodash'
import Typed from 'typed.js'
import constants from '@/constants'
const loadingPhrases = [
  "Fetching memories from 2015...",
  "Dusting off the yearbook...",
  "Reconnecting the Legacy2015 threads...",
  "Loading the nostalgia...",
  "Rewinding to the good old days...",
  "Traveling back to 2015...",
  "Unearthing the legacy...",
  "Packing the time capsule...",
  "Taking a stroll down memory lane...",
  "Reviving our shared journey...",
  "Retracing our steps back to 2015...",
  "Reliving the Legacy2015 experience...",
  "Diving into the Legacy2015 treasure trove...",
  "Rediscovering the batch of 2015...",
  "Journeying back to our roots...",
  "Summoning the spirit of 2015..."
]

onMounted(() => {
  new Typed('#typewriter', {
    strings: _.shuffle(loadingPhrases),
    typeSpeed: 10,
    loop: true
  })
})
</script>

<template>
  <div class="h-screen w-screen fixed bg-white z-[100] flex items-center justify-center flex-col gap-10 p-4">
    <div class="max-w-[400px] min-h-[300px] bg-gray-900 w-full p-4 rounded">
      <div class="relative text-center mb-2">
        <div class="flex gap-1 absolute top-[50%] translate-y-[-50%]">
          <div class="wh-[10px] rounded-full bg-red-500"></div>
          <div class="wh-[10px] rounded-full bg-yellow-500"></div>
          <div class="wh-[10px] rounded-full bg-green-500"></div>
        </div>

        <h1 class="text-white text-xs">
          {{ constants.SITE_TITLE }}
        </h1>
      </div>

      <span
        id="typewriter"
        class="font-ubuntu-mono text-sm text-white"
      >
        Loading
      </span>
    </div>
  </div>
</template>

