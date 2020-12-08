# Spring PetClinic Application with the Elastic Stack

The PetClinic application contains a few componets (See architecture diagram at the bottom for detais):

- The React frontend web application
- The node.js Express application acting as a proxy for the React web application.
- The Spring Boot backend application.
- The Python application for address lookup from an Elasticsearch cluster.

A docker compose allows the user to run the application, backed with Mysql as the data layer, with Elastic APM and Beat instrumentation enabled. The following services are deployed:

- Pet Clinic via embedded Tomcat with REST API. Instrument with Elastic Java Agent.
- React UI for Pet Clinic using above. Instrument with Elastic RUM Agent.
- Elasticsearch
- Kibana
- MySQL

## Running Petclinic with the Elastic Stack

`ES_VERSION=6.4.2 docker-compose -f docker-compose.yml up`

## Running petclinic locally for development

See instructions for each of the components of the application.

First of all, set your Elasticsearch cluster information inside the script `bin/setAPMenv.sh` and run the script. All the components rely on the environment variables to connect to your Elasticsearch cluster.

- Start the Spring Boot backend

```
	git clone https://github.com/tuurleyck/spring-petclinic.git
	cd spring-petclinic
	./mvnw spring-boot:run
```

- Start the Python address finder

```
	cd spring-petclinic/address_resolver/src
	pip install gunicorn json-logging-py
	pip install --no-cache-dir -r requirements.txt
        python data_load.py
	gunicorn --config gunicorn.conf --log-config logging.conf -b :5000 server:app
```

- Start the node.js proxy application

```
	cd spring-petclinic/frontend/server
	npm install
	npm start
```

- Start the React frontend

```
	cd spring-petclinic/frontend/client
	npm install
	npm start
```

## Understanding the Spring Petclinic application with a few diagrams
<a href="https://speakerdeck.com/michaelisvy/spring-petclinic-sample-application">See the presentation here</a>

Application Architecture: 
![PetClinic Application Architecture](https://github.com/tuurleyck/spring-petclinic/blob/master/images/architecture.png)
