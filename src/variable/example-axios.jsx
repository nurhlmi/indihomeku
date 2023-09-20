import axios from "axios";

const baseURL = "https://paket.indihomeku.com/";

axios.defaults.baseURL = baseURL;
axios.interceptors.request.use((config) => {
   const token = localStorage.getItem("token");
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Usertimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   }
   return config;
});

export default axios;
