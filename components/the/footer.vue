<script setup>
import constants from '@/constants'
</script>

<template>
  <footer class="container mx-auto p-10 text-center">
    <div class="flex flex-col sm:flex-row gap-10 justify-between mb-5">
      <div class="flex-1">
        <h1 class="text-blue-500 text-3xl font-josefin">
          {{ constants.SITE_TITLE }}
        </h1>
      </div>

      <div class="flex-1">
        <h1 class="font-bold mb-5 text-2xl">
          Who we are
        </h1>

        <ul class="flex flex-col gap-2 text-lg">
          <li>About</li>
          <li>Vision</li>
          <li>Ethos</li>
          <li>Team</li>
        </ul>
      </div>

      <div class="flex-1">
        <h1 class="font-bold mb-5 text-2xl">
          Services
        </h1>

        <ul class="flex flex-col gap-2 text-lg">
          <li>Web applications</li>
          <li>Ecommerce / Websites</li>
          <li>Virtual Assistance</li>
          <li>Courses</li>
        </ul>
      </div>

      <div class="flex-1">
        <h1 class="font-bold mb-5 text-2xl">
          Socials
        </h1>

        <ul class="flex flex-col gap-2 text-lg">
          <li>
            Facebook <i class="i-ic-outline-arrow-outward text-xs text-gray-500"></i>
          </li>
          <li>
            Instagram <i class="i-ic-outline-arrow-outward text-xs text-gray-500"></i>
          </li>
          <li>
            Linkedin <i class="i-ic-outline-arrow-outward text-xs text-gray-500"></i>
          </li>
          <li>
            Tiktok <i class="i-ic-outline-arrow-outward text-xs text-gray-500"></i>
          </li>
          <li>
            Youtube <i class="i-ic-outline-arrow-outward text-xs text-gray-500"></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full border-t text-xs p-10 text-center">
      © {{ constants.SITE_TITLE }} 2023. All rights reserved.
    </div>
  </footer>
</template>

