const appService = require("../services/app.service");

const { ObjectId } = require("mongodb");

////////// USER //////////
const userCollection = "Users";

async function getAllUsers(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(userCollection));
}

async function getOneUserByUid(req, res, next) {
  const userQuery = { uid: req.params.uid };
  res
    .status(200)
    .send(await appService.getOneUserFromDb(userCollection, userQuery));
}

async function createOneUser(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneUserInDb(userCollection, req.body));
}

// async function updateOneUser(req, res, next) {
//   const userQuery = { uid: req.params.uid };
//   res
//     .status(200)
//     .send(
//       await appService.updateOneStudentInDb(userCollection, userQuery, req.body)
//     );
// }

// async function deleteOneUser(req, res, next) {
//   const userQuery = { uid: req.params.uid };
//   res
//     .status(200)
//     .send(await appService.deleteOneStudentFromDb(userCollection, userQuery));
// }

////////// STUDENT //////////
const studentCollection = "Students";

async function getAllStudents(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllStudentsFromDb(studentCollection));
}

async function getOneStudentByEmail(req, res, next) {
  const userQuery = { email: req.params.email };
  res
    .status(200)
    .send(await appService.getOneStudentFromDb(studentCollection, userQuery));
}

async function createOneStudent(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneStudentInDb(studentCollection, req.body));
}

////////// TEAMS //////////
const teamCollection = "Teams";

async function getAllTeams(req, res, next) {
  res.status(200).send(await appService.getAllTeamsFromDb(teamCollection));
}

async function getAllTeamsOfStudentById(req, res, next) {
  const userQuery = { id: req.params.id };
  res.status(200).send(await appService.getAllTeamsOfStudent(teamCollection, userQuery));
}

async function getOneTeamByName(req, res, next) {
  const userQuery = { name: req.params.name };
  res
    .status(200)
    .send(await appService.getOneTeamFromDb(teamCollection, userQuery));
}

async function createOneTeam(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneTeamInDb(teamCollection, req.body));
}

async function deleteOneTeamById(req, res, next) {
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(teamCollection, req.body));
}

////////// BUSINESS //////////
const businessCollection = "Business";

async function getAllBusiness(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(businessCollection));
}

async function getOneBusinessByEmail(req, res, next) {
  const userQuery = { email: req.params.email };
  res
    .status(200)
    .send(await appService.getOneUserFromDb(businessCollection, userQuery));
}

async function createOneBusiness(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneBusinessInDb(businessCollection, req.body));
}

////////// STUDENT PROJECT //////////
const studentProjectCollection = "StudentProject";

async function getAllStudentProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllStudentProjectsFromDb(studentProjectCollection));
}

async function getOneStudentProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(
      await appService.getOneStudentProjectFromDb(
        studentProjectCollection,
        userQuery
      )
    );
}

async function createOneStudentProject(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneStudentProjectInDb(
        studentProjectCollection,
        req.body
      )
    );
}

////////// BUSINESS PROJECT //////////
const businessProjectCollection = "BusinessProject";

async function getAllBusinessProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllBusinessFromDb(businessProjectCollection));
}

async function getOneBusinessProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(
      await appService.getOneBusinessFromDb(businessProjectCollection, userQuery)
    );
}

async function createOneBusinessProject(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneBusinessProjectInDb(
        businessProjectCollection,
        req.body
      )
    );
}
////////// APPLICATIONS //////////
const applicationsCollection = "Applications";

async function getAllApplications(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllApplicationsFromDb(applicationsCollection));
}

async function getOneApplicationById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res.status(200).send(
    await appService.getOneApplicationFromDb(userCollection, userQuery)
  );
}

async function createOneApplication(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneApplicationInDb(
        applicationsCollection,
        req.body
      )
    );
}

module.exports = {
  getAllUsers,
  getOneUserByUid,
  createOneUser,

  getAllStudents,
  getOneStudentByEmail,
  createOneStudent,

  getAllTeams,
  getAllTeamsOfStudentById,
  getOneTeamByName,
  createOneTeam,
  deleteOneTeamById,

  getAllBusiness,
  getOneBusinessByEmail,
  createOneBusiness,

  getAllStudentProjects,
  getOneStudentProjectById,
  createOneStudentProject,

  getAllBusinessProjects,
  getOneBusinessProjectById,
  createOneBusinessProject,

  getAllApplications,
  getOneApplicationById,
  createOneApplication,
};
