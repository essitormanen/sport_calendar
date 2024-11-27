--
-- Drop Tables
--
SET foreign_key_checks = 0;
DROP TABLE IF EXISTS sport;
DROP TABLE IF EXISTS team; 
DROP TABLE IF EXISTS venue;
DROP TABLE IF EXISTS event;
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
    name VARCHAR(100) NOT NULL UNIQUE
    -- _sportname VARCHAR(50) NOT NULL,
    -- FOREIGN KEY (_sportname) REFERENCES sport(name) ON DELETE cascade
);  

CREATE TABLE venue(
    id INT  NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
    -- location VARCHAR(255) NOT NULL {/*doesn't apply in any parts of the code so it isn't needed*/}
); 

CREATE TABLE event(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    date VARCHAR(20) NOT NULL,
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


INSERT INTO sport (name)
VALUES ("Football"),
       ("Basketball"),
       ("Ice Hockey");

INSERT INTO team (name)
VALUES ("Liverpool"),
       ("Arsenal"),
       ("Knicks"),
       ("Sharks"),
       ("Pittsburgh Penguins"),
       ("Anaheim Ducks");

INSERT INTO venue (name)
VALUES ("Wembley Stadium"),
       ("London Stadium"),
       ("Madison Square Garden"),
       ("United Center"),
       ("Matthews Arena");

INSERT INTO event (date, time, _sportname, _venuename, _teamname_A, _teamname_B)
VALUES ("2024-11-11", "11:00:00", "Football", "Wembley Stadium", "Liverpool", "Arsenal"),
       ("2024-11-15", "19:00:00", "Basketball", "Madison Square Garden", "Knicks", "Sharks"),
       ("2024-11-23", "18:00:00", "Ice Hockey", "Matthews Arena", "Pittsburgh Penguins", "Anaheim Ducks");