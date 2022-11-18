const Student = require("./student.generic.model");

function Team(name, students) {
  this.team_name = name;
  this.students = students.map(
    (student) =>
      new Student(student.student_id, student.name, student_email, student.student_photo)
  );
}

module.exports = Team;
