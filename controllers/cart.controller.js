import db from "../db.js";
import { cartSchema } from "../schemas/schema.js";

export async function addCart(req, res){

    const newItem = req.body;

    const validation = cartSchema.validate(newItem);

    if (validation.error) {
        return res
            .status(422)
            .send(validation.error.details.map(detail => detail.message));
    };

    try{
        const existente = await db.collection('cart').findOne({ photo: newItem.photo });

        if (!existente) {
            await db.collection('cart').insertOne(newItem);
            return res.sendStatus(201);
        } else {
            return res.sendStatus(409);
        };

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    };
}

export async function getCart(req, res){
    
    const userId = req.params.id;

    const cart = await db.collection('cart').find({_id: userId}).toArray();
    res.send(cart);
}