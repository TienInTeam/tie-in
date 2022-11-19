import project from "./baseURL";

export const getBusinesses = () => project.get('/business').then((res) => {
    if(!res.data) {
        throw new Error("try again");
    }
    return res.data;
})

export const addBusiness = (postData) => project.post("/business", postData).then(res => {
    return res.data;
});

export const getBusinessByID = (id) => {
    return project.get(`/business/${id}`).then((res) => {
        return res.data;
    });
}
