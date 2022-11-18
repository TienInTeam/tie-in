function Student(
  email,
  firstName,
  lastName,
  institution,
  linkedInUrl,
  githubUrl,
  portfolioUrl,
  position,
  phoneNumber,
  photoUrl
) {
  this.email = email;
  this.first_name = firstName;
  this.last_name = lastName;
  this.institution = institution;
  this.linkedIn_url = linkedInUrl;
  this.github_url = githubUrl;
  this.portfolio_url = portfolioUrl;
  this.position = position;
  this.phone_number = phoneNumber;
  this.photo_url = photoUrl;
}

module.exports = Student;
