import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
export default app;

// Midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes

import usersRoute from './routes/users.routes.js';
import petsRoute from './routes/pets.routes.js';
import servicesRoute from './routes/services.routes.js';

app.use(usersRoute);
app.use(petsRoute);
app.use(servicesRoute);
