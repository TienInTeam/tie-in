//function to validate the given input is text only and does not include invalid characters
const validateTextInput = (input) => {
    let regInput = /^[A-Za-z\s]*$/;
    if (!regInput.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

export default validateTextInput;
//Reference https://codingbeautydev.com/blog/javascript-check-if-string-contains-only-letters-and-spaces/
