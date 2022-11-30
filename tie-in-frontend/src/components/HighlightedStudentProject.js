import React from 'react'
import Button from './Button';

function HighlightedStudentProject({studentProject, onSeeMore}) {
    const {project_name, institution, category, location} = studentProject;

    const renderCategory = () => {
        if (!category) {
            return null;
        }
        return category?.map((category, index) =>
            <span className="category" key={index}> {category} </span> )
    }
    return (
            <div className={"highlightStudentProject"}>
                <h2>{project_name}</h2>
                <div>
                    {renderCategory()}
                </div>
                <p>{institution}</p>
                <p>{location}</p>
                <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
            </div>
    );
}

export default HighlightedStudentProject;
