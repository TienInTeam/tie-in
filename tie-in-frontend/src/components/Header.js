import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/tie-in-logo.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/navigation/profile-icon.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/navigation/menu-icon.svg';
// import { ReactComponent as BackIcon } from '../assets/icons/navigation/back-icon.svg';
import Button from "../components/Button";
import SideMenu from "./SideMenu";

export default function Header() {
    const navigate = useNavigate();
    const userType = sessionStorage.getItem("userType");
    const isLoggedIn = sessionStorage.getItem("userLoggedIn");

    const [displayMenu, setDisplayMenu] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const uploadProject = () => {
        if (sessionStorage.getItem('userType') === 'student') {
            navigate("/uploadstudentproject");
        }
        else if (sessionStorage.getItem('userType') === 'business') {
            navigate("/uploadbusinessproject");
        }
    }
    const changeDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    }
    const changeHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
    }
    // const backClick = () => {
    //     setHamburgerMenu(false)
    // }
    const login = () => {
        navigate("/login");
    }
    const signUp = () => {
        navigate("/signuplanding");
    }
    const logout = () => {
        sessionStorage.clear();
        navigate("/home");
    }

    const onLogo = () => {
        if (isLoggedIn === "true") {
            if (userType === "business") {
                navigate("/dashboard");
            } else {
                navigate("/studentdashboard")
            }
        }
    }

    let Menu;
    const RenderLoginMenu = () => {
        return <div className="site-header-main">
            <div className="site-header-top">
                <div className="icon hamburger-menu" onClick={changeHamburgerMenu}>
                    <MenuIcon />
                </div>
                <a onClick={onLogo} className='site-logo'>
                    <Logo />
                    <h2>Tie-in</h2>
                </a>
                <div className="site-header-cta-menu">
                    <Button label={"Upload"} variant={"primary"} onClick={uploadProject} />
                    <div className="icon profile-icon" onClick={changeDisplayMenu}><ProfileIcon /></div>
                </div>
            </div>

            <div className={displayMenu ? 'top-menu show' : 'top-menu'}>
                <ul>
                    <li>
                        <p>{sessionStorage.getItem('userName')}</p>
                    </li>
                    <li><a href="#editProfile">Edit Profile</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="/" onClick={logout}>Logout</a></li>
                </ul>
            </div>
            <div className={hamburgerMenu ? "mobile-side-menu show-menu" : "mobile-side-menu"}>
                {/* <div className="icon back-icon" onClick={backClick}><BackIcon /></div> */}
                <SideMenu />
            </div>
        </div>;
    }

    const RenderLogoutMenu = () => {
        return <div className="site-header-main">
            <div className="site-header-top">
                <div className='site-logo'>
                    <Logo />
                    <h2>Tie-in</h2>
                </div>
                <div className={'site-header-menu'}>
                    <ul>
                        <li><a href="#studentTeam">Student Team</a></li>
                        <li><a href="#logout">Company</a></li>
                        <li><a href="#whyUs">Why Us</a></li>
                        <li><a href="#contactUs">Contact Us</a></li>
                    </ul>
                </div>
                <div className="site-header-buttons">
                    <Button label={"Login"} variant={"secondary"} onClick={login} />
                    <Button label={"Sign Up"} variant={"primary"} onClick={signUp} />
                </div>
            </div>
        </div>;
    }

    if (sessionStorage.getItem("userLoggedIn")) {
        Menu = RenderLoginMenu;
    } else {
        Menu = RenderLogoutMenu;
    }

    return (
        <>
            <Menu />
        </>
    )

}
