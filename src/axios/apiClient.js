import axios from "axios";


const apiClient = axios.create({
    baseURL:"https://668cb756099db4c579f00b64.mockapi.io",
    headers:{
        "Content-Type": "appLication/json",

    },
});

export default apiClient;