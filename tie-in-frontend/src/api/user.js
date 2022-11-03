import project from "./baseURL";

export const requestUser = () => {
    return project.get("/users").then((res) => {
        return res.data;
    });
}

export const addUser = (postData) => { project.post('/users', postData,).then((res) => {
    return res.data;
});}