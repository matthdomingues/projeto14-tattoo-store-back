import joi from "joi";
import joiObjectid from "joi-objectid";


export const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const portfolioSchema = joi.object({
    artist: joi.number().required(),
    url: joi.string().required()
});

export const artistSchema = joi.object({
    id: joi.number().required(),
    name: joi.string().required(),
    photo: joi.string().required(),
    icon: joi.string().required(),
    description: joi.string().required(),
    specialty: joi.string().required(),
    star_1: joi.number().required(),
    star_2: joi.number().required(),
    star_3: joi.number().required(),
    star_4: joi.number().required(),
    star_5: joi.number().required()
});

export const tattoSchema = joi.object({
    id: joi.number().required(),
    photo: joi.string().required(),
    price: joi.number().required()
});

const myJoiObjectId = joiObjectid(joi);

export const cartSchema = joi.object({
    id: myJoiObjectId().required(),
    artist: joi.string().required(),
    photo: joi.string().required(),
    price: joi.string().required()
})