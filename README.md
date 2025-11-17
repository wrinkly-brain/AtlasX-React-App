
# Web Development Cookbook

This website is a basic front-end conference app that allows users to log in as either a user or an admin, both having varying permissions.




## Live Demo

Hosted on [Netlify](example.com)


## Deployment Notes

This website is built with Vite and deployed to Netlify. 

For proper routing, a `_redirects` file is included in `public/` to handle SPA navigation.


## Features

- Uses localStorage to maintain user status across pages
- Handles errors in a user-friendly way
- Permissions vary across users based on role
## Tech Stack

- HTML, JavaScript
- React.js, Bootstrap


## Usage

Clone the project

```bash
  git clone https://github.com/wrinkly-brain/AtlasX-React-App.git
```

Go to the project directory

```bash
  cd /AtlasX-React-App
```

Install Dependencies
```bash
  npm i
```

Start the server

```bash
  npm run dev
```
Once the application has opened, you can log in as a user or an admin.

#### User Credentials:
Username: `user@example.com`
Password: `testing123`

#### Admin Credentials:
Username: `admin@example.com`
Password: `testing123`


## How It Works

Conference items, stored client-side, are dynamically displayed with React components. `ProfileContext` and `ProfileProvider` handle user login status and role across pages with local storage. Admins are given the ability to add and remove conference sessions.
## Author

Created by Jonas Mast

