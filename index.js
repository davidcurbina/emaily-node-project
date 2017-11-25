const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI);
const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,  //Lasts 30 days
    keys:[keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Functions returning routes requiring app
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

//Route React client properly in prod
if(process.env.NODE_ENV = 'production'){
  //Load js and css files
  app.use(express.static('client/build'));
  
  const path = require('path');
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);