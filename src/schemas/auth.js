import Joi from 'joi';

export const registerSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": "email la truong bat buoc",
        "string.email": "email ko hop le",
        "string.empty": "email khong duoc de trong"

    }),
    password: Joi.string().min(8).required().messages({
        "any.required": "pass la truong bat buoc",
        "string.min": "pass co it nhat {#limit} ki tu",
        "string.empty": "pass khong duoc de trong"
    })
})
