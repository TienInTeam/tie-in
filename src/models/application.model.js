function Application(
  teamId,
  requestId,
  applicationStatus,
  uploadedFiles,
  applicationDate
) {
  this.team_id = teamId;
  this.request_id = requestId;
  this.application_status = applicationStatus;
  this.uploaded_files = uploadedFiles;
  this.application_date = applicationDate;
}

module.exports = Application;
