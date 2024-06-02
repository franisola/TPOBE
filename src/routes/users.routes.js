import { Router } from 'express';
import { register, login, logout, profile, editProfile } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { authNotRequired } from '../middlewares/validate.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema, editProfileSchema } from '../schemas/user.schema.js';

const router = Router();

router.post('/register', authNotRequired, validateSchema(registerSchema), register);

router.post('/login', authNotRequired, validateSchema(loginSchema), login);

router.post('/logout', authRequired, logout);

router.get('/profile', authRequired, profile);

router.put('/profile', authRequired, validateSchema(editProfileSchema), editProfile);

export default router;
