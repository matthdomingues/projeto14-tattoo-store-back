import db from "../db.js";
import { tattoSchema } from "../schemas/schema.js";

// envio das tatuagens - tipo 1 ~ 4
export async function getPortfolio(req, res) {

    const idArtist = Number(req.params.id);

    try {
        const artistPortfolio = await db.collection('portfolio').find({ id: idArtist }).toArray();
        res.send(artistPortfolio);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };

};

export async function postTattoo(req, res) {

    const newTattoo = req.body;

    const validation = tattoSchema.validate(newTattoo);

    if (validation.error) {
        return res
            .status(422)
            .send(validation.error.details.map(detail => detail.message));
    };

    try{
        const existente = await db.collection('portfolio').findOne({ photo: newTattoo.photo });

        if (!existente) {
            await db.collection('portfolio').insertOne(newTattoo);
            return res.sendStatus(201);
        } else {
            return res.sendStatus(409);
        };

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    };
};


