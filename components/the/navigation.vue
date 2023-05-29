<script setup>
import constants from '@/constants'

const popup = ref(null)

const isShowDropdown = ref(false)

watchEffect(() => {
  if (!popup.value) {
    return
  }

  const rect = popup.value.getBoundingClientRect()

  const NAVBAR_HEIGHT = 64
  const height = rect.height + NAVBAR_HEIGHT

  if (isShowDropdown.value) {
    popup.value.style.transform = `translateY(${0}px)`
    popup.value.classList.add('shadow-lg')
    popup.value.classList.remove('hidden')
  } else {
    popup.value.style.transform = `translateY(-${height}px)`
    popup.value.classList.add('hidden')
    popup.value.classList.remove('shadow-lg')
  }
})

function toggle () {
  isShowDropdown.value = !isShowDropdown.value
}

</script>

<template>
  <div
    ref="popup"
    class="fixed top-[64px] w-full hidden"
  >
    <ul
      class="p-10 left-0 w-full flex flex-col items-center gap-4 bg-white transition z-[2]"
    >
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
  </div>

  <nav class="h-[64px] w-full bg-white flex justify-between items-center px-10 fixed z-[50]">
    <h1 class="text-xl text-blue-500 font-josefin">
      {{ constants.SITE_TITLE }}
    </h1>

    <button
      class="sm:hidden"
      @click="toggle"
    >
      <i class="i-streamline-interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"></i>
    </button>

    <ul class="hidden sm:flex items-center gap-4">
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
</template>

