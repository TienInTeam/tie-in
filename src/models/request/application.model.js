const TeamId = require("../generic/teamId.generic.model")

function Application(
  team,
  businessRequestId,
  applicationStatus,
  uploadedFiles,
  createdAt
) {
  this.team = new TeamId(team.team_id, team.team_name);
  this.business_request_id = businessRequestId;
  this.application_status = applicationStatus;
  this.uploaded_files = uploadedFiles;
  this.created_at = createdAt;
}

module.exports = Application;
