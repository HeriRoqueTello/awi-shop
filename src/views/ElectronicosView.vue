<template>
  <Navbar />
  <section id="MainContent">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Coleccion de electronicos
        </h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>

      <ul :class="`${!loading ? 'h-screen flex justify-center items-center' : 'grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4'}`" >
        <Loader v-if="!loading" />
        <ProductCard v-for="producto in productos" :producto="producto" :key="producto.id" />
      </ul>
    </div>
  </section>
  <FooterComponent />
</template>
<script>
import Navbar from '@/components/general/Navbar.vue'
import FooterComponent from '@/components/general/Footer.vue'
import ProductCard from '@/components/shop/ProductCard.vue'
import Loader from '@/components/general/Loader.vue'
import fakeApi from '@/api/fakeApi';

export default{
  data(){
    return {
      productos: null,
      loading: false
    }
  },
  methods: {
    async getProducts() {
      const { data } = await fakeApi.get(`/category/electronics`)
      this.productos = data
      this.loading = true
    }
  },
  created(){
    this.getProducts()
  },
  components: {
    Navbar,
    FooterComponent,
    ProductCard,
    Loader
  }
}
</script>
<style>
  
</style>