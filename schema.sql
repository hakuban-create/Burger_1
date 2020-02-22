### Schema
drop database if exists burger1;
CREATE DATABASE burger1;
USE burger1;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
    deleted varchar(1),
	PRIMARY KEY (id)
);