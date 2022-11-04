const appService = require("../services/app.service");

////////// USER //////////
const userCollection = "Users";

async function getAllUsers(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(userCollection));
}

async function getOneUserByUid(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneUserFromDb(userCollection, { uid: req.params.uid })
    );
}

////////// STUDENT //////////
const studentCollection = "Students";

async function getAllStudents(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(studentCollection));
}

async function getOneStudentByEmail(req, res, next) {
  res.status(200).send(
    await appService.getOneUserFromDb(studentCollection, {
      email: req.params.email,
    })
  );
}

////////// TEAMS //////////
const teamCollection = "Teams";

async function getAllTeams(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(teamCollection));
}

async function getOneTeamByName(req, res, next) {
  res.status(200).send(
    await appService.getOneUserFromDb(teamCollection, {
      name: req.params.name,
    })
  );
}

////////// BUSINESS //////////
const businessCollection = "Business";

async function getAllBusiness(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(businessCollection));
}

async function getOneBusinessByEmail(req, res, next) {
  res.status(200).send(
    await appService.getOneUserFromDb(businessCollection, {
      email: req.params.email,
    })
  );
}

////////// STUDENT PROJECT //////////
const studentProjectCollection = "StudentProject";

async function getAllStudentProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllUsersFromDb(studentProjectCollection));
}

async function getOneStudentProjectByName(req, res, next) {
  res.status(200).send(
    await appService.getOneUserFromDb(studentProjectCollection, {
      name: req.params.name,
    })
  );
}

////////// BUSINESS PROJECT //////////
const businessProjectCollection = "BusinessProject";

async function getAllBusinessProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllUsersFromDb(businessProjectCollection));
}

async function getOneBusinessProjectByName(req, res, next) {
  res.status(200).send(
    await appService.getOneUserFromDb(businessProjectCollection, {
      name: req.params.name,
    })
  );
}
////////// APPLICATIONS //////////
const applicationsCollection = "Applications";

async function getAllApplications(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllUsersFromDb(applicationsCollection));
}

// async function getOneApplicationById(req, res, next) {
//   res.status(200).send(await appService.getOneUserFromDb(userCollection, { uid: req.params.uid }));
// }

module.exports = {
  getAllUsers,
  getOneUserByUid,
  getAllStudents,
  getOneStudentByEmail,
  getAllTeams,
  getOneTeamByName,
  getAllBusiness,
  getOneBusinessByEmail,
  getAllStudentProjects,
  getOneStudentProjectByName,
  getAllBusinessProjects,
  getOneBusinessProjectByName,
  getAllApplications,
};
