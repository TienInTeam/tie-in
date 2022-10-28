export const isURLValid = (websiteURL) => {
    let url;
    try {
      url = new URL(websiteURL);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
};

//Reference https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
