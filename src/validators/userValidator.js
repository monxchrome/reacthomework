import Joi from "joi"

const userValidator = Joi.object({
    username: Joi.string()
        .min(5)
        .max(12)
        .required(),
    name:Joi.string()
        .min(2)
        .max(20)
        .required(),
    email:Joi.string()
        .email({tlds: {allow: false}}),
})

export {
    userValidator
}