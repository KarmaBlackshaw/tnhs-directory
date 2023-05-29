<script setup>
const ethos = [
  {
    icon: 'i-ph-unite-duotone',
    title: 'Unity',
    tagline: 'Our strength lies in our shared experiences and unity.',
    description: 'We draw upon our collective past to foster a supportive and progressive community, encouraging every member to reach their full potential.'
  },
  {
    icon: 'i-fa6-solid-hand-fist',
    title: 'Legacy',
    tagline: 'We are defined not just by our achievements, but by the enduring legacy we create.',
    description: "Our focus isn't solely on personal success, but on how we can positively shape the world for future generations."
  },
  {
    icon: 'i-ph-users-three-light',
    title: 'Influence',
    tagline: 'We strive to make a significant impact in our respective fields.',
    description: 'Our shared journey equips us with the determination and insight to be catalysts for change, inspiring others with our actions and accomplishments.'
  }
]
</script>

<template>
  <section
    id="ethos"
    class="flex items-center justify-center min-h-screen"
  >
    <div class="max-w-[1000px] flex flex-col gap-10 p-5">
      <section-title>
        Our ethos
      </section-title>

      <section-subtitle>
        The foundation of who we are. The why behind what we do.
      </section-subtitle>

      <div class="flex gap-3 sm:gap-10 flex-wrap">
        <div
          v-for="(etho, ethoKey) in ethos"
          :key="ethoKey"
          class="grow border border-gray-200 rounded-lg p-10 flex flex-col gap-5 flex-1"
        >
          <i
            :class="`
              ${etho.icon}
              text-5xl text-blue-500
            `"
          ></i>

          <h1 class="text-2xl text-blue-500 font-semibold tracking-wider">
            {{ etho.title }}
          </h1>

          <h2 class="text-xl font-semibold">
            {{ etho.tagline }}
          </h2>

          <p class="font-semibold text-black/50">
            {{ etho.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

