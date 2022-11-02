import project from "./baseURL";

export const requestApplicationStatuses = () => {
    return project.get("/applicationStatus").then((res) => {
        return res.data;
    });
}

export const saveApplicationStatuses = (postData) => project.post('/applicationStatus', postData, { 'Content-type': 'application/json' }).then((res) => {
    return res.data;
});
