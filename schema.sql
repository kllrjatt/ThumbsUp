DROP DATABASE IF EXISTS thumbscheck;

CREATE DATABASE IF NOT EXISTS thumbscheck;

USE thumbscheck;

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.
 */


-- DROP TABLE users;
-- DROP TABLE thumbs;
-- DROP TABLE questions;
-- DROP TABLE lectures;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30)  NOT NULL,
  last_name VARCHAR(30)  NOT NULL,
  gmail VARCHAR(30) NOT NULL,
  user_type ENUM("STUDENT", "INSTRUCTOR") NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE thumbs (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  thumb_value INT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE MCQAnswers (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  MCQ_value VARCHAR(5) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  lectureId INT NOT NULL,
  average_thumb_question DEC(4,2),
  MCQ_responses VARCHAR(100),
  PRIMARY KEY (ID)
);

CREATE TABLE lectures (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  average_thumb_lecture DEC(4,2),
  MCQ_responses VARCHAR(100),
  PRIMARY KEY (ID)
);


INSERT INTO users (first_name, last_name, gmail, user_type) VALUES ("Nick", "Akey", "nicktheflanders@gmail.com", "INSTRUCTOR");
INSERT INTO users (first_name, last_name, gmail, user_type) VALUES ("Karina", "Dalca", "karinadalca@gmail.com", "INSTRUCTOR");
INSERT INTO users (first_name, last_name, gmail, user_type) VALUES ("Gunpreet", "Singh", "gunpreetskhosa@gmail.com", "INSTRUCTOR");
INSERT INTO users (first_name, last_name, gmail, user_type) VALUES ("Jake", "Gober", "jgober96@gmail.com", "INSTRUCTOR");
