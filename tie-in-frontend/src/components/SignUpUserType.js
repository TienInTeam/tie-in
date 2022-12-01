import {Link} from "react-router-dom";
import { ReactComponent as StudentType } from '../assets/icons/home/student_image_1.svg';
import { ReactComponent as BusinessType } from '../assets/icons/home/business_image_1.svg';


const SignUpUserType = () => {
    return (
        <div className={"signup-type"}>
            <div className={"signup-section"}>
                <StudentType/>
                <Link to="/signup/student" className="secondary" >I am a Student</Link>
            </div>
            <div className={"signup-section"}>
                <Link to="/signup/business" className="primary" >I am a Business</Link>
                <BusinessType/>
            </div>
        </div>
    );
}

export default SignUpUserType;
