--
-- Drop Tables
--
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS sport;
DROP TABLE IF EXISTS team; 
DROP TABLE IF EXISTS venue;
DROP TABLE IF EXISTS matchtime;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE sport(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE team(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    _sportname VARCHAR(50) NOT NULL,
    FOREIGN KEY (_sportname) REFERENCES sport(name) ON DELETE cascade
);  

CREATE TABLE venue(
    id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    location VARCHAR(255) NOT NULL
); 

CREATE TABLE match(
    id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date date NOT NULL,
    day_of_week VARCHAR (20) NOT NULL,
    time time NOT NULL,
    _sportname VARCHAR(50) NOT NULL,
    _venuename VARCHAR(255) NOT NULL,
    _teamname_A VARCHAR(100) NOT NULL,
    _teamname_B VARCHAR(100) NOT NULL,
    FOREIGN KEY (_sportname) REFERENCES sport(name) ON DELETE cascade,
    FOREIGN KEY (_venuename) REFERENCES venue(name) ON DELETE cascade,
    FOREIGN KEY (_teamname_A) REFERENCES team(name) ON DELETE cascade,
    FOREIGN KEY (_teamname_B) REFERENCES team(name) ON DELETE cascade
);


   