### Schema
CREATE DATABASE evie_db;
USE evie_db;

CREATE TABLE data
(
	id int NOT NULL AUTO_INCREMENT,
	body varchar(255) NOT NULL,
	
	PRIMARY KEY (id)
);