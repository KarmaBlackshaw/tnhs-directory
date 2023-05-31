<script setup>
import constants from '@/constants'

const whoWeAre = [
  {
    text: 'Home',
    section: 'home'
  },
  {
    text: 'Vision',
    section: 'vision'
  },
  {
    text: 'Ethos',
    section: 'ethos'
  },
  {
    text: 'Team',
    section: 'team'
  }
]

const socials = [
  { text: 'Facebook' },
  { text: 'Instagram' },
  { text: 'Linkedin' },
  { text: 'Tiktok' },
  { text: 'Youtube' }
]
</script>

<template>
  <footer
    id="footer"
    class="container mx-auto p-10 text-center"
  >
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
          <li
            v-for="(item, itemKey) in whoWeAre"
            :key="itemKey"
            class="
              cursor-pointer
              hover:text-blue-500
              group
              flex items-center justify-center gap-2
            "
            @click="scrollToSection(item.section)"
          >
            {{ item.text }}

            <i
              class="
                i-ic-outline-arrow-outward
                text-xs
                text-gray-500 group-hover:text-blue-500
              "
            ></i>
          </li>
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
          <li
            v-for="(item, itemKey) in socials"
            :key="itemKey"
            class="
              cursor-pointer
              hover:text-blue-500
              group
              flex items-center justify-center gap-2
            "
          >
            {{ item.text }}

            <i
              class="
                i-ic-outline-arrow-outward
                text-xs
                text-gray-500 group-hover:text-blue-500
              "
            ></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full border-t text-xs p-10 text-center">
      © {{ constants.SITE_TITLE }} 2023. All rights reserved.
    </div>
  </footer>
</template>

