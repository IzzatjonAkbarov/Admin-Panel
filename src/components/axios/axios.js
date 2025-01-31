let baseurl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

export let axiosForadmin = axios.create({ baseURL: baseurl });
