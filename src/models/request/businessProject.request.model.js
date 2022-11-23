const BusinessId = require("../generic/businessId.generic.model")

function BusinessProject(
  name,
  businessId,
  location,
  description,
  budget,
  teamSize,
  teamRequirements,
  endDate,
  subjects,
  designUrl,
  projectLink,
  category,
  technologies,
  fileUrls,
  status
) {
  this.name = name;
  this.business_id = businessId;
  this.location = location;
  this.description = description;
  this.budget = budget;
  this.team_size = teamSize;
  this.team_requirements = teamRequirements;
  this.end_date = endDate;
  this.subjects = subjects;
  this.design_url = designUrl;
  this.project_link = projectLink;
  this.category = category;
  this.technologies = technologies;
  this.file_urls = fileUrls;
  this.status = status;
  this.created_at = Date();
}

module.exports = BusinessProject;
