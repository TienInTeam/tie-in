// Student Dashboard Application Status

import React from 'react';

function RequestStatusCard({ application }) {
  const { team_name, team_id, team_images, name, application_date, application_status } = application;
  return (
    <div className="request-status-card">
      <p>{name}</p>
      <div className="team-wrapper team-wrapper-content">
        <h3>{team_name}</h3>
        <div className="team-images-wrapper" id={`team${team_id}`}>
          {
            team_images.map((image, index) => {
              if (index <= 2) {
                return <img key={index} src={image} alt="student" />
              }
              else if (index === team_images.length - 1) {
                return <p key={index}>+<span >{index - 2}</span></p>
              }
            }
            )}
        </div>
      </div>
      <p>{application_date}</p>
      <p>{application_status}</p>
    </div>
  );
}

export default RequestStatusCard;
