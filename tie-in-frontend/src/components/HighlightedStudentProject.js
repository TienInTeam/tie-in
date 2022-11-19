import React from 'react'
import Button from './Button';

function HighlightedStudentProject({studentProject, onSeeMore}) {
    const {name, institution, category, location} = studentProject;

    const renderCategory = () => {
        if (!category) {
            return null;
        }
        return category?.map((category, index) =>
            <span key={index}> {category} </span> )
    }
    return (
            <div className={"highlightStudentProject"}>
                <h2>{name}</h2>
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
