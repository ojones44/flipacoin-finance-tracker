// Package imports
import express from 'express';
import dotenv from 'dotenv';

// Database
import connectDB from './connect/db.js';

// Middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorMiddleware from './middleware/errorMiddleware.js';

// TODO: Need to setup collections in Mongo Atlas
// connectDB();

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
	// throw new Error('Test error');
	res.send('Lets go!');
});

// Looking for route not matched errors
app.use(notFoundMiddleware);

// Looking for errors inside existing route
app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
