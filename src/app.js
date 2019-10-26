import express from 'express';
import { MongoClient } from 'mongodb'; 
import { database } from './config';

const app = express();

MongoClient.connect(database.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((client) => {
        const db = client.db(database.dbName);
        app.locals.db = db;
    })
    .catch(error => {
        throw error;
    });

app.use('/', (req, res, next) => {
    res.send(':)');
});

app.listen(3000, () => {
    console.log('App listening');
});