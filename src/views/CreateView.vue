<template>
  <div class="grid grid-cols-1 p-4 justify-items-center content-center">
    <h2 class="text-3xl font-bold mb-4 text-left">Agregar producto</h2>
    <hr class="text-white border-t-2 w-full">
    <form @submit.prevent="enviarDatos" class="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">
      <input class="py-3 px-4 border-cyan-400 text-black" type="text" v-model="title" placeholder="Nombre del producto" required>
      <input class="py-3 px-4 border-cyan-400 text-black" type="number" v-model="price" placeholder="Precio" required>
      <textarea class="md:col-span-2 p-4 resize-none text-black" v-model="description" cols="30" rows="10" placeholder="Descripcion del producto" required></textarea>
      <button type="button" @click="open" id="upload_widget" class="py-3 px-4 border bg-cyan-300 border-cyan-900 text-black">
        Subir imagen
      </button>
      <input type="hidden" name="src" id="imgsrc">
      <input class="py-3 px-4 border-cyan-400 text-black" type="number" v-model="count" placeholder="Productos disponibles" required>
      <select @change="loadSubcategoria" class="py-3 px-4 border-cyan-400 capitalize text-black" v-model="category" name="category" id="category">
        <option value="no-select" disabled>Categoria</option>
        <option class="capitalize" v-for="categoria in categorias" :key="categoria.categoria" :value="categoria.categoria">{{ categoria.categoria }}</option>
      </select>
      <select class="py-3 px-4 capitalize border-cyan-400 text-black" v-model="subcategory" name="category" id="category">
        <option value="no-select" disabled>Sub Categoria</option>
        <option class="capitalize" v-for="subcategoria in subcategorias" :key="subcategoria" :value="subcategoria">{{ subcategoria }}</option>
      </select>
      <div class="md:col-span-2 flex flex-col gap-2 md:gap-0 md:flex-row justify-evenly">
          <button type="submit" class="px-8 py-2 bg-[#FF5252] text-white">Agregar</button>
          <RouterLink to="/" class="">
            <button type="button" class="w-full px-8 py-2 bg-gray-300 text-black">Volver</button>
          </RouterLink>
      </div>
    </form>
    <div>
      
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  const cloudName = "dlsqr4a8l"; // replace with your own cloud name
  const uploadPreset = "nawi-shop"; // replace with your own upload preset

  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
      // cropping: true, //add a cropping step
      // showAdvancedOptions: true,  //add advanced options (public_id and tag)
      // sources: [ "local", "url"], // restrict the upload sources to URL and local files
      multiple: false,  //restrict upload to a single file
      // folder: "user_images", //upload files to the specified folder
      // tags: ["users", "profile"], //add the given tags to the uploaded files
      // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
      clientAllowedFormats: ["png", "jpg", "jfif", "gif", "jpgeg", "webp"], //restrict uploading to image files only
      maxImageFileSize: 10000000,  //restrict file size to less than 2MB
      // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
      // theme: "purple", //change to a purple theme
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document.getElementById('imgsrc').value = result.info.secure_url
        document.getElementById("upload_widget").disabled = true

        // document
        //   .getElementById("uploadedimage")
        //   .setAttribute("src", result.info.secure_url);
      }
    }
  );
  export default {
    components: {
      // VueFileBase64
    },
    data() {
      return {
        title: null,
        price: null,
        description: null,
        category: "no-select",
        subcategory: "no-select",
        image: null,
        count: null,
        categorias: null,
        subcategorias: null,
        open: function () {
          myWidget.open();
        },
      };
    },
    methods: {
      async getCategories() {
        const { data } = await axios.get(`https://pachatube-db.onrender.com/categorias`)
        // console.log(data);
        this.categorias = data
      },
      loadSubcategoria() {
        switch (this.category) {
          case 'mujer':
            this.subcategorias = this.categorias[0].subcategorias
            break;
          case 'varones':
            this.subcategorias = this.categorias[1].subcategorias
            break;
          case 'ninos':
            this.subcategorias = this.categorias[2].subcategorias
            break;
          case 'mascota':
            this.subcategorias = this.categorias[3].subcategorias
            break;
          case 'joyas-y-accesorios':
            this.subcategorias = this.categorias[4].subcategorias
            break;
          case 'adornos':
            this.subcategorias = this.categorias[5].subcategorias
            break;
          case 'salud-y-belleza':
            this.subcategorias = this.categorias[6].subcategorias
            break;
          default:
            break;
        }

        // console.log(this.subcategorias);        
      },
      enviarDatos() {
        this.image = document.getElementById("imgsrc").value
        const data = {
          title: this.title,
          price: this.price,
          description: this.description,
          category: this.category,
          subcategory: this.subcategory,
          image: this.image,
          count: this.count
        };
        console.log(data);
        try {
          axios.post(import.meta.env.VITE_URL_API, data)
            .then(response => {
              // La solicitud fue exitosa, puedes manejar la respuesta aquí
              console.log(response.data);
              this.$router.push('/')
            })
            .catch(error => {
              // Ocurrió un error durante la solicitud, puedes manejar el error aquí
              console.error(error);
            });
        } catch (error) {
            this.$router.push('/')
            console.log('No hay nada que hacer aquí')
        }
      }
    },
    created(){
      this.getCategories()
    }   
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
