function AppliedBusinessProject(businessRequestId, businessName, team, applicationStatus) {
  this.business_request_id = businessRequestId;
  this.business_name = businessName;
  this.team = team;
  this.application_status = applicationStatus;
}

module.exports = AppliedBusinessProject;
