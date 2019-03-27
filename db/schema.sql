### Schema

CREATE DATABASE burgers;
USE burgers;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	text varchar(255) NOT NULL,
        eaten boolean,
	PRIMARY KEY (id)
);
