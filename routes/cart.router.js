import { Router } from "express";
import { addCart, getCart } from "../controllers/cart.controller.js";

const cartRouter = Router()

//Adicionar itens na collection cart
cartRouter.post('/cart', addCart);
//Pegar items da tela de checkout
cartRouter.get('/cart/:id', getCart);

export default cartRouter;