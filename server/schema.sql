CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  P_Id INT AUTO_INCREMENT PRIMARY KEY,
  user varchar(255) NOT NULL
  /* Describe your table here.*/
);

CREATE TABLE rooms (
  R_Id INT AUTO_INCREMENT,
  room varchar(255) NOT NULL,
  PRIMARY KEY (R_Id)
  /* Describe your table here.*/
);

CREATE TABLE messages (
  M_Id INT AUTO_INCREMENT,
  message varchar(255) NOT NULL,
  user INT,
  room INT,
  PRIMARY KEY(M_Id),
  FOREIGN KEY(user) REFERENCES users(P_Id),
  FOREIGN KEY(room) REFERENCES rooms(R_Id)
);



/* Create oher tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

