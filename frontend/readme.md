# Spring PetClinic Application Frontend

The frontend is composed of a React web application and a node.js Express application acting as a proxy for the React web application.

Keep in mind that you will have to properly configure the APM agents accordingly using your APM server URL etc. to have APM data sent to Elastic APM correctly.

## Running Petclinic React Web Application Locally for Development

```
	git clone https://github.com/tuurleyck/spring-petclinic.git
	cd spring-petclinic/frontend/client
	npm install
	npm start
```

## Running Petclinic Node.js Application Locally for Development

```
	cd spring-petclinic/frontend/server
	npm install
	npm start
```

You can then access petclinic here: http://localhost:8081/

