const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

////////// USER ROUTES //////////
router.get('/users', appController.getAllUsers);
router.get('/users/:uid', appController.getOneUserByUid);

////////// STUDENT ROUTES //////////
router.get('/students', appController.getAllStudents);
router.get('/students/:email', appController.getOneStudentByEmail);

////////// TEAMS ROUTES //////////
router.get('/teams', appController.getAllTeams);
router.get('/teams/:name', appController.getOneTeamByName);

////////// BUSINESS ROUTES //////////
router.get('/business', appController.getAllBusiness);
router.get('/business/:email', appController.getOneBusinessByEmail);

////////// STUDENT PROJECT ROUTES //////////
router.get('/students/projects', appController.getAllStudentProjects);
router.get('/students/projects/:name', appController.getOneStudentProjectByName);

////////// BUSINESS PROJECT ROUTES //////////
router.get('/business/projects', appController.getAllBusinessProjects);
router.get('/business/projects/:name', appController.getOneBusinessProjectByName);

////////// APPLICATIONS ROUTES //////////
router.get('/students/teams/applications', appController.getAllApplications);


module.exports = router;