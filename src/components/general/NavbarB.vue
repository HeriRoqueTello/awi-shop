<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="h-16 flex flex-row bg-secondary justify-center gap-4 items-center font-semibold font-roboto">
      <RouterLink :class="`${path === 'home' && 'text-primary'} hover:text-primary transition duration-300 ease-in-out`" to="/">Inicio</RouterLink>
      <RouterLink :class="`${path === 'electronicos' && 'text-primary'} hover:text-primary transition duration-300 ease-in-out`" to="/electronicos">Electronicos</RouterLink>
      <RouterLink :class="`${path === 'ropa' && 'text-primary'} hover:text-primary transition duration-300 ease-in-out`" to="/ropa">Ropa</RouterLink>
      <RouterLink :class="`${path === 'joyeria' && 'text-primary'} hover:text-primary transition duration-300 ease-in-out`" to="/joyeria">Joyerias</RouterLink>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      path: this.$route.name
    }
  }
}
</script>
<style>
  
</style>