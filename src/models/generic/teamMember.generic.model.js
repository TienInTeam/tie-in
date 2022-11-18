function TeamMember(studentId, studentFirstName, studentLastName, studentEmail, studentPhotoUrl) {
  this.id = studentId;
  this.first_name = studentFirstName;
  this.last_name = studentLastName;
  this.email = studentEmail;
  this.photo_url = studentPhotoUrl;
}

module.exports = TeamMember;
