import project from "./baseURL";

export const requestUser = (uid) => {
    return project.get(`/users/${uid}`).then((res) => {
        if(!res.data) {
            throw new Error("try again");
        } return res.data;
    });
}


export const addUser = (postData) => { project.post('/users', postData,).then((res) => {
    return res.data;
});}
