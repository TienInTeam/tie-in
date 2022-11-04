const dbService = require("./db.service");

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
  const response = dbService.createOneInDb(collection, requestBody);

  return response;
}

async function updateOneUserInDb(collection, userQuery, requestBody) {
  const response = dbService.updateOneInDb(collection, userQuery, requestBody);

  return response;
}

async function deleteOneUserFromDb(collection, userQuery) {
  const response = dbService.deleteOneFromDb(collection, userQuery);

  return response;
}

////////// STUDENT //////////
async function getAllStudentsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneStudentFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

////////// TEAMS //////////
async function getAllTeamsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneTeamFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

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

////////// STUDENT PROJECT //////////
async function getAllStudentProjectsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneStudentProjectFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

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

////////// APPLICATION //////////
async function getAllApplicationsFromDb(collection) {
  const response = dbService.getAllFromDb(collection);

  return response;
}

async function getOneApplicationFromDb(collection, userQuery) {
  const response = dbService.getOneFromDb(collection, userQuery);

  return response;
}

module.exports = {
  getAllUsersFromDb,
  getOneUserFromDb,

  getAllStudentsFromDb,
  getOneStudentFromDb,

  getAllTeamsFromDb,
  getOneTeamFromDb,

  getAllBusinessFromDb,
  getOneBusinessFromDb,

  getAllStudentProjectsFromDb,
  getOneStudentProjectFromDb,

  getAllBusinessProjectsFromDb,
  getOneBusinessProjectFromDb,

  getAllApplicationsFromDb,
  getOneApplicationFromDb,
};
