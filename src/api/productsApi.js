import axios from 'axios'

const productosApi = axios.create({
  baseURL: 'https://nawi-shop-db.onrender.com/productos'
})

export default productosApi