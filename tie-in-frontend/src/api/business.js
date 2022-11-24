import project from "./baseURL";

export const getBusinesses = () => project.get('/business').then((res) => {
    return res.data;
})

export const addBusiness = (postData) => project.post("/business", postData).then(res => {
    return res.data;
});

export const getBusinessByEmail = (email) => {
    return project.get(`/business/${email}`).then((res) => {
        return res.data;
    })
}
