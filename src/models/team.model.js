const Member = require("./teamMember.model")

function Team(name, members) {
  this.team_name = name;
  this.members = members.map(
    (element) => new Member(element.id, element.name, element.member_photo)
  );
}

module.exports = Team;
