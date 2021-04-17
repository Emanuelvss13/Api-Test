const express = require('express');
const route = require('./routes/index');
require('./database/index');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(route);


app.listen(3000, () => {
    console.log('Up')
});
