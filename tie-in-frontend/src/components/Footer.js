import React from 'react';
import { useState, useEffect } from "react";
import { ReactComponent as Logo } from '../assets/tie-in-logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/navigation/profile-icon.svg';
import Button from "../components/Button";

export default function Footer() {

    return (
        <>
            <div className="site-footer-main">
                <div className='site-footer-logo'>
                    <Logo />
                </div>
                <div className="site-footer-copyright">
                    <span className="copyright">&copy;</span> <p>2022 Tie-in</p>
                </div>
                <div className="site-footer-nav">
                    <ul>
                        <li><a href="#aboutUs">About Us</a></li>
                        <li><a href="#contactUs">Contact Us</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
