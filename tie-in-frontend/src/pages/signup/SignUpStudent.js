import { useMutation } from "@tanstack/react-query";
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

import { addStudent } from "../../api/student";
import { addUser } from "../../api/user";
import { signUp } from '../../auth/Authorization';
import Button from "../../components/Button";
import InputType from "../../components/InputType";
import { isEmailValid } from "../../utils/email";
import validateTextInput from "../../utils/validateTextInput";

const SignUpStudent = () => {
    const userType = "student";
    const uid = sessionStorage.getItem("userId");
    const navigate = useNavigate();

    const saveUser = useMutation(["user"], () => addUser({
        uid: uid,
        email: email,
        type: userType,
    }),{
        enabled: !!uid,
        onError: (error) => {
            alert(error.message);
        }
    });

    const saveStudent = useMutation(["student"], () => addStudent({
            email: email,
            first_name: firstName,
            last_name: lastName,
            institution: institution,
            linkedIn_url: linkedInURL,
            portfolio_url: websiteURL,
            location: location,
        }),
        {
            onError: (error) => {
                alert(error.message);
            }
        });

    const [firstName, setFirstName] = useState("test");
    const [lastName, setLastName] = useState("test");
    const [email, setEmail] = useState("");
    const [institution, setInstitution] = useState("test");
    const [websiteURL, setWebsiteURL] = useState("https://test.com");
    const [linkedInURL, setLinkedInURL] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("testtest");
    const [confirmPassword, setConfirmPassword] = useState("testtest");
    const [termsCondition, setTermsCondition] = useState(false);

    const formValidation = () => {
        if (!validateTextInput(firstName)) {
            alert("First name is required.");
            return false;
        } else if (!validateTextInput(lastName)) {
            alert("Last Name is required.");
            return false;
        } else if (!isEmailValid(email) || !email || email === "") {
            alert("Email is required.")
            return false;
        } else if (!validateTextInput(institution)) {
            alert("Institution is required");
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
            await signUp(email, password);
            saveStudent.mutate();
            saveUser.mutate();
            sessionStorage.clear();
            navigate("/login");
        } else
            alert("Sign up failed! Please try again later.")
    }

    return (
        <div className='signup'>
            <h2>Sign Up</h2>
            <form name='registration_form' onSubmit={onSubmit}>
                <InputType
                    type={"text"}
                    placeHolder={"Enter your first name"}
                    label={"First Name (required)"}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter your last name"}
                    label={"Last Name (required)"}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
                <InputType
                    placeHolder={"Enter a valid email"}
                    label={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                    type={"text"}
                    value={email}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Select your institution"}
                    label={"Please select your academic institution (required)"}
                    onChange={(e) => setInstitution(e.target.value)}
                    value={institution}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Please enter your location"}
                    label={"Location (optional)"}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter your portfolio URL"}
                    label={"Website Url (optional)"}
                    onChange={(e) => setWebsiteURL(e.target.value)}
                />
                <InputType
                    type={"text"}
                    placeHolder={"Enter your LinkedIn / Github URL (optional)"}
                    label={"LinkedIn / Github URL (optional)"}
                    onChange={(e) => setLinkedInURL(e.target.value)}
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
                <Button label={"Sign Up"} variant={"primary"} onClick={onSubmit} />
            </form>
        </div>
    );
}

export default SignUpStudent;
