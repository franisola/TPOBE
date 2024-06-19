import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
export default app;

// Midlewares
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes

import usersRoute from './routes/users.routes.js';
import petsRoute from './routes/pets.routes.js';
import servicesRoute from './routes/services.routes.js';
import commentsRoute from './routes/comments.routes.js';
import contractsRoute from './routes/contracts.routes.js';

app.use(usersRoute);
app.use(petsRoute);
app.use(servicesRoute);
app.use(commentsRoute);
app.use(contractsRoute);



app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	return res.status(statusCode).json({
		success: false,
		message,
		statusCode,
	});
});