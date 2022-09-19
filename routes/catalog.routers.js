import { Router } from "express";
import { getPortfolio, postTattoo } from "../controllers/catalog.controller.js";

const catalogRouter = Router();

// envio de lista de tatuagens
catalogRouter.get("/portfolio/:id", getPortfolio);
catalogRouter.post("/portfolio", postTattoo);

export default catalogRouter;