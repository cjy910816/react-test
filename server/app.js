
// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('/api/users', (req, res) => {
	res.json([{
		"id": 1,
		"first_name": "Jeanette",
		"last_name": "Penddreth",
		"email": "jpenddreth0@census.gov",
		"gender": "Female",
		"ip_address": "26.58.193.2"
	}, {
		"id": 2,
		"first_name": "Giavani",
		"last_name": "Frediani",
		"email": "gfrediani1@senate.gov",
		"gender": "Male",
		"ip_address": "229.179.4.212"
	}, {
		"id": 3,
		"first_name": "Noell",
		"last_name": "Bea",
		"email": "nbea2@imageshack.us",
		"gender": "Female",
		"ip_address": "180.66.162.255"
	}, {
		"id": 4,
		"first_name": "Willard",
		"last_name": "Valek",
		"email": "wvalek3@vk.com",
		"gender": "Male",
		"ip_address": "67.76.188.26"
	}]);
});
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;