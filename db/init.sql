CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
password TEXT NOT NULL,
profile_pic TEXT NOT NULL
);

INSERT INTO users (username, password, profile_pic)
VALUES ('colinsmith', 'nutz', 'colin.jpeg');

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    img TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INT REFERENCES users(id)
);

INSERT INTO post (title, img, content, author_id)
VALUES 
('forehead', 'forehead.jpeg', 'head', 1);

ALTER TABLE users 
ADD COLUMN picture TEXT;