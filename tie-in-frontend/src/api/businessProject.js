import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProjects").then((res) => {
        return res.data;
    });
}

export const saveBusinessProject = (postData) => project.post('/businessProjects', postData).then((res) => {
    return res.data;
});


export const requestBusinessProjectsByID = (id) => {
    return project.get(`/businessProjects/${id}`).then((res) => {
        return res.data;
    });
}

export const updateBusinessProject = (id) => {
    return project.patch(`/businessProjects/${id}?status=Closed`).then((res) => {
        return res.data;
    });
}

