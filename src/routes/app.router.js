const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

////////// USER ROUTES //////////
router.get('/users', appController.getAllUsers);
router.get('/users/:uid', appController.getOneUserByUid);
router.post('/users', appController.createOneUser);
router.put('/users/:id', appController.replaceOneUserById);
router.delete('/users/:id', appController.deleteOneUserById);

////////// STUDENT ROUTES //////////
router.get('/students', appController.getAllStudents);
router.get('/students/:email', appController.getOneStudentByEmail);
router.post('/students', appController.createOneStudent);
router.put('/students/:id', appController.replaceOneStudentById);
router.delete('/students/:id', appController.deleteOneStudentById);

////////// TEAMS ROUTES //////////
router.get('/teams', appController.getAllTeams);
router.get('/teams/all/:id', appController.getAllTeamsOfStudentById);
router.get('/teams/:id', appController.getOneTeamById);
router.post('/teams', appController.createOneTeam);
router.put('/teams/:id', appController.replaceOneTeamById);
router.delete('/teams/:id', appController.deleteOneTeamById);

////////// BUSINESS ROUTES //////////
router.get('/business', appController.getAllBusiness);
router.get('/business/:email', appController.getOneBusinessByEmail);
router.post('/business', appController.createOneBusiness);
router.put('/business/:id', appController.replaceOneBusinessById);
router.delete('/business/:id', appController.deleteOneBusinessById);

////////// STUDENT PROJECT ROUTES //////////
router.get('/studentProjects', appController.getAllStudentProjects);
router.get('/studentProjects/:id', appController.getOneStudentProjectById);
router.post('/studentProjects', appController.createOneStudentProject);
// router.put('/students/projects/:name', appController.updateOneUser);
router.delete('/studentProjects/:id', appController.deleteOneStudentProjectById);

////////// BUSINESS PROJECT ROUTES //////////
router.get('/businessProjects', appController.getAllBusinessProjects);
router.get('/businessProjects/:id', appController.getOneBusinessProjectById);
router.post('/businessProjects', appController.createOneBusinessProject);
router.patch('/businessProjects/:id', appController.updateOneBusinessProjectById);
router.delete('/businessProjects/:id', appController.deleteOneBusinessProjectById);

////////// APPLICATIONS ROUTES //////////
router.get('/applications', appController.getAllApplications);
router.get('/applications/student/:id', appController.getAllApplicationsMadeByStudentOrTeamByStudentId);
router.get('/applications/business/:id', appController.getAllApplicationsCreatedByBusinessByBusinessId);
router.post('/applications', appController.createOneApplication);
router.patch('/applications/:id', appController.updateOneApplicationById);
router.delete('/applications/:id', appController.deleteOneApplicationById);


////////// Data Visualiazation ROUTES //////////
router.get('/businessProjectTrend', appController.getBusinessProjectTrend);
// router.get('/businessProjectCategory', appController.getBusinessProjectCategory);
// router.get('/studentProjectTrend', appController.getStudentProjectTrend);
// router.get('/studentProjectCategory', appController.getStudentProjectCategory);


module.exports = router;
