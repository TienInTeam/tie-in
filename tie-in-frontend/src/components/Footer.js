import React from 'react';
import { useState, useEffect } from "react";
import { ReactComponent as Logo } from '../assets/tie-in-logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/navigation/profile-icon.svg';
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate()
    const backHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className="site-footer-main">
                <div className='site-footer-logo'>
                    <Logo onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} />
                </div>
                <div className="site-footer-copyright">
                    <span className="copyright">&copy;</span> <p>2022 Tie-in</p>
                </div>
                <div className="site-footer-nav">
                    <ul>
                        <li><a href="#aboutUs" onClick={backHome}>About Us</a></li>
                        <li><a href="#contactUs" onClick={backHome}>Contact Us</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
