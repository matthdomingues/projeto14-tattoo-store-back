import db from "../db.js";

// envio das tatuagens - tipo 1 ~ 4
export async function getTattoo(req, res) {
    try {
        const artistOne = await db.collection('portfolio').find({ artist: 1 }).toArray();
        res.send(artistOne);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };

    try {
        const artistTwo = await db.collection('portfolio').find({ artist: 2 }).toArray();
        res.send(artistTwo);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };

    try {
        const artistThree = await db.collection('portfolio').find({ artist: 3 }).toArray();
        res.send(artistThree);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };

    try {
        const artistFour = await db.collection('portfolio').find({ artist: 4 }).toArray();
        res.send(artistFour);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };
};

