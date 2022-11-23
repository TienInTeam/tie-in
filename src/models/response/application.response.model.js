const TeamId = require("../generic/teamId.generic.model");
const BusinessId = require("../generic/businessId.generic.model")

function Application(
  businessRequestId,
  team,
  business,
  applicationStatus,
  uploadedFiles,
  createdAt
) {
  this.business_request_id = businessRequestId;
  this.team = team;
  this.business = business;
  this.application_status = applicationStatus;
  this.uploaded_files = uploadedFiles;
  this.created_at = createdAt;
}

module.exports = Application;
