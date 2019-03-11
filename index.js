const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

app.use(passport.initialize())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const lessonController = require('./controllers/lesson.js')
const userController = require('./controllers/user.js')


app.use('/lesson', lessonController)
app.use('/users', userController)


app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })


// app.listen(3000, () => {
//   console.log("Server running on Port 3000");
// });