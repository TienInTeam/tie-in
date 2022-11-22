const dbService = require("./db.service");
const { ObjectId } = require("mongodb");

const TeamMemberGeneric = require("../models/generic/teamMember.generic.model");

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
const STRUDENT_PROJECT_COLLECTION = "StudentProject";
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
    userInfo.team_name,
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
    userInfo.created_at,
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
    userInfo.uploaded_files,
    userInfo.created_at
  );

  return buildApplicationModelRequest;
}

////// RESPONSE //////

async function buildTeamModelResponse(team) {
  // const response = await Promise.all(
  // allTeamsList.map(
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
  return new TeamModelResponse(team._id, team.team_name, teamMembers);
}

async function buildStudentProjectModelResponse(userInfo) {
  const buildStudentProjectModelResponse = new StudentProjectModelResponse(
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

  return buildStudentProjectModelResponse;
}

async function buildBusinessProjectModelResponse(userInfo) {
  const buildBusinessProjectModelRequest = new BusinessProjectModelRequest(
    userInfo.name,
    userInfo.business_id,
    userInfo.location,
    userInfo.description,
    userInfo.budget,
    userInfo.team_size,
    userInfo.team_requirements,
    userInfo.created_at,
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

async function buildApplicationModelResponse(userInfo) {
  const buildApplicationModelRequest = new ApplicationModelResponse(
    userInfo.team,
    userInfo.business_request_id,
    userInfo.application_status,
    userInfo.uploaded_files,
    userInfo.created_at
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

// async function updateOneUserInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(
//     collection,
//     { uid: userQuery },
//     buildUserModelRequest(requestBody)
//   );

//   return response;
// }

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
  const userQuery = { id: new ObjectId(reqParam) };
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
  const filteredArray = parsedTeams.filter(team =>
    {
      return team.members.some(member => member._id == reqParam)
    }

  );

  return filteredArray;
}

async function getOneTeamFromDb(collection, reqParam) {
  const team = await dbService.getOneFromDb(collection, reqParam);
  const parsedTeam =  buildTeamModelResponse(team)
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
  const response = dbService.getOneFromDb(collection, reqParam);

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

async function deleteOneBusinessFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// STUDENT PROJECT //////////
async function getAllStudentProjectsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneStudentProjectFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
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

async function deleteOneStudentProjectFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// BUSINESS PROJECT //////////
async function getAllBusinessProjectsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneBusinessProjectFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
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

async function deleteOneBusinessProjectFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// APPLICATION //////////
async function getAllApplicationsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
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

async function deleteOneApplicationFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,
  createOneUserInDb,
  // updateOneUserInDb,
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

  getAllBusinessProjectsFromDb,
  getOneBusinessProjectFromDb,
  createOneBusinessProjectInDb,
  // updateOneBusinessProjectInDb,
  deleteOneBusinessProjectFromDb,

  getAllApplicationsFromDb,
  getOneApplicationFromDb,
  createOneApplicationInDb,
  // updateOneApplicationInDb,
  deleteOneApplicationFromDb,
};
