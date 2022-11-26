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

const Home = () => {
    const onTryNow = () => {

    }

    const onSend = () => {

    }

    return (
        <div className={"home"}>
            <SignUpUserType/>
            <h1>Student Team</h1>
            <div className={"section-wrapper"}>
                <HomeSection
                    title={"Student Team"}
                    subtitle={"How to upload your project?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Fill in related documents and information of your project."}
                    step2={"Step 2: Select your project team to include your team members."}
                    step3={"Step 3: Review your project details and click “Submit” when you are finished."}
                />
                <StudentProject/>
            </div>
            <div className={"section-wrapper"}>
                <ApplyProject/>
                <HomeSection
                    subtitle={"How to apply projects from company?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Search for the business projects that match your interests and skillsets."}
                    step2={"Step 2: Review the project details and click the “apply” button."}
                    step3={"Step 3: Fill in an application form and wait for approval from the business side."}
                />
            </div>
            <h1>Business</h1>
            <div className={"section-wrapper"}>
                <HomeSection
                    subtitle={"How to request a project?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Fill in related documents and information of your project."}
                    step2={"Step 2: Review your project details and click “Submit” when you are finished."}
                />
                <Business/>
            </div>
            <div className={"section-wrapper"}>
                <FindTeam/>
                <HomeSection
                    subtitle={"How to find your ideal team?"}
                    onTryNowClick={onTryNow}
                    step1={"Step 1: Search for student projects that match your business ambition and goal."}
                    step2={"Step 2: Go through the project details to look for your match."}
                    step3={"Step 3: Connect with the student team using team cotact below."}
                />
            </div>
            <h1>Why Us?</h1>
            <div className={"section2-wrapper"}>
                <div className={"section"}>
                    <WhyUs1/>
                    <p>Business will get vertification from the academic institutios.</p>
                </div>
                <div className={"section"}>
                    <WhyUs2/>
                    <p>Students can form a team in the platform, which gives them more bargaining power.</p>
                </div>
                <div className={"section"}>
                    <WhyUs3/>
                    <p>It is interactive platform for business and student team.</p>
                </div>
            </div>
            <h1>Contact Us</h1>
            <div className={"contact-wrapper"}>
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Project Manager / Front-End Developer"}
                    name={"Florida Joca"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"florida-joca"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Development Lead / Back-End Developer"}
                    name={"Diego Santa Cruz Meono"}
                    email={"diego.santacruz@outlook.com"}
                    linkedIn={"diegosantacruzm"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Full-Stack Developer"}
                    name={"Rojin Taghadosi"}
                    email={"rojintg@gmail.com"}
                    linkedIn={"rojin-taghadosi"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Full-Stack Developer"}
                    name={"Winall Lopes"}
                    email={"winalllopes1@gmail.com"}
                    linkedIn={"win-all-lopes"}
                />
            </div>
            <div className={"contact-wrapper"}>
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"Design Lead / UI/UX Designer"}
                    name={"Andrew Yip"}
                    email={"andrewyip30@gmail.com"}
                    linkedIn={"andrewthyip"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Jane Choi"}
                    email={"janecanada92@gmail.com"}
                    linkedIn={"janechoi92"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Javier Perez"}
                    email={"florida.joca@gmail.com"}
                    linkedIn={"javier-pr"}
                />
                <ContactProfile
                    photo={"https://picsum.photos/200"}
                    title={"UI/UX Designer"}
                    name={"Jasmin Fazelinjad"}
                    email={"yfazeli49@gmail.com"}
                    linkedIn={"yasfazeli"}
                />
            </div>
            <div className={"contact-form-wrapper"}>
                <ContactFrom onSend={onSend}/>
            </div>
        </div>
    );
};

export default Home;
