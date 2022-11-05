const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

////////// USER ROUTES //////////
router.get('/users', appController.getAllUsers);
router.get('/users/:uid', appController.getOneUserByUid);
router.post('/users', appController.createOneUser);
// router.put('/users/:uid', appController.updateOneUser);
// router.delete('/users/:uid', appController.deleteOneUser);

////////// STUDENT ROUTES //////////
router.get('/students', appController.getAllStudents);
router.get('/students/:email', appController.getOneStudentByEmail);
router.post('/students', appController.createOneStudent);
// router.put('/students/:email', appController.updateOneUser);
// router.delete('/students/:email', appController.deleteOneUser);

////////// TEAMS ROUTES //////////
router.get('/students/teams', appController.getAllTeams);
router.get('/students/teams/:name', appController.getOneTeamByName);
router.post('/students/teams', appController.createOneTeam);
// router.put('/students/teams/:name', appController.updateOneUser);
// router.delete('/students/teams/:name', appController.deleteOneUser);

////////// BUSINESS ROUTES //////////
router.get('/business', appController.getAllBusiness);
router.get('/business/:email', appController.getOneBusinessByEmail);
router.post('/business', appController.createOneBusiness);
// router.put('/business/:email', appController.updateOneUser);
// router.delete('/business/:email', appController.deleteOneUser);

////////// STUDENT PROJECT ROUTES //////////
router.get('/students/projects', appController.getAllStudentProjects);
router.get('/students/projects/:name', appController.getOneStudentProjectByName);
router.post('/students/projects', appController.createOneStudentProject);
// router.put('/students/projects/:name', appController.updateOneUser);
// router.delete('/students/projects/:name', appController.deleteOneUser);

////////// BUSINESS PROJECT ROUTES //////////
router.get('/business/projects', appController.getAllBusinessProjects);
router.get('/business/projects/:name', appController.getOneBusinessProjectByName);
router.post('/business/projects', appController.createOneBusinessProject);
// router.put('/business/projects/:name', appController.updateOneUser);
// router.delete('/business/projects/:name', appController.deleteOneUser);

////////// APPLICATIONS ROUTES //////////
router.get('/students/teams/applications', appController.getAllApplications);
// router.get('/students/teams/applications/:id', appController.getOneApplicationBy);
router.post('/students/teams/applications', appController.createOneApplication);
// router.put('/students/teams/applications/:id', appController.updateOneUser);
// router.delete('/students/teams/applications/:id', appController.deleteOneUser);


module.exports = router;