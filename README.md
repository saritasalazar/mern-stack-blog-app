# MERN Stack Blog App

## User Story:

- As a writer, I can login into the system so I can have access to my blog posts.
- As a writer, I canlogout of the system
- As a writer, I can publish new blog entries.
- As a writer, I can edit my existing blog entries.
- As a writer, I can delete an existing blog entry.
- As a reader, I can read all the entries of a blog, regardless of whether I am logged in, so that I may easily access a writer's content.
- As a reader, I can comment on all the entires of a blog, regardless of whether I am logged in.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

- In your .env add your MONGODBURL and JWTSECRET (see sample.env)

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

### Packages- Client Side

- `yarn add axios`
- `yarn add mdbreact`
- `yarn add moment`
- `yarn add react-bootstrap`
- `yarn add react-router-dom`
- `yarn add sweetalert`

### Packages- Server Side

- `yarn add bcryptjs`
- `yarn add concurrently`
- `yarn add cookie-parser`
- `yarn add cookie-session`
- `yarn add cors`
- `yarn add express`
- `yarn add jsonwebtoken`
- `yarn add moment`
- `yarn add mongoose`
- `yarn add passport`
- `yarn add passport-jwt`
- `yarn add validator`
