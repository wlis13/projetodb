const express = require('express');
const peopleGet = require('./routes/PeopleGet')
const peoplePost = require('./routes/peoplePost');
const peoplePut = require('./routes/PeoplePut');
const peopleDelete = require('./routes/PeopleDelete');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use('/people', peopleGet);
app.use('/people', peoplePost);
app.use('/people', peoplePut);
app.use('/people', peopleDelete);

module.exports = app;