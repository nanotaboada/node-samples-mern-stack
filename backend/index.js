import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import { Player } from './models/playerModel.js';

/*
    Express.js is a lightweight and flexible Node.js web application framework that simplifies the
    process of building robust and scalable web applications. Express.js provides a set of features
    for building web and mobile applications quickly.
*/
const app = express();

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

/* ------------------------------------------------------------------------------------------------
    HTTP POST
------------------------------------------------------------------------------------------------ */

app.post('/players', async (request, response) => {
    try {
        if (
            !request.body.firstName ||
            !request.body.lastName ||
            !request.body.squadNumber ||
            !request.body.position
        ) {
            return response.status(400).send({
                message: 'Required: firstName, lastName, squadNumber, position',
            });
        } else {
            const player = {
                firstName: request.body.firstName,
                middleName: request.body.middleName,
                lastName: request.body.lastName,
                dateOfBirth: request.body.dateOfBirth,
                squadNumber: request.body.squadNumber,
                position: request.body.position,
                abbrPosition: request.body.abbrPosition,
                team: request.body.team,
                league: request.body.league,
                starting11: request.body.starting11,
            };
            const created = await Player.create(player);
            console.log(created);
            return response.status(201).send(created);
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
        });
    }
});

/* ------------------------------------------------------------------------------------------------
    HTTP GET
------------------------------------------------------------------------------------------------ */

app.get('/players', async (request, response) => {
    try {
        const players = await Player.find({});
        console.log(players);
        return response.status(200).json(players);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
        });
    }
});

app.get('/players/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const player = await Player.findById(id);
        console.log(player);
        return response.status(200).json(player);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
        });
    }
});

/* ------------------------------------------------------------------------------------------------
    HTTP PUT
------------------------------------------------------------------------------------------------ */

app.put('/players/:id', async (request, response) => {
    try {
        if (
            !request.body.firstName ||
            !request.body.lastName ||
            !request.body.squadNumber ||
            !request.body.position
        ) {
            return response.status(400).send({
                message: 'Required: firstName, lastName, squadNumber, position',
            });
        } else {
            const { id } = request.params;
            const updated = await Player.findByIdAndUpdate(id, request.body);
            console.log(updated);
            if(!updated) {
                return response.status(404).send({
                    message: 'Player not found',
                });
            } else {
                return response.status(200).send({
                    message: 'Player successfully updated',
                });
            }
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
        });
    }
});

/* ------------------------------------------------------------------------------------------------
    HTTP DELETE
------------------------------------------------------------------------------------------------ */

app.delete('/players/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deleted = await Player.findByIdAndDelete(id);
        console.log(deleted);
        if(!deleted) {
            return response.status(404).send({
                message: 'Player not found',
            });
        } else {
            return response.status(200).send({
                message: 'Player successfully deleted',
            });
        }
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
        });
    }
});

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
