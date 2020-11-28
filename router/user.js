const express=require('express');
const r=express.Router();
const pool=require('../pool.js');
//用户注册
r.post('/reg',(req,res)=>{
    //获取post请求的数据
    let obj=req.body;
    console.log(obj);
    //验证各项数据是否为空
    if(!obj.uname){
       res.send({code:"401",msg:"uname required"});
       return;
    }
    if(!obj.upwd){
        res.send({code:"402",msg:"email required"});
        return;
    }
    if(!obj.email){
        res.send({code:"403",msg:"email required"});
        return;
    }
    if(!obj.phone){
        res.send({code:"404",msg:"phone required"});
        return;
    }
    //执行sql命令
    pool.query('insert into qm_user set ?',[obj],
    (err,result)=>{
       if(err) throw err;
       res.send({code:"200",msg:"reg suc"})
    });

});

//用户登录
r.post('/login',(req,res)=>{
     let obj=req.body;
     if(!obj.uname){
         res.send({code:"401",msg:"uname required"});
         return;
     }
     if(!obj.upwd){
         res.send({code:"402",msg:"upwd required"});
         return;
     }
    pool.query('select from qm_user where uname=? and upwd=?',
    [obj.uname,obj.upwd],(err,result)=>{
        if(err) throw err;
        //返回结果为数组
     console.log(result);
     //根据结果判断是否登录成功
     //如果数组为空则登录失败，否则登录成功
     if(result.length===0){
       res.send({code:301,msg:'login error'})
     }else{
         res.send({code:200,msg:"login suc"})
    }
    });
}); 

//用户删除
r.get('/delete',(req,res)=>{
    //获取请求的数据
   let obj=req.query;
   //验证是否为空
   if(!obj.uid){
     res.send({code:"401",msg:"uid required"});
     return;
   }
   //执行SQL命令
   pool.query('delete from qm_user where uid=?',[obj.uid],
   (err,result=>{
       if(err) throw err;
    if(result.affectedRows===0){
        res.send({code:"301",msg:"delete err"})
    }else{
        res.send({code:"200",msg:"delete suc"})
    }
   }));

});

//用户修改
r.get('/update',(req,res)=>{
    let obj=req.query;
    console.log(obj);
    let n=400;
    for(let k in obj){
        n++;
        if(!obj[k]){
            res.send({code:n,msg:k+"required"});
            return;
        }
    }
   
    pool.query('update qm_user set ? where uid=?',[obj,obj.uid],
    (err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.affectedRows===0){
            res.send({code:"301",msg:"update err"})
        }else{
            res.send({code:"200",msg:"update suc"})
        }
    })
});
//导出路由对象
module.exports=r;