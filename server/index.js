import express from 'express';
import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});

import dbConnection from './src/db/dbConnection.js';
import app from './app.js';


dbConnection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on PORT ${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.error(`Something went wrong while connecting to the database: ${err.message}`);
    process.exit(1); 
})