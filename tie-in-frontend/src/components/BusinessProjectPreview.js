import React from 'react';
import Button from './Button';

function BusinessProjectPreview({businessProject, onSeeMore, onCheckStatus}) {
    const {status, logo, company_name, description, team_member, dueDate, category, location} = businessProject;

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
                <img src={logo} alt="project's logo"/>
                <h2>{company_name}</h2>
                <p>{status ? "You have already applied" : ""}</p>
            </div>
            <div className="body-container">
                <div>
                    <h3>Description</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <h3>Team Member</h3>
                    <p>{team_member}</p>
                    <h3>Due date</h3>
                    <p>{dueDate}</p>
                </div>
                <div>
                    <h3>Category</h3>
                    {renderCategory()}
                </div>
                <div className="button-container">
                    <h3>Location</h3>
                    <p>{location}</p>
                    <div className={"button-wrapper"}>
                        {status ?
                            <Button
                                label={"Check Status"}
                                variant={"secondary"}
                                onClick={onCheckStatus}
                            /> : ""}
                        <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessProjectPreview;
