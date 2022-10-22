import axios from "axios";

const project = axios.create({
    baseURL: "http://localhost:8001"
});

export default project;
