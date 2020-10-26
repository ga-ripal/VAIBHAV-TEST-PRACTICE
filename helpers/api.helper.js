const { response } = require('express');
const GLOBAL = require('../constants/global.constant');

const success = (res,data={},message='')=>{
    return res.status(GLOBAL.STATUS_CODE.SUCCESS).json({
        success:true,
        message,
        data
    })
}

const failure = (res,err=[], message='')=>{
    return res.failure(GLOBAL.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        success:false,
        message,
        err
    })
}

module.exports ={
    success,
    failure
}