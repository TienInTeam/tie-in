import project from "./baseURL";

export const requestStudentProjects = () => {
    return project.get("/studentProject").then((res) => {
        return res.data;
    });
}

export const saveStudentProject = (postData) => project.post('/studentProject', postData).then((res) => {
    return res.data;
});

export const requestStudentProject = (id) => project.get(`/studentProject/${id}`).then((res) => {
    return res.data;
});

