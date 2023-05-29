<script setup>
function scrollToSection (id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="flex flex-col gap-10">
    <nav class="h-[64px] w-full bg-white flex justify-between items-center px-10 fixed z-[99]">
      <h1 class="text-xl text-blue-500 font-josefin">
        Legacy2015
      </h1>

      <ul class="flex items-center gap-4">
        <li
          class="cursor-pointer hover:text-blue-500"
          @click="scrollToSection('home')"
        >
          Home
        </li>
        <li
          class="cursor-pointer hover:text-blue-500"
          @click="scrollToSection('vision')"
        >
          Vision
        </li>
        <li
          class="cursor-pointer hover:text-blue-500"
          @click="scrollToSection('ethos')"
        >
          Ethos
        </li>
        <li
          class="cursor-pointer hover:text-blue-500"
          @click="scrollToSection('team')"
        >
          Team
        </li>
        <li>
          <button
            class="bg-blue-500 text-white px-3 h-[35px] flex items-center rounded text-sm"
            @click="scrollToSection('call-to-action')"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>

    <home-hero />

    <home-vision />

    <home-ethos />

    <home-team />

    <home-get-to-know-us />

    <home-call-to-action />

    <footer class="container mx-auto p-5 text-center">
      <div class="flex flex-col sm:flex-row gap-10 justify-between mb-5">
        <div class="flex-1">
          Legacy2015
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
        © Legacy2015 2023. All rights reserved.
      </div>
    </footer>
  </div>
</template>

