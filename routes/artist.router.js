import { Router } from "express";

import { postArtist, getArtists, getArtist } from "../controllers/artist.controller.js";

const artistRouter = Router();

//Registro novo artista
artistRouter.post('/artist', postArtist);
artistRouter.get('/artist', getArtists);
artistRouter.get('/artist/:id', getArtist);

export default artistRouter;