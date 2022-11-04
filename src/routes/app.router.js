const express = require('express');
const router = express.Router();
const appController = require('../controllers/app.controller');

////////// USER ROUTES //////////
router.get('/', appController.get);

////////// STUDENT ROUTES //////////
router.get('/', appController.get);

////////// TEAMS ROUTES //////////
router.get('/', appController.get);

////////// BUSINESS ROUTES //////////
router.get('/', appController.get);

////////// STUDENT PROJECT ROUTES //////////
router.get('/', appController.get);

////////// BUSINESS PROJECT ROUTES //////////
router.get('/', appController.get);

////////// APPLICATIONS ROUTES //////////
router.get('/', appController.get);


module.exports = router;