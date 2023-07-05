
<template>
  <Navbar />
  <section :class="`${!loading && 'h-screen flex justify-center items-center'}`" id="MainContent">
    <Loader v-if="!loading" />
    <div v-else class="relative mx-auto max-w-screen-xl px-4 py-8">
      <div>
        <h1 class="text-2xl font-bold lg:text-3xl">{{ producto.title }}</h1>

        <p class="mt-1 text-sm text-gray-500">SKU: {{ producto.id }}</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-4 lg:items-start">
        <div class="lg:col-span-3">
          <div class="relative mt-4">
            <img
              alt="Tee"
              :src="producto.image"
              class="h-72 w-full rounded-xl object-contain lg:h-[540px]"
            />

          </div>

        </div>

        <div class="lg:sticky lg:top-0">
          <form class="space-y-4 lg:pt-8">
            <!-- <fieldset>
              <legend class="text-lg font-bold">Color</legend>

              <div class="mt-2 flex flex-wrap gap-1">
                <label for="color_green" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_green"
                    name="color"
                    class="peer sr-only"
                    checked
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_blue" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_blue"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_pink" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_pink"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_red" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_red"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>

                <label for="color_indigo" class="cursor-pointer">
                  <input
                    type="radio"
                    id="color_indigo"
                    name="color"
                    class="peer sr-only"
                  />

                  <span
                    class="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                  ></span>
                </label>
              </div>
            </fieldset> -->
            <div>
              <p class="text-xl">Stock: <span class="text-xl font-bold">{{ producto.count }}</span> </p>
              
            </div>
            <div>
              <p class="text-xl font-bold">S/ {{ producto.price }}</p>
            </div>

            <button
              type="submit"
              class="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
            >
              Add to cart
            </button>

            <button
              type="button"
              class="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
            >
              Notify when on sale
            </button>
          </form>
        </div>

        <div class="lg:col-span-3">
          <div class="prose max-w-none">
            <p>
              {{ producto.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import Navbar from '@/components/general/Navbar.vue'
import FooterComponent from '@/components/general/Footer.vue'
import Loader from '@/components/general/Loader.vue'
import productsApi from '@/api/productsApi';

export default{
  data(){
    return {
      producto: null,
      loading: false
    }
  },
  methods: {
    async getProduct() {
      const { data } = await productsApi.get(`/${this.$route.params.id}`)
      this.producto = data
      this.loading = true
    }
  },
  created(){
    this.getProduct()
  },
  components: {
    Navbar,
    FooterComponent,
    Loader
  }
}
</script>