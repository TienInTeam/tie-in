import Button from "../components/Button";
import ContactFrom from "../components/ContactFrom";
import ContactProfile from "../components/ContactProfile";
import HomeSection from "../components/HomeSection";
import SignUpUserType from "../components/SignUpUserType";
import {ReactComponent as StudentProject} from "../assets/icons/home/student-project.svg";
import {ReactComponent as ApplyProject} from "../assets/icons/home/apply-project.svg";
import {ReactComponent as Business} from "../assets/icons/home/business.svg";
import {ReactComponent as FindTeam} from "../assets/icons/home/find-team.svg";
import {ReactComponent as WhyUs1} from "../assets/icons/home/why-us1.svg";
import {ReactComponent as WhyUs2} from "../assets/icons/home/why-us2.svg";
import {ReactComponent as WhyUs3} from "../assets/icons/home/why-us3.svg";
import {ReactComponent as HomeIcon} from "../assets/icons/home/home.svg";

const Home = () => {
    const onTryNow = () => {

    }

    const onSend = () => {

    }
    const onClick = () => {}

    return (
        <div className={"home"}>
            <div className={"home-intro"}>
                <HomeIcon/>
                <div>
                    <h1>“Projects to be sponsored,
                        ideas to be created; Simply Tie-in.”</h1>
                    <h3>Tie-in is a collaborated-driven responsive web platform for businesses to support projects and for students to work on business ideas.
                    </h3>
                    <Button variant={"primary"} label={"Get Started"} onClick={onClick}/>
                </div>
            </div>
            <h1>Student Team</h1>
            <div className={"section-wrapper"}>
                <HomeSection
                    title={"Student Team"}
                    subtitle={"How to upload your project?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step2={"Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step3={"Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                />
                <StudentProject/>
            </div>
            <div className={"section-wrapper"}>
                <ApplyProject/>
                <HomeSection
                    subtitle={"How to apply projects from company?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step2={"Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step3={"Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                />
            </div>
            <h1>Business</h1>
            <div className={"section-wrapper"}>
                <HomeSection
                    subtitle={"How to request a project?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step2={"Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step3={"Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                />
                <Business/>
            </div>
            <div className={"section-wrapper"}>
                <FindTeam/>
                <HomeSection
                    subtitle={"How to find your ideal team?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step2={"Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                    step3={"Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium velit in lorem tempus vestibulum non egestas nibh."}
                />
            </div>
            <h1>Why Us?</h1>
            <div className={"section2-wrapper"}>
                <div className={"section"}>
                    <WhyUs1/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={"section"}>
                    <WhyUs2/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={"section"}>
                    <WhyUs3/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <h1>Contact Us</h1>
            <div className={"contact-wrapper"}>
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Project Manager / Front-End Developer"}
                    name={"Florida Joca"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Development Lead / Back-End Developer"}
                    name={"Diego Santa Cruz Meono"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Full-Stack Developer"}
                    name={"Rojin Taghadosi"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Full-Stack Developer"}
                    name={"Winall Lopes"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
            </div>
            <div className={"contact-wrapper"}>
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Design Lead / UI/UX Designer"}
                    name={"Andrew Yip"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Jane Choi"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Javier Perez"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Jasmin Fazelinjad"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida.joca@gmail.com"}
                />
            </div>
            <div className={"contact-form-wrapper"}>
                <ContactFrom onSend={onSend}/>
            </div>
        </div>
    );
};

export default Home;
