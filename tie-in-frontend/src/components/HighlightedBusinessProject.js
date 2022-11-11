import React from 'react'
import Button from './Button';

function HighlightedBusinessProject({ businessProject, company_name, onSeeMore}) {
  const { name, category, end_date, location} = businessProject;
  return (
    <div className={"highlightBusinessProject"}>
        <h2>{company_name}</h2>
        <p>
          {
          category.map((category, index) => 
            <span key={index}> {category} </span>
         )
          }
        </p>
        <p>{end_date ? end_date: "N/A"}</p>
        <p>{location}</p>
        <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
    </div>
  );
}

export default HighlightedBusinessProject;
