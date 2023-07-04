import axios from "axios";

const fakeApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
})

// const apiKey = `a384e1903609b80f3d18011b58de58a8`

export default fakeApi