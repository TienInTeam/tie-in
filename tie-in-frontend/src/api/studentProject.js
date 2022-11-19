import project from "./baseURL";

export const requestStudentProjects = () => {
    return project.get("/studentProjects").then((res) => {
        if(!res.data) {
            throw new Error("try again");
        } return res.data;
    });
}

export const saveStudentProject = (postData) => project.post('/studentProjects', postData).then((res) => {
    return res.data;
});

export const requestStudentProject = (id) => project.get(`/studentProjects/${id}`).then((res) => {
    return res.data;
});
