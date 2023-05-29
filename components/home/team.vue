<script setup>

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
          v-for="i in 50"
          :key="i"
          class="flex sm:flex-col gap-10"
        >
          <div class="flex-1">
            <img
              src="https://avatars.githubusercontent.com/u/40014179?s=400&u=fb5a08d868379ecdad371e286b40136d0f999f59&v=4"
              alt=""
              class="wh-"
            >
          </div>

          <div class="flex-1 sm:flex sm:flex-col gap-1">
            <h1 class="font-semibold text-sm">
              Ernie Jeash Villahermosa
            </h1>

            <h2 class="text-sm text-black/50 font-poppins">
              A hardcore encoder
            </h2>

            <ul class="flex gap-2">
              <li>
                <i class="i-devicon-plain-facebook text-gray-500 hover:scale-110 transition cursor-pointer"></i>
              </li>

              <li>
                <i class="i-bi-instagram text-gray-500 hover:scale-110 transition cursor-pointer"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

