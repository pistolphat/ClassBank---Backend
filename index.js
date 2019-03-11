const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// app.use('/', classController)





app.listen(3000, () => {
  console.log("Server running on Port 3000");
});