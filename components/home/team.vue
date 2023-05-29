<script setup>
const assets = import.meta.glob('~/assets/images/teams/*compressed*', {
  eager: true,
  import: 'default'
})

const thumbnailMap = Object.fromEntries(
  Object.entries(assets)
    .map(([key, value]) => {
      return [
        key
          .replace('/assets/images/teams/', '')
          .replace(/-compressed/gi, ''),
        value
      ]
    })
)

const users = Array.from({ length: 50 }, () => {
  return {
    name: 'Ernie Jeash Villahermosa',
    description: 'A hardcore encoder',
    thumbnail: thumbnailMap['villahermosa-ernie-jeash.jpg'],
    socials: [
      { type: 'facebook', url: 'https://www.facebook.com/KarmaBlackshaw/' },
      { type: 'instagram', url: 'https://www.instagram.com/karmablackshaw/?hl=en' }
    ]
  }
})

</script>
<template>
  <section
    id="team"
    class="flex items-center justify-center min-min-h-screen"
  >
    <div class="max-w-[1000px] flex flex-col gap-10 p-10">
      <section-title>
        Our team
      </section-title>

      <div>
        <section-subtitle>
          The awesome people behind amazing things
        </section-subtitle>

        <h3 class="text-xl text-black/50">
          Who also love to have fun
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        <div
          v-for="(user, userKey) in users"
          :key="userKey"
          class="flex sm:flex-col gap-5"
          data-aos="zoom-out-up"
          :data-aos-delay="200 * ethoKey"
        >
          <div class="flex-1">
            <img
              :src="user.thumbnail"
              alt=""
              class="wh-"
            >
          </div>

          <div class="flex-1 sm:flex sm:flex-col gap-1">
            <h1 class="font-semibold text-sm">
              {{ user.name }}
            </h1>

            <h2 class="text-sm text-black/50 font-poppins">
              {{ user.description }}
            </h2>

            <ul class="flex gap-2">
              <li
                v-for="(social, socialKey) in user.socials"
                :key="socialKey"
              >
                <a
                  :href="social.url"
                  target="_blank"
                >
                  <i
                    v-if="social.type === 'facebook'"
                    class="i-devicon-plain-facebook text-gray-500 hover:scale-110 transition cursor-pointer"
                  ></i>

                  <i
                    v-else-if="social.type === 'instagram'"
                    class="i-bi-instagram text-gray-500 hover:scale-110 transition cursor-pointer"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

