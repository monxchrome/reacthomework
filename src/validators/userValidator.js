import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string()
        .min(2)
        .max(25)
        .required(),
    username: Joi.string()
        .min(5)
        .max(15)
        .required(),
    email: Joi.string()
        .min(3)
        .email({ tlds: { allow: false } })
        .required(),
})

export {
    userValidator
}