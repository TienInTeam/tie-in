import { ReactComponent as Email } from "../assets/icons/others/email.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/others/linkedin.svg";

const ContactProfile = ({
  name,
  titleOne,
  titleTwo,
  linkedIn,
  email,
  photo,
}) => {
  return (
    <div className={"contact-profile"}>
      <div className="profile-photo-name-wrapper">
        <img src={photo} alt={"Team member"} />
        <h3>{name}</h3>
      </div>
      <div className="profile-title-wrapper">
        <p>{titleOne}</p>
        {titleTwo != undefined && <p>{titleTwo}</p>}
      </div>
      <div className="profile-linkedin-wrapper">
        <LinkedIn />
        <a href={""}>{linkedIn}</a>
      </div>
      <div className="profile-email-wrapper">
        <Email />
        <a href={`mailto: ${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default ContactProfile;
