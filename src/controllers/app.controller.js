const appService = require("../services/app.service");

const { ObjectId } = require("mongodb");

//=================================== GLOBAL VARIABLES/CONSTANTS

const USER_COLLECTION = "Users";
const STUDENT_COLLECTION = "Students";
const TEAM_COLLECTION = "Teams";
const BUSINESS_COLLECTION = "Business";
const STRUDENT_PROJECT_COLLECTION = "StudentProject";
const BUSINESS_PROJECT_COLLECTION = "BusinessProject";
const APPLICATION_COLLECTION = "Applications";

//=================================== VARIABLES/CONSTANTS

////////// USER //////////

async function getAllUsers(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(USER_COLLECTION));
}

async function getOneUserByUid(req, res, next) {
  const userQuery = { uid: req.params.uid };
  res
    .status(200)
    .send(await appService.getOneUserFromDb(USER_COLLECTION, userQuery));
}

async function createOneUser(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneUserInDb(USER_COLLECTION, req.body));
}

// async function updateOneUser(req, res, next) {
//   const userQuery = { uid: req.params.uid };
//   res
//     .status(200)
//     .send(
//       await appService.updateOneStudentInDb(USER_COLLECTION, userQuery, req.body)
//     );
// }

async function deleteOneUserById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneStudentFromDb(USER_COLLECTION, userQuery));
}

////////// STUDENT //////////

async function getAllStudents(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllStudentsFromDb(STUDENT_COLLECTION));
}

async function getOneStudentByEmail(req, res, next) {
  const userQuery = { email: req.params.email };
  res
    .status(200)
    .send(await appService.getOneStudentFromDb(STUDENT_COLLECTION, userQuery));
}

async function createOneStudent(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneStudentInDb(STUDENT_COLLECTION, req.body));
}

async function deleteOneStudentById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneStudentFromDb(USER_COLLECTION, userQuery));
}

////////// TEAMS //////////

async function getAllTeams(req, res, next) {
  res.status(200).send(await appService.getAllTeamsFromDb(TEAM_COLLECTION));
}

async function getAllTeamsOfStudentById(req, res, next) {
  const userQuery = {  };
  res
    .status(200)
    .send(await appService.getAllTeamsOfStudent(TEAM_COLLECTION, userQuery));
}

async function getOneTeamById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.getOneTeamFromDb(TEAM_COLLECTION, userQuery));
}

async function createOneTeam(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneTeamInDb(TEAM_COLLECTION, req.body));
}

async function deleteOneTeamById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, userQuery));
}

////////// BUSINESS //////////

async function getAllBusiness(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(BUSINESS_COLLECTION));
}

async function getOneBusinessByEmail(req, res, next) {
  const userQuery = { email: req.params.email };
  res
    .status(200)
    .send(await appService.getOneUserFromDb(BUSINESS_COLLECTION, userQuery));
}

async function createOneBusiness(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneBusinessInDb(BUSINESS_COLLECTION, req.body));
}

async function deleteOneBusinessById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, userQuery));
}

////////// STUDENT PROJECT //////////

async function getAllStudentProjects(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getAllStudentProjectsFromDb(STRUDENT_PROJECT_COLLECTION)
    );
}

async function getOneStudentProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(
      await appService.getOneStudentProjectFromDb(
        STRUDENT_PROJECT_COLLECTION,
        userQuery
      )
    );
}

async function createOneStudentProject(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneStudentProjectInDb(
        STRUDENT_PROJECT_COLLECTION,
        req.body
      )
    );
}

async function deleteOneStudentProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, userQuery));
}

////////// BUSINESS PROJECT //////////

async function getAllBusinessProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllBusinessFromDb(BUSINESS_PROJECT_COLLECTION));
}

async function getOneBusinessProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(
      await appService.getOneBusinessFromDb(
        BUSINESS_PROJECT_COLLECTION,
        userQuery
      )
    );
}

async function createOneBusinessProject(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneBusinessProjectInDb(
        BUSINESS_PROJECT_COLLECTION,
        req.body
      )
    );
}

async function deleteOneBusinessProjectById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, userQuery));
}
////////// APPLICATIONS //////////

async function getAllApplications(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllApplicationsFromDb(APPLICATION_COLLECTION));
}

async function getOneApplicationById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.getOneApplicationFromDb(USER_COLLECTION, userQuery));
}

async function createOneApplication(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneApplicationInDb(
        APPLICATION_COLLECTION,
        req.body
      )
    );
}

async function deleteOneApplicationById(req, res, next) {
  const userQuery = { _id: new ObjectId(req.params.id) };
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, userQuery));
}

module.exports = {
  getAllUsers,
  getOneUserByUid,
  createOneUser,
  deleteOneUserById,

  getAllStudents,
  getOneStudentByEmail,
  createOneStudent,
  deleteOneStudentById,

  getAllTeams,
  getAllTeamsOfStudentById,
  getOneTeamById,
  createOneTeam,
  deleteOneTeamById,

  getAllBusiness,
  getOneBusinessByEmail,
  createOneBusiness,
  deleteOneBusinessById,

  getAllStudentProjects,
  getOneStudentProjectById,
  createOneStudentProject,
  deleteOneStudentProjectById,

  getAllBusinessProjects,
  getOneBusinessProjectById,
  createOneBusinessProject,
  deleteOneBusinessProjectById,

  getAllApplications,
  getOneApplicationById,
  createOneApplication,
  deleteOneApplicationById,
};
