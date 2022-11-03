import {useMutation} from "@tanstack/react-query";
import React, {useState} from "react";

import {addBusiness} from "../../api/business";
import {addUser} from "../../api/user";
import {signUp} from "../../auth/Authorization";
import Button from "../../components/Button";
import InputType from "../../components/InputType";
import {isEmailValid} from "../../utils/email";
import validateTextInput from "../../utils/validateTextInput";

const SignUpBusiness = () => {
    const userType = "business";
    const saveBusiness = useMutation(['business'], () => addBusiness({
        uid: sessionStorage.getItem("userId"),
        name: businessName,
        email: businessEmail,
        description: description,
        websiteUrl: websiteUrl,
        linkedInUrl: linkedInUrl,
        location: businessLocation,
    }));

    const saveUser = useMutation(["user"], () => addUser({
        uid: sessionStorage.getItem("userId"),
        email: businessEmail,
        type: userType,
    }))

    const [businessName, setBusinessName] = useState("");
    const [businessLocation, setBusinessLocation] = useState("");
    const [description, setDescription] = useState("");
    const [businessEmail, setBusinessEmail] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [linkedInUrl, setLinkedInUrl] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsCondition, setTermsCondition] = useState(false);

    const formValidation = () => {
        if (!validateTextInput(businessName)) {
            alert("Company name is required.");
            return false;
        } else if (!validateTextInput(businessLocation)) {
            alert("Last Name is required.");
            return false;
        } else if (!isEmailValid(businessEmail) || !businessEmail || businessEmail === "") {
            alert("Email is required.")
            return false;
        } else if (!validateTextInput(description)) {
            alert("Description is required");
            return false;
        } else if (!password || password === "") {
            alert("Password is required and should not be empty!");
            return false;
        } else if (password !== confirmPassword) {
            alert("Password and confirm password should match.");
            return false;
        } else if (!termsCondition) {
            alert("You need to accept the Terms and Conditions to register!")
        } else {
            return true;
        }
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (formValidation()) {
            await signUp(businessEmail, password)
            saveUser.mutate();
            await saveBusiness.mutate();
        } else
            alert("Something went wrong! Please try again.")
    }

    return (
        <div className='signup-business'>
            <h2>Sign Up</h2>
            <form name='registration_form' onSubmit={onSubmit}>
                <InputType
                    type={"text"}
                    placeHolder={"Enter your company name"}
                    label={"Company Name (required)"}
                    onChange={(e) => setBusinessName(e.target.value)}
                    value={businessName}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter company location"}
                    label={"Company Location (required)"}
                    onChange={(e) => setBusinessLocation(e.target.value)}
                    value={businessLocation}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter your company description"}
                    label={"Company Description (required)"}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <InputType
                    placeHolder={"Enter a valid email"}
                    label={"Email"}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    type={"text"}
                    value={businessEmail}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter company website URL"}
                    label={"Company Website Url (optional)"}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    value={websiteUrl}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter company linkedIn URL"}
                    label={"LinkedIn Url (optional)"}
                    onChange={(e) => setLinkedInUrl(e.target.value)}
                    value={linkedInUrl}
                />
                <InputType
                    placeHolder={"Password"}
                    label={"Password"}
                    onChange={(e) => setPassword(e.target.value)}
                    type={"text"}
                    value={password}
                />
                <InputType
                    placeHolder={"Confirm Password"}
                    label={"Confirm Password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={"text"}
                    value={confirmPassword}
                />
                <InputType
                    type={"checkbox"}
                    label={"I agree the Terms & Conditions of Tie-in"}
                    onChange={() => setTermsCondition(true)}
                />
                <Button label={"Sign Up"} variant={"primary"} onClick={onSubmit}/>
            </form>
        </div>
    );
}

export default SignUpBusiness;
