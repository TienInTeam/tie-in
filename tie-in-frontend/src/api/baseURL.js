import axios from "axios";

const project = axios.create({
    baseURL: "http://localhost:3000"
});

export default project;
