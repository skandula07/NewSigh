import express from 'express';
import cors from 'cors';
import helmet from 'helment';
import path from 'path';

const app = express();
app.use (cors());
app.use (helmet());
app.use (express.json());

app.get("/", (req, res) => {
    res.sendFile(path.resolve() + '/index.html');
})

