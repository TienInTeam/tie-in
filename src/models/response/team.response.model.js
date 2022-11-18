const TeamMember = require("../generic/teamMember.generic.model");

function Team(name, students) {
  this.team_name = name;
  this.members = students.map(
    (student) =>
      new TeamMember(
        student.id,
        student.first_name,
        student.last_name,
        student.email,
        student.photo
      )
  );
}

module.exports = Team;
