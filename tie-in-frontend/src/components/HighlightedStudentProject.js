import React from 'react'
import Button from './Button';

function HighlightedStudentProject({studentProject, onSeeMore}) {
    const {name, description, institution, category, location} = studentProject;
    return (
            <div className={"highlightStudentProject"}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{institution}</p>
                <p>{category}</p>
                <p>{location}</p>
                <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
            </div>
    );
}

export default HighlightedStudentProject;
