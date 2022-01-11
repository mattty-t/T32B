import express from 'express';
const app = express();
import dotenv from 'dotenv';
import 'express-async-errors';
import morgan from 'morgan';

dotenv.config();

// db and authenticateUser

import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

if(process.env.NODE-ENV !== 'production'){
  app.use(morgan('dev'))
}
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/api/v1', (req, res) => {
  res.send({ msg: 'API' });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
// const start = async () => {
//   try {
//     await connectDB;
//   } catch (error) {}
