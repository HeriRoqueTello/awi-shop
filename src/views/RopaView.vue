<template>
  <Navbar />
  <section id="MainContent">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div class="text-center">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Coleccion de Ropa
        </h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </div>
      
      <div class="mt-4 text-right">
        <label for="SortBy" class="sr-only">SortBy</label>

        <select  @change="filterProducts" v-model="category" id="SortBy" class="h-10 rounded border px-2 border-gray-300 text-sm">
          <option value="todos" selected>Sort By</option>
          <option value="men's clothing">Ropa para hombre</option>
          <option value="women's clothing">Ropa para mujer</option>
        </select>
      </div>

      <ul :class="`${!loading ? 'h-screen flex justify-center items-center' : 'grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4'}`" >
        <Loader v-if="!loading" />
        <ProductCard v-else v-for="producto in productos" :producto="producto" :key="producto.id" />
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
      category: 'todos',
      loading: false
    }
  },
  methods: {
    async getProducts() {
      this.loading = false
      const { data } = await fakeApi.get(`/category/men's clothing`)
      const { data: data2 } = await fakeApi.get(`/category/women's clothing`)
      const shuffledData = [];
  
      const maxLength = Math.max(data.length, data2.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < data.length) {
          shuffledData.push(data[i]);
        }
        if (i < data2.length) {
          shuffledData.push(data2[i]);
        }
      }
      this.productos = shuffledData
      this.loading = true
    },
    filterProducts() {
      if (this.category === "men's clothing") {
        this.getMenProducts();
      } else if (this.category === "women's clothing") {
        this.getWomanProducts();
      } else {
        this.getProducts();
      }
    },
    async getWomanProducts() {
      this.loading = false
      const { data } = await fakeApi.get(`/category/women's clothing`)
      this.productos = data
      this.loading = true
    },
    async getMenProducts() {
      this.loading = false
      const { data } = await fakeApi.get(`/category/men's clothing`)
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