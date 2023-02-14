import Joi from "joi"

const carValidator = Joi.object({
    brand: Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required(),

    price: Joi.number()
        .min(0)
        .max(999999)
        .required(),

    year: Joi.number()
        .min(1950)
        .max(new Date().getFullYear())
        .required()
})

export {
    carValidator
}