import axios from "axios";

//Will create a new instance of axios
export const client = axios.create({
    baseURL: "http://localhost:9001/",
    // After this time, the request cancels itself
    timeout: 1000,
})