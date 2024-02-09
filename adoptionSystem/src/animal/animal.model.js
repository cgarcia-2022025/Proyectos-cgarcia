import mongoose, { trusted } from "mongoose";

const animalSchema = mongoose.Schema({
    namePet: {
        type: String,
        required: true
    },
    keeper: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'dueño'
        },
    kindOfAnimal: {
        type: String
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
}) 

export default mongoose.model('animal',animalSchema)