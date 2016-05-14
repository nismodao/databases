CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  P_Id int NOT NULL,
  roomname varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  messages varchar(255) NOT NULL
  /* Describe your table here.*/
);

/* Create oher tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

