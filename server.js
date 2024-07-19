const express = require ('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://it22054722:manthi2001@cluster02.7rldnpw.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster02'

const connect = async() => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB')

    } catch(error) {
         console.log('MongoDB error:', error);
    }
};

connect();

const server = app.listen(port,host,() =>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api',router);