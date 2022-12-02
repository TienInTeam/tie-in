import React from 'react'
import Button from './Button';

function HighlightedBusinessProject({ businessProject, company_name, onSeeMore}) {
  const { category, end_date, location} = businessProject;

    const renderCategory = () => {
        if (!category) {
            return <div className='category'>No Category</div>;
        }
        return category.map((category, index) =>
            <div className="category" key={index}> {category} </div> )
    }

  return (
    <div className={"highlightBusinessProject"}>
        <h2>{company_name}</h2>
        <p>{renderCategory()}</p>
        <p>{end_date ? new Date(end_date).toDateString() : "N/A"}</p>
        <p>{location}</p>
        <Button label={"See More"} variant={"primary"} onClick={onSeeMore}/>
    </div>
  );
}

export default HighlightedBusinessProject;
