const Joi = require("joi");

const schema = {
    LOGIN: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
    REGISTER: Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().min(5).required(),
        password: Joi.string().required(),
    }),
};

exports.validateBody = (type) => {
    return (req, res, next) => {
        const option = { abortEarly: false };

        const { error } = schema[type].validate(req.body, option);

        if (error) {
            const errors = error.details.reduce((acc, { path, message }) => {
                return { ...acc, [path.join("-")]: message };
            }, {});

            return res.status(400).send({ errors });
        }

        next();
    };
};
