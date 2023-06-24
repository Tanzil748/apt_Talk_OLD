# AptTalk

AptTalk is a community-oriented application that primarily focuses on real estate. It provides a social media spin to traditional real estate websites, where users can interact and discuss with each other about everything related to real estate. Planning a community event? Need general advice on home decor? Want to see the forum's consensus about certain neighborhoods? AptTalk is an all in one solution!

## Tech Stack

**Client:** React, React Query, CSS

**Server:** Node, Express, PostgreSQL

## Demo

Insert gif or link to demo

## Deployment

Clone this repository and install npm packages on both client & server side.

```bash
  npm install
```

Then, to deploy this project run the following on client & server terminal:

```bash
  npm start
```

## Database Schema

#### Users

| Property     | Type         | Description                              |
| ------------ | ------------ | ---------------------------------------- |
| id           | Big Serial   | id for user account (default field)      |
| userName     | Varchar(9)   | username                                 |
| email        | Varchar(50)  | user email                               |
| userPassword | Varchar(200) | user password                            |
| createdAt    | TimeStamp    | time of account creation (default field) |

#### Posts

| Property     | Type         | Description                        |
| ------------ | ------------ | ---------------------------------- |
| id           | Big Serial   | post id (default field)            |
| postContent  | Text         | user post content                  |
| picture      | Varchar(300) | user post image                    |
| title        | Varchar(100) | user post title                    |
| postAuthorId | Big Int      | foreign key attached to users "id" |

#### Comments

| Property       | Type         | Description                        |
| -------------- | ------------ | ---------------------------------- |
| id             | Big Serial   | comment id (default field)         |
| commentContent | Varchar(300) | comment text                       |
| commentUserId  | Big Int      | foreign key attached to users "id" |
| commentPostId  | Big Int      | foreign key attached to posts "id" |

#### Bookmarks

| Property         | Type       | Description                        |
| ---------------- | ---------- | ---------------------------------- |
| id               | Big Serial | bookmark id (default field)        |
| bookmark_post_id | Big Int    | foreign key attached to posts "id" |
| bookmark_user_id | Big Int    | foreign key attached to users "id" |

## Future Features

In future versions, I plan on implementing a variety of features:

- Adding/Deleting followed users to a follow list (unique for each user)
- Granting user's the ability to edit their own posts and comments
