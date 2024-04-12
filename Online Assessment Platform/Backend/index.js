const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Auth = require('./middleware/Auth.js')
const route = require('./routes/routes.js')
const authRoutes = require('./routes/authRoutes.js');
const db = require('./constants/db.js')
const http = require('http').Server(app)

app.use(express.json({limit:'2mb'}))
app.use(cors());
//app.use(express.limit(100000000));
app.use('/',route)
app.use('/auth',Auth);
app.use('/auth',authRoutes);

const port = 7000;
app.listen(port, () => {
    console.log("Server running on port number " + port);
});
