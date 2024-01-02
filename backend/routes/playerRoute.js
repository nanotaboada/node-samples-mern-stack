import express from 'express';
import { Player } from '../models/playerModel.js';

/* ------------------------------------------------------------------------------------------------
    Routes
------------------------------------------------------------------------------------------------ */

const router = express.Router();

/* ------------------------------------------------------------------------------------------------
    HTTP POST
------------------------------------------------------------------------------------------------ */

router.post('/players', async (request, response) => {
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

router.get('/players', async (request, response) => {
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

router.get('/players/:id', async (request, response) => {
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

router.put('/players/:id', async (request, response) => {
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

router.delete('/players/:id', async (request, response) => {
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

export default router;