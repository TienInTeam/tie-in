import {ReactComponent as Email} from "../assets/icons/others/email.svg";
import {ReactComponent as LinkedIn} from "../assets/icons/others/linkedin.svg";

const ContactProfile = ({name, title, linkedIn, email, photo}) => {
    return (
        <div className={"contact-profile"}>
            <div className={"person-wrapper"}>
                <img src={photo} alt={"Photo of the team member"}/>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
            <div className={"email-wrapper"}>
                <LinkedIn/>
                <a href={""}>{linkedIn}</a>
            </div>
            <div className={"email-wrapper"}>
                <Email/>
                <a href={"mailto: fjoca00@mylangara.ca"}>{email}</a>
            </div>
        </div>
    );
}

export default ContactProfile;
