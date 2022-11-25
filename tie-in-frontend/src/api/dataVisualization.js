import project from "./baseURL";

export const requestBusinessProjectUploadTrend = () => {
    return project.get("/businessProjectTrend").then((res) => {
    })
}

export const requestStudentProjectUploadTrend = () => {
    return project.get("/studentProjectTrend").then((res) => {
        return res.data;
    })
}

export const requestStudentProjectByCategory = () => {
    return project.get("/studentProjectCategory").then((res) => {
        return res.data;
    })
}

export const requestBusinessProjectByCategory = () => {
    return project.get("/businessProjectCategory").then((res) => {
        return res.data;
    })
}