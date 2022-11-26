const validateContact = (input) => {
    let regInput = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!regInput.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

export default validateContact;

// ref https://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript