import project from "./baseURL";

export const requestStudentProjects = () => {
    return project.get("/studentProject").then((res) => {
        return res.data;
    });
}

export const saveStudentProject = (postData) => project.post('/studentProject', postData, {'Content-type': 'application/json'}).then((res) => {
    return res.data;
});
