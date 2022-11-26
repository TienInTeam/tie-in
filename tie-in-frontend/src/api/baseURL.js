import axios from "axios";

const project = axios.create({
 // baseURL: "http://localhost:3001"
    baseURL: "https://tie-in-test-env.onrender.com"
});

export default project;
