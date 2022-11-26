import project from "./baseURL";

export const requestApplications = () => {
    return project.get("/applications").then((res) => {
        return res.data;
    });
}

export const saveStudentApplication = (postData) => project.post('/applications', postData).then((res) => {
    return res.data;
});

export const getStudentApplication = (studentId) => {
    project.get(`/applications/student/${studentId}`).then((res) => {
        return res.data;
    })
}