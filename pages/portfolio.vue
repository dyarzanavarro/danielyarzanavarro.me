<template>
  <div class="max-w-screen-xl px-6 mx-auto  pt-16">
    <div class="px-4 w-full flex items-center justify-between  pt-16">
      <div
        class="
          flex
          items-center
          pt-3
          text-gray-700
          dark:text-gray-200 dark:text-gray-200
          hover:text-indigo-700
          cursor-pointer
        "
      >
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-gray-700 dark:stroke-gray-200"
        >
          <path
            d="M1.1665 4H12.8332"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.1665 4L4.49984 7.33333"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.1665 4.00002L4.49984 0.666687"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <nuxt-link to="/sunrise">
          <p
            class="
              text-sm
              font-medium
              leading-none
              ml-3
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-700
            "
          >
            Previous
          </p>
        </nuxt-link>
      </div>
      <div
        class="
          flex
          items-center
          pt-3
          text-gray-700
          dark:text-gray-200 dark:text-gray-200
          hover:text-indigo-700
          cursor-pointer
        "
      >
        <nuxt-link to="/psych">
          <p
            class="
              text-sm
              font-medium
              leading-none
              mr-3
              text-gray-700
              dark:text-gray-200
              hover:text-indigo-700
            "
          >
            Next
          </p>
        </nuxt-link>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          class="stroke-gray-700 dark:stroke-gray-200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1665 4H12.8332"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 7.33333L12.8333 4"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 0.666687L12.8333 4.00002"
            class="stroke-gray-700 dark:stroke-gray-200"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="px-4 pt-6">
      <div
        class="
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-[#44BCFF]
          via-[#FF44EC]
          to-[#FF675E]
          max-w-2xl
          mb-4
          text-4xl
          font-bold
          lg:text-7xl
          leading-none
          tracking-wide
          md:text-5xl
          xl:text-6xl
          py-4
        "
      >
        Portfolio
      </div>
    </div>

    <div class="px-4 lg:pt-8 pt-6">
      <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
        Dipping my toes in SCRUM product ownership & creating intuitive user
        journeys that drive up value and supports long-term growth.
      </div>
      <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
        nisi justo, ac rhoncus nibh malesuada a. Ut tempus ultricies ante id
        eleifend.
      </div>
    </div>
    <div class="px-4 lg:pt-8 pt-6 flex justify-evenly">
      <div class="flex items-center pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-9 w-9 stroke-gray-700 dark:text-gray-200"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-sm
                font-medium
                leading-5
                text-gray-700
                dark:text-gray-200
              "
            >
              Type
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                leading-normal
                pt-2
                text-gray-700
                dark:text-gray-200
              "
            >
              Project
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-9 w-9 stroke-gray-700 dark:text-gray-200"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-sm
                font-medium
                leading-5
                text-gray-700
                dark:text-gray-200
              "
            >
              Tech
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                leading-normal
                pt-2
                text-gray-700
                dark:text-gray-200
              "
            >
              Nuxt3 | Vue | Tailwind
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center pb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-9 w-9 stroke-gray-700 dark:text-gray-200"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <div class="flex items-start justify-between w-full">
          <div class="pl-3 w-full">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-sm
                font-medium
                leading-5
                text-gray-700
                dark:text-gray-200
              "
            >
              Link
            </p>
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-xs
                leading-normal
                pt-2
                text-gray-700
                dark:text-gray-200
              "
            >
              <nuxt-link to="/" class=""> Website </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 lg:pt-8 pt-6">
      <img
        class="h-96 shadow rounded-t w-full object-cover object-center"
        src="/img/process2.jpg"
        alt="Empathy process showing Daniel in a Group"
      />
    </div>
    <div class="px-4 lg:pt-8 pt-6">
      <div
        class="
          font-bold
          text-gray-700
          dark:text-gray-200
          lg:text-3xl
          text-2xl
          pb-6
        "
      >
        Project Purpose and Goal
      </div>
      <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4 pb-6">
        The primary goal of this portfolio was to create a digital canvas that not only showcases my work but also reflects my expertise in web development. Utilizing Nuxt3, the aim was to build an SEO-friendly, high-performing platform that stands out in both speed and user experience. <br />
        The portfolio serves as a testament to my ability to blend modern design with functionality, all while adhering to the principles of clean code and maintainability.
      </div>
    </div>

    <div
      class="
        mx-auto
        grid
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        px-4
        lg:pt-8
        pt-6
        gap-8
      "
    >
      <div class="rounded pb-6">
        <img
          class="h-96 shadow rounded-t w-full object-cover object-center"
          src="/img/process2.jpg"
          alt="Empathy process showing Daniel in a Group"
        />
      </div>
      <div class="rounded">
        <div
          class="
            font-bold
            text-gray-700
            dark:text-gray-200
            lg:text-3xl
            text-2xl
            pb-6
          "
        >
          Workflow and Decisions
        </div>
        <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4">
          The iterative process of building this portfolio centered on a strategic workflow that embraced both design and development agility. Nuxt.js was chosen for its versatility and its server-side rendering capabilities, ensuring a robust foundation. Tailwind CSS was integrated for its utility-first approach, which significantly accelerated the styling process. <br />
          It allowed for rapid prototyping and iterative design enhancements, providing a scalable and customizable CSS framework that matched the evolving nature of the portfolio.
        </div>
      </div>
    </div>

    <div class="px-4 lg:pt-8 pt-6 grid place-items-center pb-6">
      <div
        class="
          font-bold
          text-gray-700
          dark:text-gray-200
          lg:text-3xl
          text-2xl
          pb-6
        "
      >
        Thoughts & Hickups along the way
      </div>
      <div class="text-gray-800 dark:text-gray-400 lg:text-2xl sm:text-4 pb-6">
        Developing my portfolio was a journey marked by continuous learning and adaptation. Embracing Nuxt.js and Tailwind CSS was only the beginning. The real challenge was in refining the user experience and achieving a balance between aesthetic appeal and technical performance. <br />
        There were hiccups, notably in optimizing media content and ensuring a seamless responsive layout across devices. These challenges were invaluable lessons, highlighting the importance of iterative improvements and the relentless pursuit of excellence.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>