# MERN Stack Blog App

Full stack blog application that allows a user to sign up for an account and manage their blog content. 

- As a writer, you can login into the system so you can have access to your blog posts.
- As a writer, you can logout of the system
- As a writer, you can publish new blog entries.
- As a writer, you can edit your existing blog entries.
- As a writer, you can delete an existing blog entry.
- As a reader, you can read all the entries of a blog, regardless of whether logged in
- As a reader, you can comment on all the entires of a blog, regardless of being logged in.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`

- In your `.env` add your `MONGODBURL` and `JWTSECRET` (see sample.env)

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

### Packages- Client Side

- `axios`
- `mdbreact`
- `react-bootstrap`
- `react-router-dom`
- `sweetalert`

### Packages- Server Side

- `bcryptjs`
- `concurrently`
- `cookie-parser`
- `cookie-session`
- `cors`
- `express`
- `jsonwebtoken`
- `moment`
- `mongoose`
- `passport`
- `passport-jwt`
- `validator`
