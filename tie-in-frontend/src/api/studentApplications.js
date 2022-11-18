import project from "./baseURL";

//to be removed
export const requestApplicationStatuses = () => {
    return project.get("/applicationStatus").then((res) => {
        return res.data;
    });
}

export const requestApplications = () => {
    return project.get("/applications").then((res) => {
        return res.data;
    });
}

export const saveStudentApplication = (postData) => project.post('/applications', postData, { 'Content-type': 'application/json' }).then((res) => {
    return res.data;
});
