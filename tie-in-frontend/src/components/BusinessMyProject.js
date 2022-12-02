import Button from './Button';

function BusinessMyProject({ businessProject, businessImage, onSeeMore }) {
    const { name, description, team_size, created_at, category, location } = businessProject;

    const renderCategory = () => {
        if (!category) {
            return (
                <div className="category">no category</div>
            );
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
                    <h2>{name}</h2>
                </div>
            </div>
            <div className="body-container">
                <div className='description'>
                    <h3>Description:</h3>
                    <p>{description}</p>
                </div>
                <div className='members'>
                    <div className="team-members">
                        <h3>Team Members:</h3>
                        <p>{team_size} members</p>
                    </div>
                    <div className="due-date">
                        <h3>Due date</h3>
                        <p>{new Date(created_at).toDateString()}</p>
                    </div>
                </div>
                <div className='categories'>
                    <h3>Category:</h3>
                    {renderCategory()}
                </div>
                <div className='location'>
                    <h3>Location:</h3>
                    <p>{location}</p>
                </div>
                <div className={"button-wrapper"}>
                    <Button label={"See More"} variant={"primary"} onClick={onSeeMore} />
                </div>
            </div>
        </div>
    )
}

export default BusinessMyProject;
