const express = require('express');
const projectController = require('./controllers/project');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const ProjectRouter = express.Router();
ProjectRouter.use(addModelsToRequest);

// maybe a page to show ALL projects? for now it will be if they are authorized though
ProjectRouter.get('/projects/all/:user_id',projectController.list); // list all projects from user
ProjectRouter.get('/projects/:id',projectController.show); //shows specified project
ProjectRouter.post('/projects',projectController.create); // create a new project

ProjectRouter.delete('/projects/:id',projectController.destroy);
ProjectRouter.patch('/projects/:id',projectController.update);

module.exports = ProjectRouter;
