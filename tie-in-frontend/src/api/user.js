import project from "./baseURL";

export const requestUser = (uid) => {
    return project.get(`/users/${uid}`).then((res) => {
        return res.data;
    });
}


export const addUser = (postData) => { project.post('/users', postData,).then((res) => {
    return res.data;
});}
