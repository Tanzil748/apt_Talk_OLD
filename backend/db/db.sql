CREATE DATABASE aptTalk; -- I created database

-- User table
CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    userName VARCHAR(9) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    userPassword VARCHAR(200) NOT NULL,
    createdAt DATE
);

-- Post table
CREATE TABLE posts(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    postContent TEXT NOT NULL,
    picture VARCHAR(100),
    createdAt DATE,
    postAuthorId BIGINT REFERENCES users(id) NOT NULL --foreign key
);

-- Comment Table
CREATE TABLE comments(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    commentContent VARCHAR(300) NOT NULL,
    createdAt DATE,
    commentUserId BIGINT REFERENCES users(id) NOT NULL, --foreign key
    commentPostId BIGINT REFERENCES posts(id) NOT NULL --foreign key
);

-- Follow List Table
CREATE TABLE followers(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    followerId BIGINT REFERENCES users(id) NOT NULL, --foreign key (users in follow list)
    followedUserId BIGINT REFERENCES users(id) NOT NULL--foreign key
);

-- Post Reaction Table
CREATE TABLE reactions(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    reactionPostId BIGINT REFERENCES posts(id) NOT NULL, --foreign key
    reactionUserId BIGINT REFERENCES users(id) NOT NULL --foreign key
);