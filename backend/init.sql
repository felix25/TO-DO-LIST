/*
* CREATE DATA BASE
*/
CREATE DATABASE todo_list;
CREATE TABLE usuario (
  ID SERIAL PRIMARY KEY,
  firt_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email  VARCHAR(255) NOT NULL,
  pwd  VARCHAR(255) NOT NULL,
);

/*
* REGISTER DATA TABLE USUARIO
*/
INSERT INTO usuario (firt_name, last_name,full_name,email,pwd)
VALUES  ('alberto', 'luis','felix magallanes','felix_1108@hotmail.com','123456');


/*
* CREATE TABLE TAREAS
*/
CREATE TABLE tareas (
  ID SERIAL PRIMARY KEY,
  descripcion VARCHAR(255) NOT NULL,
  status varchar(20) NOT NULL,
  fecha date NOT NULL
);
/*
* REGISTER DATA TABLE TAREAS
*/
INSERT INTO tareas (descripcion, status)
VALUES  ('Javascript Leer', 'pending','2019-10-31');