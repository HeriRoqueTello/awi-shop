import axios from 'axios'

const productosApi = axios.create({
  baseURL: 'https://pachatube-db.onrender.com/productos'
})

export default productosApi