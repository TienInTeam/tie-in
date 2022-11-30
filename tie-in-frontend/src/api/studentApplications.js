import project from "./baseURL";

export const requestApplications = () => {
    return project.get("/applications").then((res) => {
        return res.data;
    });
}

export const saveStudentApplication = (postData) => project.post('/applications', postData).then((res) => {
    return res.data;
});

export const getStudentApplication = (studentId) => {
    return project.get(`/applications/student/${studentId}`).then((res) => {
        return res.data;
    });
 }

export const updateApplicationStatus = (id) => {
    return project.patch(`/applications/${id}?status=Closed`).then((res) => {
        return res.data;
    });
}


export const getBusinessApplication = (businessId) => {
    return project.get(`/applications/business/${businessId}`).then((res) => {
        return res.data;
    })
}