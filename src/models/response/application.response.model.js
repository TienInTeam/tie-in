function Application(
  id,
  businessRequestId,
  team,
  business,
  applicationStatus,
  uploadedFiles,
  createdAt
) {
  this._id = id
  this.business_request_id = businessRequestId;
  this.team = team;
  this.business = business;
  this.application_status = applicationStatus;
  this.uploaded_files = uploadedFiles;
  this.created_at = createdAt;
}

module.exports = Application;
