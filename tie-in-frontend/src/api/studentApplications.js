import project from "./baseURL";

export const requestApplicationStatuses = () => {
    return project.get("/applications").then((res) => {
        return res.data;
    });
}

export const saveApplicationStatuses = (postData) => project.post('/applications', postData, { 'Content-type': 'application/json' }).then((res) => {
    return res.data;
});
