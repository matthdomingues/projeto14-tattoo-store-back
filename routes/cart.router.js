import { Router } from "express";
import { addCart, deleteCart, deleteItem, getCart } from "../controllers/cart.controller.js";

const cartRouter = Router()

//Adicionar itens na collection cart
cartRouter.post('/cart', addCart);
//Pegar items da tela de checkout
cartRouter.get('/cart/:id', getCart);
cartRouter.delete('/cart/:id', deleteItem)
cartRouter.delete('/checkout/:id', deleteCart)

export default cartRouter;