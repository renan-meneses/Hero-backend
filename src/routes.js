const express = require('express');
const OngController = require('./controller/OngsController');
const IncidentController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfilesController');
const SessionContoller = require('./controller/SessionContoller');


const routes = express.Router();

routes.get("/", (request, response)=>{

	return response.json({
		"User":"Bem vindo a Semana OmniStack 11"
	});
});

routes.post('/session', SessionContoller.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);


routes.post('/incients', IncidentController.create);
routes.get('/incients', IncidentController.index);
routes.delete('/incients/:id', IncidentController.delete);


module.exports = routes;