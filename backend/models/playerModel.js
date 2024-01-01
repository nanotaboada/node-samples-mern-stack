import mongoose from "mongoose";

// https://mongoosejs.com/docs/schematypes.html

const playerSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: false,
        },
        squadNumber: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        abbrPosition: {
            type: String,
            required: false,
        },
        team: {
            type: String,
            required: false,
        },
        league: {
            type: String,
            required: false,
        },
        starting11: {
            type: Boolean,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Player = mongoose.model('Player', playerSchema);
