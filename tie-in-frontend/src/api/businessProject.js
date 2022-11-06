import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProject").then((res) => {
        return res.data;
    });
}

export const saveBusinessProject = (postData) => project.post('/businessProject', postData).then((res) => {
    return res.data;
});


export const requestBusinessProjectsByID = (id) => {
    console.log(id);
    return project.get(`/businessProject/${id}`).then((res) => {
        return res.data;
    });
}
