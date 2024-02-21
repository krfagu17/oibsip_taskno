import express from 'express';
import { home, login, register } from './authController.js';

const router = express.Router();

router.post('/login', login);

router.post('/register',register);

router.post('/home', home);

export default router;