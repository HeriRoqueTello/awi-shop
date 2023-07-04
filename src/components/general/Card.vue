<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <RouterLink :to="`/producto/${producto.id}`" class="group relative md:min-w-[20rem] block">
    <button
      class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
    >
      <span class="sr-only">Wishlist</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>

    <img
      :src="producto.image"
      alt=""
      class="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
    />

    <div class="relative border border-gray-100 bg-white p-6 flex flex-col justify-between min-h-[15rem]">
      <span
        class="whitespace-nowrap bg-primary w-16 px-3 py-1.5 text-xs font-medium text-accent"
      >
        Popular
      </span>

      <h3 class="mt-4 text-lg font-medium text-gray-900 line-clamp-2">{{ producto.title }}</h3>

      <p class="mt-1.5 text-sm text-gray-700">${{ producto.price }}</p>

      <!-- <form class="mt-4">
        <button
          class="block text-accent w-full rounded bg-primary p-4 text-sm font-medium transition hover:scale-105"
        >
          Add to Cart
        </button>
      </form> -->
    </div>
  </RouterLink>
</template>
<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
  }
}
</script>
