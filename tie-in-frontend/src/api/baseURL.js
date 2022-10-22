import axios from "axios";

const project = axios.create({
    baseURL: "http://localhost:3001"
});

export default project;
