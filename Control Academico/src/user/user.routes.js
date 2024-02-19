import express from 'express'
import { validateJwt, isAdmin } from '../middleware/validate-jwt.js';
import { test, register, login, updateSt, updateTh, deleteU } from './user.controller.js';

const api = express.Router();

api.get('/test', test)
api.post('/register', register)
api.post('/login', login)
api.put('/updateSt/:id', [validateJwt], updateSt)
api.put('/updateTh/:id', [validateJwt, isAdmin], updateTh)
api.delete('/deleteU/:id', [validateJwt], deleteU)
export default api