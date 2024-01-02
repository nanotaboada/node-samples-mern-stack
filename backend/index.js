import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import playerRoute from './routes/playerRoute.js';
import cors from 'cors';

/* ------------------------------------------------------------------------------------------------
    Application
------------------------------------------------------------------------------------------------ */

/*
    Express.js is a lightweight and flexible Node.js web application framework that simplifies the
    process of building robust and scalable web applications. Express.js provides a set of features
    for building web and mobile applications quickly.
*/
const app = express();

/* ------------------------------------------------------------------------------------------------
    Middlewares
------------------------------------------------------------------------------------------------ */

/*
    In Express.js, app.use(express.json()) is middleware that is used to parse incoming requests
    with JSON payloads. This middleware is part of the Express framework and is specifically
    designed to handle JSON-encoded data in the request body.
    
    When a client sends a request with a JSON payload, such as in a POST or PUT request where data
    is sent in the request body, the server needs to parse and process that JSON data.
    The express.json() middleware parses the incoming JSON data and makes it available in the
    request.body object, which can then be accessed by your route handlers.
*/
app.use(express.json());

/*
    Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that
    restricts webpages from making requests to a different domain than the one that served the
    original webpage. This restriction is known as the same-origin policy and is in place to
    prevent potential security vulnerabilities.

    When building web applications using Express.js as the backend server and making requests from
    a frontend application served from a different domain, you might encounter CORS issues.
    Express.js provides a middleware called 'cors' that helps handle CORS-related concerns by
    enabling or configuring Cross-Origin Resource Sharing.
*/
app.use(cors());
/*
app.use(
    cors({
        origin: 'http://localhost:9000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
);
*/

/*
    In Express.js, a Router is a middleware that allows you to group route handlers and related
    functionality together. It helps in organizing and modularizing your application by defining
    routes and handling them separately, making the codebase more maintainable.
*/
app.use('/', playerRoute);

/* ------------------------------------------------------------------------------------------------
    Database
------------------------------------------------------------------------------------------------ */

/* 
    Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a
    higher-level, schema-based abstraction over the MongoDB Node.js driver, making it easier for
    developers to interact with MongoDB databases in a structured manner.
*/
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('App connected to MongoDB database')
        app.listen(process.env.PORT, () => {
            console.log(`App listening to port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
