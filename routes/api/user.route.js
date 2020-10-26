const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const MODEL = require('../../constants/model.constant')
const User = require('../../models/user.model')
const ROUTES = require('../../constants/routes.constant')
const GLOBAL = require('../../constants/global.constant');
const ERROR_LITERAL = require('../../constants/error.literal.constant')
const joiMiddleware = require('../../middlewares/joi.middleware')
const apiHelper = require('../../helpers/api.helper')
const ERROR_LITERALS = require('../../constants/error.literal.constant')

router.post(`${ROUTES.CREATE_USER.URL}`, async(req,res,next)=>{
    try{
const {body } = req
const email = body.email
const isEmailExist = await User.find({email})
if(isEmailExist){
    return apiHelper.failure(res,[],ERROR_LITERALS.COMMON_MESSAGE.IS_EXISTS, GLOBAL.STATUS_CODE.BAD_REQUEST)
}
const userInstance =  new User({...body})
const user = userInstance.save()
if(user && Object.keys(user).length){
    return apiHelper.success(res,{user}, ERROR_LITERALS.CREATE_USER_SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MESSAGE.CATCH_ERROR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})

router.put(`${ROUTES.UPDATE_USER.URL}`, async(req,res,next)=>{
    try{
const {body } = req
const id = req.params
const isEmailExist = await User.find({id})
if(!isEmailExist){
    return apiHelper.failure(res,[],ERROR_LITERALS.COMMON_MESSAGE.NO_DATA_FOUND, GLOBAL.STATUS_CODE.BAD_REQUEST)
}
const user =await User.update({...body})
if(user && Object.keys(user).length){
    return apiHelper.success(res,{user}, ERROR_LITERALS.UPDATE_USER_SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MESSAGE.CATCH_ERROR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})

router.delete(`${ROUTES.DELETE_USER.URL}`, async(req,res,next)=>{
    try{
const id = req.params
const isEmailExist = await User.find({id})
if(!isEmailExist){
    return apiHelper.failure(res,[],ERROR_LITERALS.COMMON_MESSAGE.NO_DATA_FOUND, GLOBAL.STATUS_CODE.BAD_REQUEST)
}
const user =await User.remove({id})
if(user && Object.keys(user).length){
    return apiHelper.success(res,{user}, ERROR_LITERALS.DELETE_USER_SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MESSAGE.CATCH_ERROR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})

router.get(`${ROUTES.GET_USER.URL}`, async(req,res,next)=>{
    try{
const {body } = req
const id = req.params
const isEmailExist = await User.find({id})
if(!isEmailExist){
    return apiHelper.failure(res,[],ERROR_LITERALS.COMMON_MESSAGE.NO_DATA_FOUND, GLOBAL.STATUS_CODE.BAD_REQUEST)
}
else{
    return apiHelper.success(res,{user}, ERROR_LITERALS.GET_USER_SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MESSAGE.CATCH_ERROR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})

router.get(`${ROUTES.GET_ALL_USERS.URL}`, async(req,res,next)=>{
    try{
const{search, pageNo, limit} = req.query


const user =await User.find()
if(user && Object.keys(user).length){
    return apiHelper.success(res,{user}, ERROR_LITERALS.GET_ALL_USERS_SUCCESS, GLOBAL.STATUS_CODE.SUCCESS)
}
    }catch(err){
        return apiHelper.failure(res, [err], ERROR_LITERAL.COMMON_MESSAGE.CATCH_ERROR, GLOBAL.STATUS_CODE.BAD_REQUEST)
    }
})