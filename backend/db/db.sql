CREATE DATABASE aptTalk; -- I created database

-- User table
CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    userName VARCHAR(9) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    userPassword VARCHAR(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post table
CREATE TABLE posts(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    postContent TEXT NOT NULL,
    picture VARCHAR(300),
    title VARCHAR(100) NOT NULL,
    postAuthorId BIGINT REFERENCES users(id) NOT NULL --foreign key
);

-- Comment Table
CREATE TABLE comments(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    commentContent VARCHAR(300) NOT NULL,
    commentUserId BIGINT REFERENCES users(id) NOT NULL, --foreign key
    commentPostId BIGINT REFERENCES posts(id) NOT NULL --foreign key
);

-- Follow List Table
CREATE TABLE followers(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    followerId BIGINT REFERENCES users(id) NOT NULL, --foreign key (users in follow list) => only way to follow is if loggedUser manually press follow
    followedUserId BIGINT REFERENCES users(id) NOT NULL--foreign key
);

-- Bookmark Table
CREATE TABLE bookmarks(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    bookmark_post_id BIGINT REFERENCES posts(id) NOT NULL, --foreign key
    bookmark_user_id BIGINT REFERENCES users(id) NOT NULL --foreign key
);

-- This is for adding new post
 INSERT INTO posts (postcontent, picture, postauthorid) VALUES ('loremblah blah', 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60', 60);
