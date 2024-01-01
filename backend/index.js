import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import { Player } from './models/playerModel.js';


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
        }
        const newPlayer = {
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
        const player = await Player.create(newPlayer);
        return response.status(201).send(player);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ 
            message: error.message
         });
    }
});

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
