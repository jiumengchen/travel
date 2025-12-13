const dbconfig = require('../config/dbconfig');
const mysql = require('mysql2');

const pool = mysql.createPool(dbconfig)

const query = (sql,params=[])=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connection)=>{
            if(err){
                console.log('数据库连接失败');
                reject(err);
                return;
            }
            connection.query(sql,params,(err,results)=>{
                if(err){
                    console.log('err',err);
                    reject(err);
                    return;
                }
                resolve(results)
                connection.release();
            })
        })
    })
}

module.exports = query;