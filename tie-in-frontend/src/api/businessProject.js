import project from "./baseURL";

export const requestBusinessProjects = () => {
    return project.get("/businessProjects").then((res) => {
        console.log("HERe"+ JSON.stringify(res))
        return res.data;
    });
}

export const saveBusinessProject = (postData) => project.post('/businessProjects', postData).then((res) => {
    return res.data;
});
