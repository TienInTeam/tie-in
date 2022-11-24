const appService = require("../services/app.service");

const { ObjectId } = require("mongodb");

//=================================== GLOBAL VARIABLES/CONSTANTS

const USER_COLLECTION = "Users";
const STUDENT_COLLECTION = "Students";
const TEAM_COLLECTION = "Teams";
const BUSINESS_COLLECTION = "Business";
const STUDENT_PROJECT_COLLECTION = "StudentProject";
const BUSINESS_PROJECT_COLLECTION = "BusinessProject";
const APPLICATION_COLLECTION = "Applications";

//=================================== VARIABLES/CONSTANTS

////////// USER //////////

async function getAllUsers(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(USER_COLLECTION));
}

async function getOneUserByUid(req, res, next) {
  res
    .status(200)
    .send(await appService.getOneUserFromDb(USER_COLLECTION, req.params.uid));
}

async function createOneUser(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneUserInDb(USER_COLLECTION, req.body));
}

async function replaceOneUserById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.replaceOneUserInDb(USER_COLLECTION, req.params.id, req.body)
    );
}

async function deleteOneUserById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneStudentFromDb(USER_COLLECTION, req.params.id)
    );
}

////////// STUDENT //////////

async function getAllStudents(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllStudentsFromDb(STUDENT_COLLECTION));
}

async function getOneStudentByEmail(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneStudentFromDb(STUDENT_COLLECTION, req.params.email)
    );
}

async function createOneStudent(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneStudentInDb(STUDENT_COLLECTION, req.body));
}

async function replaceOneStudentById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.replaceOneStudentInDb(STUDENT_COLLECTION, req.params.id, req.body)
    );
}

async function deleteOneStudentById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneStudentFromDb(STUDENT_COLLECTION, req.params.id)
    );
}

////////// TEAMS //////////

async function getAllTeams(req, res, next) {
  res.status(200).send(await appService.getAllTeamsFromDb(TEAM_COLLECTION));
}

async function getAllTeamsOfStudentById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getAllTeamsOfStudent(TEAM_COLLECTION, req.params.id)
    );
}

async function getOneTeamById(req, res, next) {
  res
    .status(200)
    .send(await appService.getOneTeamFromDb(TEAM_COLLECTION, req.params.id));
}

async function createOneTeam(req, res, next) {
  res
    .status(200)
    .send(await appService.createOneTeamInDb(TEAM_COLLECTION, req.body));
}

async function replaceOneTeamById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.replaceOneTeamInDb(TEAM_COLLECTION, req.params.id, req.body)
    );
}

async function deleteOneTeamById(req, res, next) {
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(TEAM_COLLECTION, req.params.id));
}

////////// BUSINESS //////////

async function getAllBusiness(req, res, next) {
  res.status(200).send(await appService.getAllUsersFromDb(BUSINESS_COLLECTION));
}

async function getOneBusinessByEmail(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneBusinessFromDb(BUSINESS_COLLECTION, req.params.email)
    );
}

async function createOneBusiness(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneBusinessInDb(BUSINESS_COLLECTION, req.body)
    );
}

async function replaceOneBusinessById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.replaceOneBusinessInDb(BUSINESS_COLLECTION, req.params.id, req.body)
    );
}

async function deleteOneBusinessById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneTeamFromDb(BUSINESS_COLLECTION, req.params.id)
    );
}

////////// STUDENT PROJECT //////////

async function getAllStudentProjects(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getAllStudentProjectsFromDb(STUDENT_PROJECT_COLLECTION)
    );
}

async function getOneStudentProjectById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneStudentProjectFromDb(
        STUDENT_PROJECT_COLLECTION,
        req.params.id
      )
    );
}

async function createOneStudentProject(req, res, next) {
  res
    .status(200)
    .send(
      await appService.createOneStudentProjectInDb(
        STUDENT_PROJECT_COLLECTION,
        req.body
      )
    );
}

// async function updateOneStudentProjectById(req, res, next) {
//   res
//     .status(200)
//     .send(
//       await appService.updateOneStudentProjectInDb(STUDENT_PROJECT_COLLECTION, req.params.id, req.query.status)
//     );
// }

async function deleteOneStudentProjectById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneTeamFromDb(
        STUDENT_PROJECT_COLLECTION,
        req.params.id
      )
    );
}

////////// BUSINESS PROJECT //////////

async function getAllBusinessProjects(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllBusinessProjectsFromDb(BUSINESS_PROJECT_COLLECTION));
}

async function getOneBusinessProjectById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneBusinessProjectFromDb(
        BUSINESS_PROJECT_COLLECTION,
        req.params.id
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

async function updateOneBusinessProjectById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.updateOneBusinessProjectInDb(BUSINESS_PROJECT_COLLECTION, req.params.id, req.query.status)
    );
}

async function deleteOneBusinessProjectById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.deleteOneTeamFromDb(
        BUSINESS_PROJECT_COLLECTION,
        req.params.id
      )
    );
}
////////// APPLICATIONS //////////

async function getAllApplications(req, res, next) {
  res
    .status(200)
    .send(await appService.getAllApplicationsFromDb(APPLICATION_COLLECTION));
}

async function getAllApplicationsMadeByStudentOrTeamByStudentId(
  req,
  res,
  next
) {
  res
    .status(200)
    .send(
      await appService.getAllAppMadeByStudentFromDb(
        APPLICATION_COLLECTION,
        req.params.id
      )
    );
}

async function getAllApplicationsCreatedByBusinessByBusinessId(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getAllAppCreatedByBusinessFromDb(
        APPLICATION_COLLECTION,
        req.params.id
      )
    );
}

async function getOneApplicationById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.getOneApplicationFromDb(APPLICATION_COLLECTION, req.params.id)
    );
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

async function updateOneApplicationById(req, res, next) {
  res
    .status(200)
    .send(
      await appService.updateOneApplicationInDb(APPLICATION_COLLECTION, req.params.id, req.query.status)
    );
}

async function deleteOneApplicationById(req, res, next) {
  res
    .status(200)
    .send(await appService.deleteOneTeamFromDb(APPLICATION_COLLECTION, req.params.id));
}

module.exports = {
  getAllUsers,
  getOneUserByUid,
  createOneUser,
  replaceOneUserById,
  deleteOneUserById,

  getAllStudents,
  getOneStudentByEmail,
  createOneStudent,
  replaceOneStudentById,
  deleteOneStudentById,

  getAllTeams,
  getAllTeamsOfStudentById,
  getOneTeamById,
  createOneTeam,
  replaceOneTeamById,
  deleteOneTeamById,

  getAllBusiness,
  getOneBusinessByEmail,
  createOneBusiness,
  replaceOneBusinessById,
  deleteOneBusinessById,

  getAllStudentProjects,
  getOneStudentProjectById,
  createOneStudentProject,
  deleteOneStudentProjectById,

  getAllBusinessProjects,
  getOneBusinessProjectById,
  createOneBusinessProject,
  updateOneBusinessProjectById,
  deleteOneBusinessProjectById,

  getAllApplications,
  getAllApplicationsMadeByStudentOrTeamByStudentId,
  getAllApplicationsCreatedByBusinessByBusinessId,
  getOneApplicationById,
  createOneApplication,
  updateOneApplicationById,
  deleteOneApplicationById,
};
