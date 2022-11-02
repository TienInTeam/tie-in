import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProject").then((res) => {
        return res.data;
    });
}

export const saveBusinessProjects = (postData) => project.post('/businessProject', postData, { 'Content-type': 'application/json' }).then((res) => {
    return res.data;
});
