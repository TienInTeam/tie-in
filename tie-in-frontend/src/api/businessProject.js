import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProjects").then((res) => {
        if(!res.data) {
            throw new Error("try again");
        }
        return res.data;
    });
}

export const saveBusinessProject = (postData) => project.post('/businessProjects', postData).then((res) => {
    return res.data;
});


export const requestBusinessProjectsByID = (id) => {
    return project.get(`/businessProjects/${id}`).then((res) => {
        if(!res.data) {
            throw new Error("try again");
        }
        return res.data;
    });
}
export const requestBusinessProjectsByQuery = (query) => {
    return project.get(`/businessProjects/?q=${query}`).then((res) => {
        return res.data;
    });
}

