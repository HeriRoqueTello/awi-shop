<template>
  <Navbar />
  <section id="MainContent">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Subcategoria {{ path }}
        </h2>

        <p v-if="vacio" class="max-w-md mx-auto mt-4 min-h-[calc(100vh-592px)] text-gray-500">
          No hay productos disponibles
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
import productsApi from '@/api/productsApi';

export default{
  data(){
    return {
      productos: null,
      loading: false,
      path: null,
      vacio: false,
    }
  },
  methods: {
    async getProducts() {
      const { data } = await productsApi.get(``, {
        params: {
          subcategory: this.path
        }
      })
      this.productos = data
      this.loading = true
      if(this.productos.length === 0){
        this.vacio = true
      }
    }
  },
  created(){
    this.path = this.$route.params.name;
    this.getProducts()
  },
  mounted(){
    console.log(this.$route.params.name);
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