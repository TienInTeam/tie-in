import project from "./baseURL";

export const requestTeams = (uid) => {
    return project.get(`/teams/${uid}`).then((res) => {
        return res.data;
    });
}

export const createTeams = (postData) => {
    project.post('/teams', postData,).then((res) => {
    return res.data;
});}


export const getStudentTeamsByStudentId = (studentID) => {
    return project.get(`/teams?student_id=${studentID}`).then((res) => {
    return res.data;
});}
