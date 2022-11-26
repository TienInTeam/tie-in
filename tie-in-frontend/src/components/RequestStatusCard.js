// Student Dashboard Application Status

import React from 'react';

function RequestStatusCard({ application }) {
  const { team, team_images, name, created_at, application_status, business } = application;
  return (
    <div className="request-status-card">
      <p>{business.business_name}</p>
      <div className="team-wrapper team-wrapper-content">
        <h3>{team.team_name}</h3>
        <div className="team-images-wrapper" id={`team${team.team_id}`}>
          {/*{*/}
          {/*  team_images?.map((image, index) => {*/}
          {/*    if (index <= 2) {*/}
          {/*      return <img key={index} src={image} alt="student" />*/}
          {/*    }*/}
          {/*    else if (index === team_images.length - 1) {*/}
          {/*      return <p key={index}>+<span >{index - 2}</span></p>*/}
          {/*    }*/}
          {/*  }*/}
          {/*  )}*/}
        </div>
      </div>
      <p>{new Date(created_at).toDateString()}</p>
      <p>{application_status}</p>
    </div>
  );
}

export default RequestStatusCard;
