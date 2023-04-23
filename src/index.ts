import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';
const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(44303, () => {
    console.log("server running on https://localhost/44303/");
});

//mongodb+srv://ilyas:<password>@cluster0.gxlyago.mongodb.net/?retryWrites=true&w=majority
const MONGO_URL = 'mongodb+srv://ilyas:hassan12%21%40@cluster0.gxlyago.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());