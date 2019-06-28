# Classbank - API

## API (Back-end)

This is the back-end repository for a full-stack application called Classbank. Click [here](https://classbank.herokuapp.com/lesson
) for API access.

### Front End

You can find the front-end repository [here](https://github.com/pistolphat/Classbank).

Here is the deployed [website](http://classbank.surge.sh).

![](planning/ClassbankSS.png)

## Technology Used

This full stack application utilized M.E.R.N stack.

- Back-end
  - Node.js
  - Express
  - MongoDB / Mongoose
  - CORS (Cross-Origin Resource Sharing)

* Postman - for testing CRUD functionality

* Heroku & MLABS (Back-end Deployment)

## User Stories

A User must Signup or Login for access.

A User can view all data within the database linked.

A User can add, update, or delete an entry. (Work in progress)

A User can logout, wiping all current User session, until next sign on.

## Getting Started

To get started, ```clone``` this repository and ```cd``` into this new directory.

1. Install the dependencies using:  ```npm install```
2. Make sure to enable your server in the background:  ```mongod```
3. To access the data, seed the data using the command:  ```node db/seed.js```
4. To launch the application using the command:  ```node index.js```

