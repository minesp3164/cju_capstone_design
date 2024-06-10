import axios from "axios";
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

const axiosServer = axios.create({
  baseURL: 'https://minesp3164.iptime.org:5000',
  httpsAgent : agent
})

export default axiosServer;
