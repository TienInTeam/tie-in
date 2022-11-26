import { useQuery } from '@tanstack/react-query';
import Button from './Button';
import { ReactComponent as CheckIcon } from '../assets/icons/others/check-icon.svg';



function BusinessProjectPreview({ businessProject, businessImage, onSeeMore, onCheckStatus }) {
    const { status, business, description, team_size, end_date, category, location } = businessProject;

    const renderCategory = () => {
        if (!category) {
            return null;
        }
        return category.map((cat, index) => {
            return (
                <div
                    key={index}
                    className="category"
                >
                    {cat}
                </div>)
        })
    }

    return (
        <div className="business-project-preview">
            <div className="title-container">
                <div>
                    <img src={businessImage} alt="project's logo" />
                    <h2>{business.business_name}</h2>
                </div>
                <div>
                    <div className="icon check-icon"><CheckIcon /></div>
                    <h3>{status ? "You have already applied" : ""}</h3>
                </div>
            </div>
            <div className="body-container">
                <div>
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <h3>Team Member</h3>
                    <p>{team_size}</p>
                    <h3>Due date</h3>
                    <p>{end_date}</p>
                </div>
                <div>
                    <h3>Category</h3>
                    {renderCategory()}
                </div>
                <div  className="button-container">
                    <div>
                        <h3>Location</h3>
                        <p>{location}</p>
                    </div>
                    <div className={"button-wrapper"}>
                        {status ?
                            <Button
                                label={"Check Status"}
                                variant={"secondary"}
                                onClick={onCheckStatus}
                            /> : ""}
                        <Button label={"See More"} variant={"primary"} onClick={onSeeMore} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProjectPreview;
