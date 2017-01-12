Project file structures
------------------------
app - this directory contains node resources
	controller - this directory contains api and controllers
		core.js - mvc style api controllers
		api.js - api route controllers
	routes.js - contains the express routes
	server.js - express server config, database and other server details
	util - this directory conatins common utility files
public - this directory contains publicly accessible resources - angular files 
	assests - this directory contains js,image and css
		css - directory
		js - directory
	views - this direcotry contains main html files
		partials - this directory has resuable html's header, menu bar etc
main.js - entry point to this application (contains evn variables,startup functions)