function Student(
  email,
  firstName,
  lastName,
  location,
  institution,
  linkedInUrl,
  githubUrl,
  portfolioUrl,
  position
) {
  this.email = email;
  this.first_name = firstName;
  this.last_name = lastName;
  //Student city
  this.location = location;
  this.institution = institution;
  this.linkedIn_url = linkedInUrl;
  this.github_url = githubUrl;
  this.portfolio_url = portfolioUrl;
  //Student expertise (Backend, front, designer, etc)
  this.position = position;
}

module.exports = Student;
