import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProject").then((res) => {
        return res.data.result;
    });
}

export const saveBusinessProject = (postData) => project.post('/businessProject', postData, {'Content-type': 'application/json'}).then((res) => {
    return res.data;
});