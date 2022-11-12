import axios from "axios";

const project = axios.create({
    //baseURL: "http://localhost:3001"
    baseURL: "https://tie-in-dev.up.railway.app"
    //baseURL: "http://localhost:2000"
});

export default project;
