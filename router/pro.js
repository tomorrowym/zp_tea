const express=require('express');
const r=express.Router();
const pool=require('../pool');

//1.使用restful的get登录  /pro/v1/login/:uname&:upwd
r.get('/v1/login/:uname&:upwd',(req,res)=>{
    var _uname=req.params.uname;
    var _upwd=req.params.upwd;
    console.log(_uname,_upwd);
    var sql = "select * from qm_user where uname=? and upwd=?";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
             if(err) throw err;
             console.log(result);
             if(result.length>0){
                 res.send(result);
             }else{
                 res.send("0");
             }
    });

});

//2.使用restful的delete删除
r.delete('/v1/restful_del_user/:uid',(req,res)=>{
   var _uid=req.params.uid;
   var sql ="delete from qm_user where uid=?";
   pool.query(sql,[_uid],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
   });

});


//3.用户列表  get  "/pro/v1/list" 
r.get('/v1/user_list',(req,res)=>{
     var sql="select * from qm_user";
     pool.query(sql,(err,result)=>{
         if(err) throw err;
         console.log(result,typeof(result));
         res.send(result);
     })
});

//4.根据uid查询用户  get   "/pro/v1/search/:uid"   
r.get('/v1/search/:uid',(req,res)=>{
   var _uid=req.params.uid;
   var sql="select * from qm_user where uid=?";
   pool.query(sql,[_uid],(err,result)=>{
       if(err) throw err;
       console.log(result);
       if(result.length>0){
           res.send(result);
       }else{
           res.send("0");
       }
   })
})
/* 7.注册用户
post    "/pro/v1/reg"   */
/* r.post('/v1/reg',(req,res)=>{
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    var _email=req.body.email;
    var _phone=req.body.phone;
    console.log(_uname,_upwd,_email,_phone); */
    /* var obj=req.body;
    console.log(body); */
  /*   var sql="insert into qm_user values(?,?,?,?,?)";
    pool.query(sql,[null,_uname,_upwd,_email,_phone,],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows===1){
            res.send("1");
        }else{
            res.send("0");
        }
    })
}) */
//根据uname查询用户(用户名重复验证)
r.get('/v1/getUname/:uname',(req,res)=>{
    console.log(111);
    var _uname=req.params.uname;
    console.log(_uname);
    var sql ="select * from qm_user where uname=?";
    pool.query(sql,[_uname],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.length>0){
            res.send("1");
            return;
        }else{
            res.send("0");
                    
   /* 7.注册用户post    "/pro/v1/reg"   */
r.post('/v1/reg',(req,res)=>{
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    var _email=req.body.email;
    var _phone=req.body.phone;
    console.log(_uname,_upwd,_email,_phone);
    /* var obj=req.body;
    console.log(body); */
    var sql="insert into qm_user values(?,?,?,?,?)";
    pool.query(sql,[null,_uname,_upwd,_email,_phone,],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows===1){
            res.send("1");
        }else{
            res.send("0");
        }
    })
})
        
        }
        
 
    })

});


//首页模糊查询
r.get('/v1/search_sp/:keyword',(req,res)=>{
    console.log(1111);
    var _keyword=req.params.keyword;
    console.log(_keyword);
    var sql="select * from qm_goods where title like ?";
    pool.query(sql,['%'+_keyword+'%'],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            console.log(result);
            res.send(result);
        }else{
            res.send("0");
        }
    })
});

//商品详情页面
r.get('/v1/goods_details/:pid',(req,res)=>{
    var _product_id=req.params.pid;
    console.log(_product_id);
    var sql="select * from qm_goods where product_id=?";
    pool.query(sql,[_product_id],(err,result)=>{
        if(err) throw err;
        console.log(result.affectedRows);
        if(result.length>0){
            console.log(result);
            res.send(result);
        }else{
            res.send("0");
        }
    })
});

//导出路由器对象
module.exports=r;