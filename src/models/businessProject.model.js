function BusinessProject(
  name,
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
  technology,
  additionalField,
  file,
  links,
  status
) {
  this.name = name;
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
  this.technology = technology;
  this.additional_field = additionalField;
  this.file = file;
  this.links = links;
  this.status = status;
}

module.exports = BusinessProject;
