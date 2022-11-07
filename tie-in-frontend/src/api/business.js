import project from "./baseURL";

export const getBusinesses = () => project.get('/business').then((res) => {
    return res.data;
})

export const addBusiness = (postData) => project.post("/business", postData).then(res => {
    return res.data;
});

export const getBusinessLogoByID = (id) => {
    console.log(id);
    return project.get(`/business/${id}`).then((res) => {
        return res.data;
    });
}
