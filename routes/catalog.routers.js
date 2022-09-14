import { Router } from "express";
import { getTattoo } from "../controllers/catalog.controller.js";

const catalogRouter = Router();

// envio de lista de tatuagens
catalogRouter.get("/portfolio", getTattoo);

export default catalogRouter;