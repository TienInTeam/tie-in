import React from 'react'
import Button from './Button';

function HighlightedBusinessProject({ businessProject, onSeeMore}) {
  const { company_name, category, end_date, location} = businessProject;


    const renderCategory = () => {
        if (!category) {
            return null;
        }
        return category.map((category, index) =>
            <span key={index}> {category} </span> )
    }

  return (
    <div className={"highlightBusinessProject"}>
        <h2>{company_name}</h2>
        <p>{renderCategory()}</p>
        <p>{end_date ? end_date: "N/A"}</p>
        <p>{location}</p>
        <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
    </div>
  );
}

export default HighlightedBusinessProject;
