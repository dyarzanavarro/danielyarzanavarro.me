<template>
  <div>
    <div
      class="grid max-w-screen-xl px-4 py-2 pt-32 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] max-w-2xl mb-4 text-4xl font-bold lg:text-7xl leading-none tracking-wide md:text-5xl xl:text-6xl"
        >
          {{ introMessage[i] }}
        </span>
        <p
          class="max-w-2xl my-6 font-normal md:text-xl lg:text-2xl text-gray-800 dark:text-gray-400"
        >
          Nowadays, I'm dipping my toes in SCRUM product ownership & creating
          intuitive user journeys that drive up value and supports long-term
          growth. Get to know me better by browsing my past work, what I do for
          fun or learn about the process I use to improve any business.
        </p>
        <nuxt-link class="relative inline-flex mt-2 group" to="/process">
          <div
            class="absolute transition-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-300"
          ></div>
          <div
            class="inline-flex items-center justify-center mr-3 text-base font-medium text-center rounded-lg bg-primary-700 focus:ring-4 focus:ring-primary-300 text-gray-800 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:text-gray-200"
          >
            Learn more about me
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </nuxt-link>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex pt-12 relative z-100">
        <img
          class="w-12/12"
          :src="imgLoad[0]"
          alt="floating robot"
        />
      </div>
    </div>
    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-6">
      <div
        class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
      >
        Selected work
      </div>
      <work-cards />
    </div>

    <div class="justify-center max-w-screen-xl px-4 py-8 mx-auto pt-12">
      <div
        class="font-bold text-gray-700 dark:text-gray-200 lg:text-3xl text-2xl"
      >
        Profile & Contact
      </div>

      <profile-card />
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      imgLoad: ["/img/dan_1.png"],

      introMessage: [
        "Daniel is a UX Advocate working in B2C E-commerce in Zurich",
        "Daniel is a guy that likes good food",
        "Daniel loves AI, XR, and UX - (all buzzwords in one)",
        "Daniel in the third person is weird",
        "Daniel has a background in computer science",
        "Daniel is a problem-solver",
        "Daniel enjoys traveling and experiencing new cultures",
      ],
      i: "0",
    };
  },

  mounted() {
    window.setInterval(() => {
      this.changeImg();
      // Check if the textElement has been initialized
      if (this.i < this.introMessage.length - 1) this.i++;
      else this.i = 0;
    }, 6000);
  },
  methods: {
    changeImg() {
      const first = this.imgLoad.shift();
      this.imgLoad = this.imgLoad.concat(first);
    },
  },
};
</script>

<style>
</style>