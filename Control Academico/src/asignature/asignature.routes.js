import express from 'express';

import { newAsignature, editAsignature } from './asignature.controller.js'
import { validateJwt, isAdmin } from '../middleware/validate-jwt.js';

const api = express.Router();

api.post('/newAsignature', [validateJwt], newAsignature);

api.put('/editAsignature/:id', [validateJwt, isAdmin], validateJwt, editAsignature);

export default api