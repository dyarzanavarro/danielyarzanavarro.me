<template>
  <div class="flex items-center justify-center px-4 lg:px-0 py-12 relative">
    <div
      id="alert"
      class="
        transition
        duration-150
        ease-in-out
        lg:w-11/12
        mx-auto
        py-3
        px-4
        dark:bg-gray-800
        bg-white
        md:flex
        items-center
        justify-between
        shadow
        rounded
      "
    >
      <div class="sm:flex sm:items-start lg:items-center">
        <div class="flex items-end">
          <div class="mr-2 text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path
                class="heroicon-ui"
                d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
          </div>
          <p class="mr-2 text-base font-bold text-gray-800 dark:text-gray-100">
            Warning
          </p>
        </div>
        <div
          class="
            h-1
            w-1
            bg-gray-300
            dark:bg-gray-700
            rounded-full
            mr-2
            hidden
            xl:block
          "
        ></div>
        <p
          class="
            text-sm
            sm:text-base
            text-gray-700
            dark:text-gray-200 dark:text-gray-400
            pt-2
            sm:pt-0
            pb-2
            sm:pb-0
          "
        >
          Hurricane warning in this area. Please check local media and
          authorities-NWS
        </p>
      </div>
      <div class="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
        <button
          class="
            focus:outline-none
            mr-8
            bg-indigo-700
            transition
            duration-150
            ease-in-out
            hover:bg-indigo-600
            rounded
            text-white
            px-6
            py-2
            text-xs
          "
        >
          View
        </button>
        <div @click="closeAlert()" class="cursor-pointer text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleWithActionButtonWarning",
  mounted: function () {
    this.onLoad();
  },
  methods: {
    onLoad() {
      var Alert = document.getElementById("alert");
      Alert.style.transform = "translateY(-400%)";
      setTimeout(function () {
        Alert.style.transform = "translateY(0%)";
      }, 1000);
    },
    closeAlert() {
      var Alert = document.getElementById("alert");
      Alert.style.transform = "translateY(-400%)";
    },
  },
};
</script>
