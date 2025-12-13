const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');
module.exports = (req,res,next)=>{
    let token = req.get('token');
    if(!token){
        return res.json({
            message:'token 缺失',
            data:null
        })
    }
    jwt.verify(token,jwtSecret,(err,data)=>{
        if(err){
            return res.json({
                message:'token 过期',
                data:null
            })
        }
        req.user = data;
        console.log(req.user);
        next();
    })
}