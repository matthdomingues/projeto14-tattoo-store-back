import db from "../db.js";
import { artistSchema } from "../schemas/schema.js"; 

export async function postArtist(req, res){

    const newArtist = req.body;

    const validation = artistSchema.validate(newArtist);

    if (validation.error) {
        return res
            .status(422)
            .send(validation.error.details.map(detail => detail.message));
    };

    try{
        const existente = await db.collection('artists').findOne({ id: newArtist.id });

        if (!existente) {
            await db.collection('artists').insertOne(newArtist);
            return res.sendStatus(201);
        } else {
            return res.sendStatus(409);
        };

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    };
    

}

export async function getArtists(req, res){
    
    const artists = await db.collection('artists').find().toArray();
    res.send(artists);
}

export async function getArtist(req, res){
    
    const idArtist = Number(req.params.id);

    const artist = await db.collection('artists').findOne({id: idArtist})
    ;
    res.send(artist);
}