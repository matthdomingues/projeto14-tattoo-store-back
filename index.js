import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routers.js';
import catalogRouter from './routes/catalog.routers.js';
import artistRouter from './routes/artist.router.js';
import cartRouter from './routes/cart.router.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(catalogRouter);
app.use(artistRouter);
app.use(cartRouter);

app.get('/status/', (req, res) => {
    res.sendStatus(200);
});

app.get('/status/:id', (req, res) => {
    res.send(req.params);
});

app.listen(process.env.PORT, () => console.log("SERVER IS ON!"));