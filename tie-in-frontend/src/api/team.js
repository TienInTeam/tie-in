import project from "./baseURL";

export const getStudentTeam = (studentId) => {
    return project.get(`/teams/all/${studentId}`).then((res) => {
        return res.data
    })
}