//requirements
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/connectDB');
const app = express();


//middleware
app.use(cors());
app.use(express.json());

connectDB();

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    err? console.log(err) :
    console.log(`Server is running on port ${PORT}`);
});