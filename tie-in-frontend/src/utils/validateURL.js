export const isURLValid = (websiteURL) => {
    const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    return re.test(websiteURL);
};

//Reference https://www.regextester.com/94502
