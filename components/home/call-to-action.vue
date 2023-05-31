<script setup>
import constants from '@/constants'
</script>

<template>
  <section
    id="call-to-action"
    class="bg-blue-500/10 py-20 px-10 flex items-center justify-center"
  >
    <div class="flex flex-col gap-3 max-w-[1000px]">
      <h1 class="text-5xl font-semibold">
        Let's keep in touch
      </h1>

      <h5 class="text-xl">
        Engage with {{ constants.SITE_TITLE }} for inspiring insights, tech updates, business strategies, and beyond. Let's keep the conversation going.
      </h5>

      <div class="flex flex-col gap-3">
        <span class="text-lg text-black/50">Connect with us on our socials</span>

        <ul class="flex gap-3">
          <li>
            <i class="i-ic-outline-facebook text-2xl text-gray-400"></i>
          </li>

          <li>
            <i class="i-bi-instagram text-2xl text-gray-400"></i>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

