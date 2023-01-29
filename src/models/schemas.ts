import Joi from "joi";

export const GameSchema = Joi.object({
    name: Joi.string().required()
})