import {useNavigate} from "react-router-dom";
import Button from "../components/Button";
import ContactFrom from "../components/ContactFrom";
import ContactProfile from "../components/ContactProfile";
import HomeSection from "../components/HomeSection";

import { ReactComponent as IntroImage } from "../assets/icons/home/intro_image.svg";
import { ReactComponent as StudentImage1 } from "../assets/icons/home/student_image_1.svg";
import { ReactComponent as StudentImage2 } from "../assets/icons/home/student_image_2.svg";
import { ReactComponent as BusinessImage1 } from "../assets/icons/home/business_image_1.svg";
import { ReactComponent as BusinessImage2 } from "../assets/icons/home/business_image_2.svg";
import { ReactComponent as WhyUsImage1 } from "../assets/icons/home/why-us_image_1.svg";
import { ReactComponent as WhyUsImage2 } from "../assets/icons/home/why-us_image_2.svg";
import { ReactComponent as WhyUsImage3 } from "../assets/icons/home/why-us_image_3.svg";



import floridaProfilePic from "../assets/icons/profiles/florida_pic.png";
import diegoProfilePic from "../assets/icons/profiles/diego_pic.png";
import jasminProfilePic from "../assets/icons/profiles/jasmin_pic.png";
import winallProfilePic from "../assets/icons/profiles/winall_pic.png";
import janeProfilePic from "../assets/icons/profiles/jane_pic.png";
import javierProfilePic from "../assets/icons/profiles/javier_pic.png";
import rojinProfilePic from "../assets/icons/profiles/rojin_pic.png";
import andrewProfilePic from "../assets/icons/profiles/andrew_pic.png";

const Home = () => {
  const navigate = useNavigate();
  const onTryNowStudent = () => {
    navigate('/signup/student')
  };
  const onTryNowBusiness = () => {
    navigate('/signup/business')
  };
  const onSend = () => {};
  const onClick = () => {
    navigate('/signuplanding')
  };

  return (
    <div className="home">
      <section className="intro-section">
        <IntroImage />
        <div className="intro-text-wrapper">
          <h1>
            Projects to be sponsored, ideas to be created, Simply Tie-in.
          </h1>
          <p>
            Tie-in is a collaborated-driven responsive web platform for
            businesses to support projects and for students to work on business
            ideas.
          </p>
          <Button variant={"primary"} label={"Get Started"} onClick={onClick} />
        </div>
      </section>

      <section className="steps-section student-steps-section">
        <h2 className="steps-section-title">Student Team</h2>
        <div className={"text-info-wrapper student-wrapper-one"}>
          <HomeSection
            title={"Student Team"}
            subtitle={"How to upload your project?"}
            onTryNowClick={onTryNowStudent}
            step1={
              "Step 1: Fill in related documents and information of your project."
            }
            step2={
              "Step 2: Select your project team to include your team members."
            }
            step3={
              "Step 3: Review your project details and click “Submit” when you are finished."
            }
          />
          <StudentImage1 />
        </div>
        <div className={"text-info-wrapper student-wrapper-two"}>
          <StudentImage2 />
          <HomeSection
            subtitle={"How to apply projects from company?"}
            onTryNowClick={onTryNowBusiness}
            step1={
              "Step 1: Search for the business projects that match your interests and skillsets."
            }
            step2={
              "Step 2: Review the project details and click the “apply” button."
            }
            step3={
              "Step 3: Fill in an application form and wait for approval from the business side."
            }
          />
        </div>
      </section>

      <section className="steps-section business-steps-section">
        <h2 className="steps-section-title">Business</h2>
        <div className={"text-info-wrapper business-wrapper-one"}>
          <HomeSection
            subtitle={"How to request a project?"}
            onTryNowClick={onClick}
            step1={
              "Step 1: Fill in related documents and information of your project."
            }
            step2={
              "Step 2: Review your project details and click “Submit” when you are finished."
            }
          />
          <BusinessImage1 />
        </div>
        <div className={"text-info-wrapper business-wrapper-two"}>
          <BusinessImage2 />
          <HomeSection
            subtitle={"How to find your ideal team?"}
            onTryNowClick={onClick}
            step1={
              "Step 1: Search for student projects that match your business ambition and goal."
            }
            step2={
              "Step 2: Go through the project details to look for your match."
            }
            step3={
              "Step 3: Connect with the student team using team cotact below."
            }
          />
        </div>
      </section>

      <section className="why-us-section">
        <h2 className="why-us-title">Why Us?</h2>
        <div className="info-wrapper">
          <div className="image-text-wrapper">
            <WhyUsImage1 />
            <p>
              Business will get vertification from the academic institutions.
            </p>
          </div>
          <div className="image-text-wrapper">
            <WhyUsImage2 />
            <p>
              Students can form a team in the platform, which gives them more
              bargaining power.
            </p>
          </div>
          <div className="image-text-wrapper">
            <WhyUsImage3 />
            <p>It is interactive platform for business and student team.</p>
          </div>
        </div>
      </section>

      <section className="contact-us-section">
        <h2 className="contact-us-title">Contact Us</h2>
        <div className="profiles-wrapper">
          <ContactProfile
            photo={floridaProfilePic}
            titleOne={"Project Manager"}
            titleTwo={"Front-End Developer"}
            name={"Florida Joca"}
            email={"florida.joca@gmail.com"}
            linkedIn={"florida-joca"}
          />
          <ContactProfile
            photo={diegoProfilePic}
            titleOne={"Development Lead"}
            titleTwo={"Back-End Developer"}
            name={"Diego Santa Cruz"}
            email={"diego.santacruz@outlook.com"}
            linkedIn={"diegosantacruzm"}
          />
          <ContactProfile
            photo={rojinProfilePic}
            titleOne={"Full-Stack Developer"}
            name={"Rojin Taghadosi"}
            email={"rojintg@gmail.com"}
            linkedIn={"rojin-taghadosi"}
          />
          <ContactProfile
            photo={winallProfilePic}
            titleOne={"Full-Stack Developer"}
            name={"Winall Lopes"}
            email={"winalllopes1@gmail.com"}
            linkedIn={"win-all-lopes"}
          />
          <ContactProfile
            photo={andrewProfilePic}
            titleOne={"Design Lead"}
            titleTwo={"UI/UX Designer"}
            name={"Andrew Yip"}
            email={"andrewyip30@gmail.com"}
            linkedIn={"andrewthyip"}
          />
          <ContactProfile
            photo={janeProfilePic}
            titleOne={"UI/UX Designer"}
            name={"Jane Choi"}
            email={"janecanada92@gmail.com"}
            linkedIn={"janechoi92"}
          />
          <ContactProfile
            photo={javierProfilePic}
            titleOne={"UI/UX Designer"}
            name={"Javier Perez"}
            email={"jperezruiloba00@mylangara.ca"}
            linkedIn={"javier-pr"}
          />
          <ContactProfile
            photo={jasminProfilePic}
            titleOne={"UI/UX Designer"}
            name={"Yas Fazeli"}
            email={"yfazeli49@gmail.com"}
            linkedIn={"yasfazeli"}
          />
        </div>
        <div className="contact-form-section">
          <p className="mandatory-field-text">*Mandatory Fields</p>
          <div className={"contact-form-wrapper"}>
            <ContactFrom onSend={onSend} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
