[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)![Misk Logo](https://i.ibb.co/KmXhJbm/Webp-net-resizeimage-1.png)

# The Captain's Log

![Insert Pun Image here](https://i.imgflip.com/2174sq.jpg)

#### Learning Objectives

- Full CRUD app with a mongo database

#### Prerequisites

- JavaScript
- Express / Node
- Mongo / Mongoose

---

## Instructions

Every great captain, whether on the waters or in the skies, keeps a daily log. Let's build the perfect Captain's Log App for our extraordinary captains.

For this homework we want you to build a mongoose/express server, that has endpoints for each mongoose method you are using, this means two `GET` requests, one for all and one for each log, one `POST` request to create a new log, one `PUT` request to update a log, and one `DELETE` request to remove a single log.

This will require five endpoints, as listed below for you. Each endpoint will do something different with your Log model.

DON'T FORGET to export your models from their files, and to also bring them into your index.js for use with your apps routes.

### Set up

#### Restful Routes

These are the routes you should create, and the method you can use, don't be afraid to use other methods though, as long as they are not deprecated.

|  #  | Action  |    URL    | HTTP Verb |            mongoose method             |
| :-: | :-----: | :-------: | :-------: | :------------------------------------: |
|  1  |  Index  |   /logs   |    GET    |             `Log.find({})`             |
|  2  |  Show   | /logs/:id |    GET    |     `Log.findById(req.params.id)`      |
|  3  | Create  |   /logs   |   POST    |         `Log.create(req.body)`         |
|  4  | Update  | /logs/:id |    PUT    | `Log.findByIdAndUpdate(req.params.id)` |
|  5  | Destroy |   /logs   |  DELETE   |       `Log.findByIdAndRemove()`        |

<br />

First things first, run `npm install` to install all of the dependencies, they are already inside your package.json

1. `npm install`
1. `touch index.js`
1. Add this code to your index.js

```javascript
// Bring mongoose in by requiring it
const mongoose = require('mongoose')
// Bring express in by requiring it, then creating our app()
const express = require('express')
const app = express()

// Connect to our database running at localHost 27017, it will be called Log and mongo should create it for you.
mongoose.connect('mongodb://localhost:27017/Log', {
  // Deals with deprecated commands in Mongoose
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

// We need this to make our POST and PUT requests
app.use(express.json())

// Our base route to check that our app is working
app.get('/', (req, res) => {
  res.send(`We're in`)
})

// Our port variable
const PORT = process.env.PORT || 3000


// Telling our app to listen to port 3000
app.listen(PORT, () => {
  console.log(`Server on at port: ${3000}`)
})
```

DO NOT FORGET to use `nodemon index.js` to run your server

<br />

## `Log` Schema/Model

1. `mkdir models`
1. `touch models/log.js`
1. Use this Schema below

```javascript
// Requiring mongoose again to create our Schema/Model
const mongoose = require('mongoose')
console.log('This is working')

// Our Schema creation
const LogSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  entry: {
    type: String,
  },
  shipIsBroken: {
    type: Boolean,
    default: true,
  },
})

// We use the Schema to create a Model for mongoDB
const Log = mongoose.model('Log', LogSchema)
console.log(Log)

module.exports = Log
```

### **Schema Bonus** 1: Set shipIsBroken: Boolean as a default of true

### **Schema Bonus** 2: As a second argument to `mongoose.Schema()`, add `{ timestamps: true }`

**Use today's lesson as a guide on how to build out a CRUD API for `Log`.**

<br>

## Bonuses

1. The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
1. build out the 5 restful routes for foodlogs, include a new model with whatever properties make sense
1. have your update route redirect to show the page of the log that was edited
1. create a seed file and seed your database
1. if you have timestamps, figure out how to edit/display the edited date

## Super Bonus

**SUPER BONUS** - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' to the post, the data should be related in some way. Do your own research of how to set up a `one-to-many` relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google.

**SUPER BONUS** - Create a React front end and comsume a few of these endpoints!

---

_Copyright General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
