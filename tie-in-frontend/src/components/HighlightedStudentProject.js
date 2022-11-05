import React from 'react'
import Button from './Button';

function HighlightedStudentProject({studentProject, onSeeMore}) {
    const {name, institution, category, location} = studentProject;
    return (
            <div className={"highlightStudentProject"}>
                <h2>{name}</h2>
                <div>
                {category? category.map((cat, index) => {return(<div className="category" key={index}>{cat}</div>)}) : ""}
                </div>
                <p>{institution}</p>
                <p>{location}</p>
                <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
            </div>
    );
}

export default HighlightedStudentProject;
