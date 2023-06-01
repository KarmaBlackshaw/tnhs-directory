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

const users = [
  {
    name: 'Ernie Jeash Villahermosa',
    description: "You're aren't",
    thumbnail: thumbnailMap['villahermosa-ernie-jeash.jpg'],
    socials: [
      { type: 'facebook', url: 'https://www.facebook.com/KarmaBlackshaw/' },
      { type: 'instagram', url: 'https://www.instagram.com/karmablackshaw/?hl=en' }
    ]
  },
  {
    name: 'Julius Reil Yves Alvior',
    description: 'Someday you will all write qoutes and put my name under it',
    thumbnail: thumbnailMap['alviour-julius.jpg']
  }
]

const userSearchQuery = ref('')

const usersFiltered = computed(() => {
  const searchableFields = ['name', 'description']

  const regex = new RegExp(userSearchQuery.value, 'gi')

  return users
    .filter(user => {
      return searchableFields.some(field => {
        return regex.test(user[field])
      })
    })
    .sort((x, y) => {
      return x.name > y.name
    })
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

      <div>
        <input
          v-model="userSearchQuery"
          type="search"
          class="border !outline-none px-3 py-2 rounded w-full text-sm"
          placeholder="Search the people you love"
        >
      </div>

      <div
        v-if="usersFiltered.length"
        class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
      >
        <div
          v-for="(user, userKey) in usersFiltered"
          :key="userKey"
          class="flex flex-col gap-5 flex-wrap"
          data-aos="zoom-out-up"
          :data-aos-delay="200 * ethoKey"
        >
          <div
            class="
              overflow-hidden
              h-[200px]
              flex items-center
              bg-cover bg-center
            "
            :style="{
              backgroundImage: `url(${user.thumbnail})`
            }"
          >
          </div>

          <div class="flex-1 sm:flex sm:flex-col gap-1 text-center">
            <h1 class="font-semibold text-sm">
              {{ user.name }}
            </h1>

            <h2 class="text-xs text-black/50 font-poppins italic">
              {{ user.description }}
            </h2>

            <ul class="flex gap-2 justify-center">
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

      <div
        v-else
        class="flex items-center justify-center flex-col gap-3"
      >
        <i class="i-line-md-coffee-half-empty-twotone-loop text-5xl text-gray-300"></i>

        <h1 class="text-gray-300">
          Wow, such empty list
        </h1>
      </div>
    </div>
  </section>
</template>

