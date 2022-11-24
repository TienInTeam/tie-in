const dbService = require("./db.service");
const { ObjectId } = require("mongodb");

const TeamMemberGeneric = require("../models/generic/teamMember.generic.model");
const TeamId = require("../models/generic/teamId.generic.model");
const BusinessId = require("../models/generic/businessId.generic.model");

const UserModelRequest = require("../models/request/user.request.model");
const StudentModelRequest = require("../models/request/student.request.model");
const TeamModelRequest = require("../models/request/team.request.model");
const BusinessModelRequest = require("../models/request/business.request.model");
const StudentProjectModelRequest = require("../models/request/studentProject.request.model");
const BusinessProjectModelRequest = require("../models/request/businessProject.request.model");
const ApplicationModelRequest = require("../models/request/application.request.model");

const TeamModelResponse = require("../models/response/team.response.model");
const StudentProjectResponse = require("../models/response/studentProject.response.model");
const BusinessProjectResponse = require("../models/response/businessProject.response.model");
const ApplicationModelResponse = require("../models/response/application.response.model");

//=================================== GLOBAL VARIABLES/CONSTANTS

const USER_COLLECTION = "Users";
const STUDENT_COLLECTION = "Students";
const TEAM_COLLECTION = "Teams";
const BUSINESS_COLLECTION = "Business";
const STUDENT_PROJECT_COLLECTION = "StudentProject";
const BUSINESS_PROJECT_COLLECTION = "BusinessProject";
const APPLICATION_COLLECTION = "Applications";

//=================================== MODEL BUILDING FUNCTIONS

////// REQUEST //////

function buildUserModelRequest(userInfo) {
  const buildUserModelRequest = new UserModelRequest(
    userInfo.uid,
    userInfo.email,
    userInfo.type
  );

  return buildUserModelRequest;
}

function buildStudentModelRequest(userInfo) {
  const buildStudentModelRequest = new StudentModelRequest(
    userInfo.email,
    userInfo.first_name,
    userInfo.last_name,
    userInfo.institution,
    userInfo.linkedIn_url,
    userInfo.github_url,
    userInfo.portfolio_url,
    userInfo.position,
    userInfo.phone_number,
    userInfo.photo_url
  );

  return buildStudentModelRequest;
}

function buildTeamModelRequest(userInfo) {
  const buildTeamModelRequest = new TeamModelRequest(
    userInfo.name,
    userInfo.members
  );

  return buildTeamModelRequest;
}

function buildBusinessModelRequest(userInfo) {
  const buildBusinessModelRequest = new BusinessModelRequest(
    userInfo.name,
    userInfo.email,
    userInfo.logo_url,
    userInfo.linkedIn_url,
    userInfo.website_url,
    userInfo.address,
    userInfo.location
  );

  return buildBusinessModelRequest;
}

function buildStudentProjectModelRequest(userInfo) {
  const buildStudentProjectModelRequest = new StudentProjectModelRequest(
    userInfo.project_name,
    userInfo.description,
    userInfo.team_id,
    userInfo.approval_status,
    userInfo.logo_url,
    userInfo.development_url,
    userInfo.design_url,
    userInfo.project_link,
    userInfo.category,
    userInfo.institution,
    userInfo.location,
    userInfo.message,
    userInfo.start_date,
    userInfo.end_date,
    userInfo.business_model,
    userInfo.image,
    userInfo.instructor_email,
    userInfo.instructor_linkedin,
    userInfo.technologies
  );

  return buildStudentProjectModelRequest;
}

function buildBusinessProjectModelRequest(userInfo) {
  const buildBusinessProjectModelRequest = new BusinessProjectModelRequest(
    userInfo.name,
    userInfo.business_id,
    userInfo.location,
    userInfo.description,
    userInfo.budget,
    userInfo.team_size,
    userInfo.team_requirements,
    userInfo.end_date,
    userInfo.subjects,
    userInfo.design_url,
    userInfo.project_link,
    userInfo.category,
    userInfo.technologies,
    userInfo.file_urls,
    userInfo.status
  );

  return buildBusinessProjectModelRequest;
}

function buildApplicationModelRequest(userInfo) {
  const buildApplicationModelRequest = new ApplicationModelRequest(
    userInfo.team_id,
    userInfo.business_request_id,
    userInfo.application_status,
    userInfo.uploaded_files
  );

  return buildApplicationModelRequest;
}

////// RESPONSE //////

async function buildTeamModelResponse(team) {
  const teamMembers = await Promise.all(
    team.members.map(async (member) => {
      const memberInfo = await dbService.getOneFromDb(STUDENT_COLLECTION, {
        _id: new ObjectId(member),
      });
      const selectedInfo = {
        _id: memberInfo._id,
        first_name: memberInfo.first_name,
        last_name: memberInfo.last_name,
        email: memberInfo.email,
        photo_url: memberInfo.photo_url,
      };
      return selectedInfo;
    })
  );
  return new TeamModelResponse(team._id, team.name, teamMembers);
}

async function buildStudentProjectModelResponse(studentProject) {
  //get teamId info
  const teamIdInfo = await dbService
    .getOneFromDb(TEAM_COLLECTION, {
      _id: new ObjectId(studentProject.team_id),
    })
    .then((team) => new TeamId(team._id, team.name));

  const buildStudentProjectModelResponse = new StudentProjectResponse(
    studentProject._id,
    studentProject.project_name,
    studentProject.description,
    teamIdInfo,
    studentProject.approval_status,
    studentProject.logo_url,
    studentProject.development_url,
    studentProject.design_url,
    studentProject.project_link,
    studentProject.category,
    studentProject.institution,
    studentProject.location,
    studentProject.message,
    studentProject.start_date,
    studentProject.end_date,
    studentProject.business_model,
    studentProject.image,
    studentProject.instructor_email,
    studentProject.instructor_linkedin,
    studentProject.technologies
  );

  return buildStudentProjectModelResponse;
}

async function buildBusinessProjectModelResponse(businessProject) {
  //get teamId info
  const businessIdInfo = await dbService
    .getOneFromDb(BUSINESS_COLLECTION, {
      _id: new ObjectId(businessProject.business_id),
    })
    .then((business) => new BusinessId(business._id, business.name));

  const buildBusinessProjectModelResponse = new BusinessProjectResponse(
    businessProject._id,
    businessProject.name,
    businessIdInfo,
    businessProject.location,
    businessProject.description,
    businessProject.budget,
    businessProject.team_size,
    businessProject.team_requirements,
    businessProject.created_at,
    businessProject.end_date,
    businessProject.subjects,
    businessProject.design_url,
    businessProject.project_link,
    businessProject.category,
    businessProject.technologies,
    businessProject.file_urls,
    businessProject.status
  );

  return buildBusinessProjectModelResponse;
}

async function buildApplicationModelResponse(application) {
  //get teamId info
  const teamIdInfo = await dbService
    .getOneFromDb(TEAM_COLLECTION, {
      _id: new ObjectId(application.team_id),
    })
    .then((team) => new TeamId(team._id, team.name));

  //get businessId Info
  const businessIdInfo = await dbService
    .getOneFromDb(BUSINESS_PROJECT_COLLECTION, {
      _id: new ObjectId(application.business_request_id),
    })
    .then(
      async (request) =>
        await dbService.getOneFromDb(BUSINESS_COLLECTION, {
          _id: new ObjectId(request.business_id),
        })
    )
    .then((y) => new BusinessId(y._id, y.name));

  const buildApplicationModelRequest = new ApplicationModelResponse(
    application._id,
    application.business_request_id,
    teamIdInfo,
    businessIdInfo,
    application.application_status,
    application.uploaded_files,
    application.created_at
  );

  return buildApplicationModelRequest;
}

//=================================== API OPERATIONS

////////// USER //////////
async function getAllUsersFromDb(collection) {
  const response = dbService.getAllFromDb(collection);
  return response;
}

async function getOneUserFromDb(collection, reqParam) {
  const userQuery = { uid: reqParam };
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneUserInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildUserModelRequest(requestBody)
  );

  return response;
}

async function updateOneUserInDb(collection, reqParam, requestBody) {
  const userQuery = { uid: reqParam };
  const response = dbService.updateOneInDb(
    collection,
    { uid: userQuery },
    buildUserModelRequest(requestBody)
  );

  return response;
}

async function deleteOneUserFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// STUDENT //////////
async function getAllStudentsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneStudentFromDb(collection, reqParam) {
  const userQuery = { email: reqParam };
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneStudentInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildStudentModelRequest(requestBody)
  );

  return response;
}

// async function updateOneStudentInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneStudentFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// TEAMS //////////
async function getAllTeamsFromDb(collection) {
  const allTeamsFromDb = await dbService.getAllFromDb(collection);
  const parsedTeams = await Promise.all(
    allTeamsFromDb.map(async (team) => {
      return buildTeamModelResponse(team);
    })
  );

  return parsedTeams;
}

async function getAllTeamsOfStudent(collection, reqParam) {
  //Get All teams from collection
  const allTeamsFromDb = await dbService.getAllFromDb(collection);
  const parsedTeams = await Promise.all(
    allTeamsFromDb.map(async (team) => {
      return buildTeamModelResponse(team);
    })
  );

  //Filtering array by member id
  const filteredArray = parsedTeams.filter((team) => {
    return team.members.some((member) => member._id == reqParam);
  });

  return filteredArray;
}

async function getOneTeamFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const team = await dbService.getOneFromDb(collection, userQuery);
  const parsedTeam = await buildTeamModelResponse(team);
  return parsedTeam;
}

async function createOneTeamInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildTeamModelRequest(requestBody)
  );

  return response;
}

// async function updateOneTeamInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneTeamFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// BUSINESS //////////
async function getAllBusinessFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneBusinessFromDb(collection, reqParam) {
  const userQuery = { email: reqParam };
  const response = await dbService.getOneFromDb(collection, userQuery);
  return response;
}

async function createOneBusinessInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildBusinessModelRequest(requestBody)
  );

  return response;
}

// async function updateOneBusinessInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneBusinessFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// STUDENT PROJECT //////////
async function getAllStudentProjectsFromDb(collection) {
  const allStudentProjects = await dbService.getAllFromDb(collection)
  const parsedStudentProjects = await Promise.all(
    allStudentProjects.map(async (project) => {
      return await buildStudentProjectModelResponse(project);
    })
  );

  return parsedStudentProjects;
}

async function getOneStudentProjectFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const project = await dbService.getOneFromDb(collection, userQuery);
  const parsedProject = await buildStudentProjectModelResponse(project)

  return parsedProject;
}

async function createOneStudentProjectInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildStudentProjectModelRequest(requestBody)
  );

  return response;
}

// async function updateOneStudentProjectInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneStudentProjectFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// BUSINESS PROJECT //////////
async function getAllBusinessProjectsFromDb(collection) {
  const allBusinessProjects = await dbService.getAllFromDb(collection);
  const parsedBusinessProjects = await Promise.all(
    allBusinessProjects.map(async (project) => {
      return await buildBusinessProjectModelResponse(project);
    })
  );

  return parsedBusinessProjects;
}

async function getOneBusinessProjectFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const project = await dbService.getOneFromDb(collection, userQuery);
  const parsedProject = await buildBusinessProjectModelResponse(project);
  return parsedProject;
}

async function createOneBusinessProjectInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildBusinessProjectModelRequest(requestBody)
  );

  return response;
}

// async function updateOneBusinessProjectInDb(
//   collection,
//   userQuery,
//   requestBody
// ) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneBusinessProjectFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// APPLICATION //////////
async function getAllApplicationsFromDb(collection) {
  const allApplications = await dbService.getAllFromDb(collection);
  const parsedApplications = await Promise.all(
    allApplications.map(async (application) => {
      return await buildApplicationModelResponse(application);
    })
  );
  return parsedApplications;
}

async function getAllAppMadeByStudentFromDb(collection, reqParam) {
  const allApplications = await dbService.getAllFromDb(collection);
  const parsedApplications = await Promise.all(
    allApplications.map(async (application) => {
      return await buildApplicationModelResponse(application);
    })
  );

  //get all teams which student belong
  const allTeamsStudentBelong = await getAllTeamsOfStudent(TEAM_COLLECTION, reqParam)
  .then( team => team.map(team => team._id.toString()));

  // Filtering array by member id
  const filteredArray = parsedApplications.filter((application) => {
    return allTeamsStudentBelong.includes(application.team.team_id.toString())
  });

  return filteredArray;
}

async function getAllAppCreatedByBusinessFromDb(collection, reqParam) {
  const allApplications = await dbService.getAllFromDb(collection);
  const parsedApplications = await Promise.all(
    allApplications.map(async (application) => {
      return await buildApplicationModelResponse(application);
    })
  );

    // Filtering array by member id
  const filteredArray = parsedApplications.filter((application) => {
    return application.business.business_id == reqParam;
  });

  return filteredArray;
}

async function getOneApplicationFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneApplicationInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    buildApplicationModelRequest(requestBody)
  );

  return response;
}

// async function updateOneApplicationInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneApplicationFromDb(collection, reqParam) {
  const userQuery = { _id: new ObjectId(reqParam) };
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,
  createOneUserInDb,
  updateOneUserInDb,
  deleteOneUserFromDb,

  getAllStudentsFromDb,
  getOneStudentFromDb,
  createOneStudentInDb,
  // updateOneStudentInDb,
  deleteOneStudentFromDb,

  getAllTeamsFromDb,
  getAllTeamsOfStudent,
  getOneTeamFromDb,
  createOneTeamInDb,
  // updateOneTeamInDb,
  deleteOneTeamFromDb,

  getAllBusinessFromDb,
  getOneBusinessFromDb,
  createOneBusinessInDb,
  // updateOneBusinessInDb,
  deleteOneBusinessFromDb,

  getAllStudentProjectsFromDb,
  getOneStudentProjectFromDb,
  createOneStudentProjectInDb,
  // updateOneStudentProjectInDb,
  deleteOneStudentProjectFromDb,

  //BUSINESS PROJECT
  getAllBusinessProjectsFromDb,
  getOneBusinessProjectFromDb,
  createOneBusinessProjectInDb,
  // updateOneBusinessProjectInDb,
  deleteOneBusinessProjectFromDb,

  //APPLICATION
  getAllApplicationsFromDb,
  getAllAppMadeByStudentFromDb,
  getAllAppCreatedByBusinessFromDb,
  getOneApplicationFromDb,
  createOneApplicationInDb,
  // updateOneApplicationInDb,
  deleteOneApplicationFromDb,
};
