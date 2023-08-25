import express from 'express';
import bodyParser from 'body-parser';
import userRouter from "./route/userRouter.js";
import client from './config/connection.js';


const app=express();
app.use(bodyParser.json());
app.use('/api',userRouter);

app.listen(8000,()=>{
        client.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Error connecting to the database', err);
    });
    console.log('server is running');
})