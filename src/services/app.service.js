const dbService = require("./db.service");

const User = require("../models/request/user.model");
const Student = require("../models/request/student.model");
const Team = require("../models/request/team.model");
const Business = require("../models/request/business.model");
const StudentProject = require("../models/request/studentProject.model");
const BusinessProject = require("../models/request/businessProject.model");
const Application = require("../models/request/application.model");

//=================================== Model Building functions

function newUser(userInfo) {
  const newUser = new User(userInfo.uid, userInfo.email, userInfo.type);

  return newUser;
}

function newStudent(userInfo) {
  const newStudent = new Student(
    userInfo.email,
    userInfo.first_name,
    userInfo.last_name,
    userInfo.institution,
    userInfo.linkedIn_url,
    userInfo.github_url,
    userInfo.portfolio_url,
    userInfo.position,
    userInfo.phone_number
  );

  return newStudent;
}

function newTeam(userInfo) {
  const newTeam = new Team(userInfo.team_name, userInfo.members);

  return newTeam;
}

function newBusiness(userInfo) {
  const newBusiness = new Business(
    userInfo.company_name,
    userInfo.email,
    userInfo.logo_url,
    userInfo.linkedIn_url,
    userInfo.website_url,
    userInfo.address,
    userInfo.location
  );

  return newBusiness;
}

function newStudentProject(userInfo) {
  const newStudentProject = new StudentProject(
    userInfo.project_name,
    userInfo.description,
    userInfo.team_id,
    userInfo.approval_status,
    userInfo.logo_url,
    userInfo.development,
    userInfo.development_url,
    userInfo.design,
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
    userInfo.management,
    userInfo.additional_info,
    userInfo.others
  );

  return newStudentProject;
}

function newBusinessProject(userInfo) {
  const newUser = new BusinessProject(
    userInfo.name,
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
    userInfo.technology,
    userInfo.additional_field,
    userInfo.file,
    userInfo.links,
    userInfo.status
  );

  return newUser;
}

function newApplication(userInfo) {
  const newUser = new Application(
    userInfo.team_id,
    userInfo.business_request_id,
    userInfo.application_status,
    userInfo.uploaded_files,
    userInfo.application_date
  );

  return newUser;
}

//===================================

////////// USER //////////
async function getAllUsersFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneUserFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneUserInDb(collection, requestBody) {
  const response = dbService.createOneInDb(collection, newUser(requestBody));

  return response;
}

// async function updateOneUserInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(
//     collection,
//     { uid: userQuery },
//     newUser(requestBody)
//   );

//   return response;
// }

// async function deleteOneUserFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, { uid: userQuery });

//   return response;
// }

////////// STUDENT //////////
async function getAllStudentsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneStudentFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneStudentInDb(collection, requestBody) {
  const response = dbService.createOneInDb(collection, newStudent(requestBody));

  return response;
}

// async function updateOneStudentInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

// async function deleteOneStudentFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, userQuery);

//   return response;
// }

////////// TEAMS //////////
async function getAllTeamsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getAllTeamsOfStudent(collection, userQuery) {
  //Get All teams from collection
  const allTeams = await dbService.getAllFromDb(collection);

  //Filtering array by member id
  const filteredArray = allTeams.filter((team) =>
    team.members.some((member) => member.student_id == userQuery.id)
  );

  return filteredArray;
}

async function getOneTeamFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneTeamInDb(collection, requestBody) {
  const response = dbService.createOneInDb(collection, newTeam(requestBody));

  return response;
}

// async function updateOneTeamInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

async function deleteOneTeamFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// BUSINESS //////////
async function getAllBusinessFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneBusinessFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

async function createOneBusinessInDb(collection, requestBody) {
  const response = dbService.createOneInDb(
    collection,
    newBusiness(requestBody)
  );

  return response;
}

// async function updateOneBusinessInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

// async function deleteOneBusinessFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, userQuery);

//   return response;
// }

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
    newStudentProject(requestBody)
  );

  return response;
}

// async function updateOneStudentProjectInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

// async function deleteOneStudentProjectFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, userQuery);

//   return response;
// }

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
    newBusinessProject(requestBody)
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

// async function deleteOneBusinessProjectFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, userQuery);

//   return response;
// }

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
    newApplication(requestBody)
  );

  return response;
}

// async function updateOneApplicationInDb(collection, userQuery, requestBody) {
//   const response = dbService.updateOneInDb(collection, userQuery, requestBody);

//   return response;
// }

// async function deleteOneApplicationFromDb(collection, userQuery) {
//   const response = dbService.deleteOneFromDb(collection, userQuery);

//   return response;
// }

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,
  createOneUserInDb,
  // updateOneUserInDb,
  // deleteOneUserFromDb,

  getAllStudentsFromDb,
  getOneStudentFromDb,
  createOneStudentInDb,
  // updateOneStudentInDb,
  // deleteOneStudentFromDb,

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
  // deleteOneBusinessFromDb,

  getAllStudentProjectsFromDb,
  getOneStudentProjectFromDb,
  createOneStudentProjectInDb,
  // updateOneStudentProjectInDb,
  // deleteOneStudentProjectFromDb,

  getAllBusinessProjectsFromDb,
  getOneBusinessProjectFromDb,
  createOneBusinessProjectInDb,
  // updateOneBusinessProjectInDb,
  // deleteOneBusinessProjectFromDb,

  getAllApplicationsFromDb,
  getOneApplicationFromDb,
  createOneApplicationInDb,
  // updateOneApplicationInDb,
  // deleteOneApplicationFromDb,
};
