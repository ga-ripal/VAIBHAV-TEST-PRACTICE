const Joi = require('@hapi/joi');
const createUser = {
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.valid().email().required()
}
const updateUser = {
    firstName:Joi.string(),
    lastName:Joi.string(),
    email:Joi.valid().email()
}
module.exports = {
    createUser,
    updateUser
}