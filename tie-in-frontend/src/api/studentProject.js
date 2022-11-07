import project from "./baseURL";

export const requestStudentProjects = () => {
    return project.get("/studentProjects").then((res) => {
        return res.data;
    });
}

export const saveStudentProject = (postData) => project.post('/students/projects', postData).then((res) => {
    return res.data;
});

