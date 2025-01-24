import express from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(globalErrorHandler);

export default app;
