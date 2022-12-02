import { useQuery } from '@tanstack/react-query';
import Button from './Button';
import { ReactComponent as CheckIcon } from '../assets/icons/others/check-icon.svg';
import { getBusinessByEmail } from '../api/business'


function BusinessProjectPreview({ businessProject, businessImage, onSeeMore, onCheckStatus }) {
    const { status, name, description, team_size, created_at, category, location } = businessProject;

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

    const renderStatus = () => {
        if (status !== 'Open') {
            return <div className={`${status}`}>
                <Button
                    label={"Check Status"}
                    variant={"secondary"}
                    onClick={onCheckStatus}
                />
            </div>
        }
    }

    const renderStatusLabel = () => {
        if (status !== 'Open') {
            return (
                <div className='check-icon-wrapper'>
                    <div className="icon check-icon"><CheckIcon /></div>
                    <h3>You have already applied</h3>
                </div>
            )
        }
    }

    return (
        <div className="business-project-preview">
            <div className="title-container">
                <div>
                    <img src={businessImage} alt="project's logo" />
                    <h2>{name}</h2>
                </div>
                {renderStatusLabel()}
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
                    {renderStatus()}
                    <Button label={"See More"} variant={"primary"} onClick={onSeeMore} />
                </div>
            </div>
        </div>
    )
}

export default BusinessProjectPreview;
