function Application(
  teamId,
  businessRequestId,
  applicationStatus,
  uploadedFiles
) {
  this.team_id = teamId;
  this.business_request_id = businessRequestId;
  this.application_status = applicationStatus;
  this.uploaded_files = uploadedFiles;
  this.created_at = Date();
}

module.exports = Application;
