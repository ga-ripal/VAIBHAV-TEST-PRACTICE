const apiHelper = require('../helpers/api.helper')
const GLOBAL = require('../constants/global.constant')
const joiMiddleware = (schema)=>{
    return (req,res,next)=>{
        const result = schema.validate(req.body)
        if(result.error){
            const {details } = result.error
            const Message = details.map((i)=>i.Message).join(',')
            return apiHelper.failure(res,[],Message,GLOBAL.STATUS_CODE.BAD_REQUEST)
        }
        next()
    }
}
module.exports = joiMiddleware