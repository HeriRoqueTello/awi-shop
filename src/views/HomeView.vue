
<template>
  <Navbar />
  <main id="MainContent" class="md:p-4">
    <div class="flex flex-col mt-20">
      <h4 class="text-4xl text-text uppercase font-semibold">Populares</h4>
      <div :class="`${!loading ? 'h-[15rem] flex justify-center items-center' : 'flex flex-col md:flex-row md:overflow-x-scroll lg:overflow-x-hidden gap-4 px-6 md:px-16 py-6'}`">
        <Loader v-if="!loading" />
        <Card v-else v-for="producto in productos" :producto="producto" :key="producto.id" />
      </div>
    </div>
    <div class="grid md:grid-cols-2 mt-16">
      <div class="bg-secondary hidden md:block"></div>
      <div>
        <img src="https://static.wixstatic.com/media/29114a8fc6c5427abac0869617d2c0f5.jpg/v1/fill/w_921,h_700,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/29114a8fc6c5427abac0869617d2c0f5.jpg" alt="">
      </div>
    </div>
    <div>
      <Register />
    </div>
    <div class="space-y-8 text-center my-16">
      <h2 class="font-poppins font-semibold text-4xl">LLÁMANOS</h2>
      <p>Av. la Marina, San Miguel, Perú</p>
      <a href="mailto:info@nawishop.com.pe">info@nawishop.com.pe</a>
      <p class="text-lg">511-6060</p>
    </div>
  </main>
  <FooterComponent />
</template>

<script>
import Navbar from '@/components/general/Navbar.vue'
import FooterComponent from '@/components/general/Footer.vue'
import Loader from '@/components/general/Loader.vue'
import Card from '@/components/general/Card.vue'
import productsApi from '@/api/productsApi';

export default{
  data(){
    return {
      productos: null,
      loading: false
    }
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    async getProducts() {
      const { data } = await productsApi.get()
      console.log(data);
      if(data.length < 5){
        this.productos = data
      } else {
        this.productos = this.shuffle(data).slice(1,5)
      }
      this.loading = true
    }
  },
  created(){
    this.getProducts()
  },
  components: {
    Navbar,
    Card,
    FooterComponent,
    Loader
  }
}
</script>