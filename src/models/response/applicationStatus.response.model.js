function ApplicationStatus(businessRequestId, team, applicationStatus) {
  this.business_request_id = businessRequestId;
  this.team = team;
  this.application_status = applicationStatus;
}

module.exports = ApplicationStatus;
