import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string()
        .min(1)
        .max(20)
        .required(),
    body: Joi.string()
        .min(1)
        .max(255)
        .required(),
})

export {
    commentValidator
}