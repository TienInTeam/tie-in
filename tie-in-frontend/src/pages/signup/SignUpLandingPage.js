import {Link} from "react-router-dom";

const SignUpLandingPage = () => {
    return (
        <div className={"signup-type"}>
            <Link to="/signup/student" className="secondary" >I am a Student</Link>
            <Link to="/signup/business" className="primary" >I am a Business</Link>
        </div>
    );
}

export default SignUpLandingPage;
