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



const Log = require('./models/log.js')


app.get('/logs', (req, res) => {
  Log.insertMany([
    {
      title: 'a',
      entry: 'a',
      shipIsBroken: true
    },

    {
      title: 'b',
      entry: 'b',
      shipIsBroken: true
    },
    {
      title: 'c',
      entry: 'c',
      shipIsBroken: false
    }
  ], (err, result) => {
    if (err) {
      console.log('ERROR', err);
    }
    else {
      console.log('RESULT', result)
      res.json(result)
    }
  })
})

//Find all
app.get('/Logs', (req, res) => {
  Log.find({}, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.json(result)
    }
  })
})


//BY ID
app.get('/logs', (req, res) => {
  Log.findById(req.query.id, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.json(result)
    }
  })
})


app.post('/logs', (req, res) => {

  var newLog = new Log(req.body)
  newLog.save((err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.json(result)
    }
  })
})

app.put("//logs/:id", (req, res) => {
  Log.updateOne(
    { title: req.query.title },
    {
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: req.body.shipIsBroken,
    },
    (result, error) => {
      if (error) {
        res.json(error);
      } else {
        res.json(result);
      }
    }
  );
});

app.delete('/logs', (req, res) => {
  Log.findByIdAndRemove(req.query.title, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.json(result)
    }
  })
})



