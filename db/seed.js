const Lesson = require('../models/Lesson')
const User = require('../models/User')
const lessonData = require('./lessonData.json')
const userData = require('./userData.json')


Lesson.deleteMany({}).then(() => {
  return Lesson.collection.insertMany(lessonData)
}).then(() => {
  process.exit()
})

User.deleteMany({}).then(() => {
  return User.collection.insertMany(userData)
}).then(() => {
  process.exit()
})