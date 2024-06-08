require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credential');
const PORT = process.env.PORT || 3500;

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',require('./routes/student'));

app.all('*',(req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({'error': '404 file not found'});
    } else {
        res.type('txt').send('file not found');
    }
});


app.listen(PORT, () =>{
    console.log(`Server is running on port number ${PORT}`)
});