import axios from "axios";


const axiosServer = axios.create({
  baseURL: 'http://minesp3164.iptime.org:5000/',
})

export default axiosServer;