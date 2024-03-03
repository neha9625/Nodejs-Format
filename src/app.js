import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import requestIp from 'request-ip';
import env from'./config/env.js';
import route  from './routes/routes.js';

let baseURl = ['http://localhost:5173']
if (process.env.NODE_ENV !== 'development') {
  baseURl.push('http://localhost:5173');
}

const app = express();

app.use(requestIp.mw());
app.use(express.static('public'));

app.use(
  cors({
    credentials: true,
    origin: baseURl,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', route);
app.use('/health', async (request, response) => {
  response.json({
    message: `Server up and Running ${env.NODE_ENV}`,
  });
});

export default app;
