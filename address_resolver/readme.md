# Spring PetClinic Python Application for Address Lookup

This is the Python application for address lookup from an Elasticsearch cluster.

You can load the sample address data from sample.csv

Keep in mind that you will have to properly configure the APM agents accordingly using your APM server URL etc. to have APM data sent to Elastic APM correctly.

## Running Python Application Locally for Development

```
	cd spring-petclinic/address_resolver/src
	pip install gunicorn json-logging-py
	pip install --no-cache-dir -r requirements.txt
        python data_load.py
	gunicorn --config gunicorn.conf --log-config logging.conf -b :5000 server:app
```
