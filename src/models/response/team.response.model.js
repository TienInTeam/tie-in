const TeamMember = require("../generic/teamMember.generic.model");

function Team(id, name, members) {
  this._id = id,
  this.name = name;
  this.members = members;
}

module.exports = Team;
