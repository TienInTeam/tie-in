import project from "./baseURL";

export const requestStudents = () => {
    return project.get("/students").then((res) => {
        return res.data;
    });
}

export const addStudent = (postData) => project.post('/students', postData).then((res) => {
    return res.data;
});


export const getStudentByEmail = (email) => {
    return project.get(`/students/${email}`).then((res) => {
        return res.data;
    })
}
