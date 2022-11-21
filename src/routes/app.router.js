const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

////////// USER ROUTES //////////
router.get('/users', appController.getAllUsers);
router.get('/users/:uid', appController.getOneUserByUid);
router.post('/users', appController.createOneUser);
// router.put('/users/:uid', appController.updateOneUser);
router.delete('/users/:uid', appController.deleteOneUserById);

////////// STUDENT ROUTES //////////
router.get('/students', appController.getAllStudents);
router.get('/students/:email', appController.getOneStudentByEmail);
router.post('/students', appController.createOneStudent);
// router.put('/students/:email', appController.updateOneUser);
router.delete('/students/:email', appController.deleteOneStudentById);

////////// TEAMS ROUTES //////////
router.get('/teams', appController.getAllTeams);
router.get('/teams/all/:id', appController.getAllTeamsOfStudentById);
router.get('/teams/:id', appController.getOneTeamById);
router.post('/teams', appController.createOneTeam);
// router.put('/students/teams/:name', appController.updateOneUser);
router.delete('/teams/:id', appController.deleteOneTeamById);

////////// BUSINESS ROUTES //////////
router.get('/business', appController.getAllBusiness);
router.get('/business/:email', appController.getOneBusinessByEmail);
router.post('/business', appController.createOneBusiness);
// router.put('/business/:email', appController.updateOneUser);
router.delete('/business/:email', appController.deleteOneBusinessById);

////////// STUDENT PROJECT ROUTES //////////
router.get('/studentProjects', appController.getAllStudentProjects);
router.get('/studentProjects/:id', appController.getOneStudentProjectById);
router.post('/studentProjects', appController.createOneStudentProject);
// router.put('/students/projects/:name', appController.updateOneUser);
router.delete('/students/projects/:name', appController.deleteOneStudentProjectById);

////////// BUSINESS PROJECT ROUTES //////////
router.get('/businessProjects', appController.getAllBusinessProjects);
router.get('/businessProjects/:id', appController.getOneBusinessProjectById);
router.post('/businessProjects', appController.createOneBusinessProject);
// router.put('/business/projects/:name', appController.updateOneUser);
router.delete('/business/projects/:name', appController.deleteOneBusinessProjectById);

////////// APPLICATIONS ROUTES //////////
router.get('/applications', appController.getAllApplications);
router.get('/students/teams/applications/:id', appController.getOneApplicationById);
router.post('/applications', appController.createOneApplication);
// router.put('/students/teams/applications/:id', appController.updateOneUser);
router.delete('/students/teams/applications/:id', appController.deleteOneApplicationById);


module.exports = router;