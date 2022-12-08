const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./route/route.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://hariprasadcm:harIprasad@cluster0.ahvii9p.mongodb.net/hariprasadcm08-DB", { useNewUrlParser: true })
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})