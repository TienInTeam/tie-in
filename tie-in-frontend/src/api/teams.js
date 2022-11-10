import project from "./baseURL";

export const requestTeams = () => {
    return project.get("/teams").then((res) => {
        return res.data;
    });
}

export const addTeam = (postData) => project.post('/teams', postData).then((res) => {
    return res.data;
});
