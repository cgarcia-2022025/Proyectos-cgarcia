import express from "express";
import { register, login, update, deleteU } from './user.controller.js';

const api = express.Router();

api.post('/register', register)
api.post('/login', login)
api.put('/update/:id', update)
api.delete('/delete/:id', deleteU)

export default api