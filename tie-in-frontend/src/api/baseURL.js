import axios from "axios";

const project = axios.create({
   baseURL: "http://localhost:3001"
    // baseURL: "https://tie-in-dev.up.railway.app"
    // baseURL:"https://tie-in-render.onrender.com"
});

export default project;
