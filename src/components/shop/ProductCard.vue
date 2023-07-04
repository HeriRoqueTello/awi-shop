<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <li>
    <RouterLink :to="`/producto/${producto.id}`" class="block overflow-hidden group">
      <img
        :src="producto.image"
        :alt="producto.title"
        class="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />
  
      <div class="relative pt-3 bg-white">
        <h3
          class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
          {{ producto.title }}
        </h3>
  
        <p class="mt-2">
          <span class="sr-only"> Regular Price </span>
  
          <span class="tracking-wider text-gray-900">S/ {{ producto.price }} </span>
        </p>
      </div>
    </RouterLink>
  </li>
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
