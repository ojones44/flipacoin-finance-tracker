// Package imports
import express from 'express';
import dotenv from 'dotenv';

// Database
import connectDB from './connect/db.js';

// Routes
import endpoint from './data/endpoints.js';
import authRoutes from './routes/authRoutes.js';
import monthRoutes from './routes/monthRoutes.js';

// Middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

// Parse incoming requests as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	// throw new Error('Test error');
	res.send('Lets go!');
});

// Any time these routes are hit, route file is called
app.use(endpoint.auth, authRoutes);
app.use(endpoint.month, monthRoutes);

// Looking for route not matched errors
app.use(notFoundMiddleware);

// Looking for errors inside existing route
app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
