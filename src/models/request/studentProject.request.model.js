const TeamId = require("../generic/teamId.generic.model");

function StudentProject(
  projectName,
  description,
  teamId,
  approvalStatus,
  logoUrl,
  developmentUrl,
  designUrl,
  projectLink,
  category,
  institution,
  location,
  message,
  startDate,
  endDate,
  businessModel,
  image,
  instructorEmail,
  instructorLinkedin,
  technologies
) {
  this.project_name = projectName;
  this.description = description;
  this.team_id = teamId;
  this.approval_status = approvalStatus;
  this.logo_url = logoUrl;
  this.development_url = developmentUrl;
  this.design_url = designUrl;
  this.project_link = projectLink;
  this.category = category;
  this.institution = institution;
  this.location = location;
  this.message = message;
  this.start_date = startDate;
  this.end_date = endDate;
  this.business_model = businessModel;
  this.image = image;
  this.instructor_email = instructorEmail;
  this.instructor_linkedin = instructorLinkedin;
  this.technologies = technologies;
}

module.exports = StudentProject;
