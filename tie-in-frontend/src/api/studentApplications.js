import project from "./baseURL";

export const requestApplicationStatuses = () => {
    return project.get("/applications").then((res) => {
        if(!res.data) {
            throw new Error("try again");
        } return res.data;
    });
}

export const saveApplicationStatuses = (postData) => project.post('/applications', postData).then((res) => {
    return res.data;
});
