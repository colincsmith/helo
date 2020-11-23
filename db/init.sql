CREATE TABLE users 
(
id SERIAL PRIMARY KEY, 
is_admin CHAR, 
username VARCHAR(50), 
password TEXT,
picture TEXT
);


CREATE TABLE post 
(
id SERIAL PRIMARY KEY, 
title VARCHAR(40), 
content VARCHAR(280), 
postPicture VARCHAR(200), 
user_id INT
);