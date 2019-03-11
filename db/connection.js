const mongoose = require("mongoose");

// MLAB_URL 
// heroku config:set MLAB_URL=mongodb://user123:user123@ds121268.mlab.com:21268/classbank
// heroku config:set MLAB_URL=mongodb://<your_user_login>:<your_user_password>@ds015760.mlab.com:15760/<your_db_name>

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/Lessons");
}

//enable Promise functions
mongoose.Promise = Promise;

//Export mongoose
module.exports = mongoose;