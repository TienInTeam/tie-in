const TeamMember = require("../generic/teamMember.generic.model");

function Team(name, students) {
  this.team_name = name;
<<<<<<< HEAD
  this.members = students;
  // this.members = students.map(
  //   (student) =>
  //     new TeamMember(
  //       student.id,
  //       student.first_name,
  //       student.last_name,
  //       student.email,
  //       student.photo
  //     )
  // );
=======
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
>>>>>>> c78f63703ee26a1fe9ca05f7ed5af2e11766174c
}

module.exports = Team;
