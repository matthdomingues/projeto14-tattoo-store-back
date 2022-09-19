import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { loginSchema, registerSchema } from "../schemas/schema.js";

export async function SignUp(req, res) {
    console.log(db);
    const { name, email, password, confirmPassword } = req.body;

    const register = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    const validation = registerSchema.validate(register, { abortEarly: false });

    if (validation.error) {
        return res
            .status(422)
            .send(validation.error.details.map(detail => detail.message));
    };

    try {
        const passwordHash = bcrypt.hashSync(password, 10);

        const newUser = { name, email, password: passwordHash };

        const existente = await db.collection('users').findOne({ email });

        if (!existente) {
            await db.collection('users').insertOne(newUser);
            return res.sendStatus(201);
        } else {
            return res.sendStatus(409);
        };

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    };
};

export async function SignIn(req, res) {
    const { email, password } = req.body;

    const validation = loginSchema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        return res
            .status(422)
            .send(validation.error.details.map(detail => detail.message));
    };

    try {
        const user = await db.collection('users').findOne({ email });

        if (!user) return res.sendStatus(404);

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();
            await db.collection("sessions").insertOne({ token, userId: user._id, token });
            res.status(200).send({ token, name: user.name, id: user._id });
        } else {
            res.sendStatus(404);
        };

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    };
};