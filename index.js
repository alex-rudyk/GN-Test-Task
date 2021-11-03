const express = require('express');
const config = require('./config');
const routes = require('./routes');

function createExpressApp() {
	const app = express();

	app.use(express.json());
	app.use(routes);

	return app;
}

const app = createExpressApp();

app.listen(config.port, () => {
	console.log(`Hello GN!\nServer listening in the port: ${config.port}`);
});