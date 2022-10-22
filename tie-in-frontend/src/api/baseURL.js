import axios from "axios";

const project = axios.create({
    baseURL: "http://localhost:8000"
});

export default project;
