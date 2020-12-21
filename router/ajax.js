const express=require("express");
const r=express.Router();
const pool=require("../pool.js");
//登录
r.get("/login",(req,res)=>{
     var _uname=req.query.uname;
     var _upwd=req.query.upwd;
     console.log(_uname,_upwd);
     var sql ="select * from qm_user where uname=? and upwd=?";
     pool.query(sql,[_uname,_upwd],(err,result)=>{
         if(err) throw err;
         if(result.length>0){
             res.send("1");
         }else{
             res.send("0");
         }
     });
});

//1.使用restful的get登录  /pro/v1/login/:uname&:upwd
r.get('/v1/login/:uname&:upwd',(req,res)=>{
     var _uname=req.params.uname;
     var _upwd=req.params.upwd;
     console.log(_uname,_upwd);
     var sql = "select * from qm_user where uname=? and upwd=?";
     pool.query(sql,[_uname,_upwd],(err,result)=>{
              if(err) throw err;
              if(result.length){
                  res.send("1");
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


/* 5.根据uid修改用户信息
put   "/pro/v1/update"   */






/* //3.使用post方法登录
r.post('/post_login',(req,res)=>{
    var _uname=req.body.uname;
    var _upwd=req.body.upwd;
    console.log(_uname,_upwd);
    var sql="select * from qm_user where uname=? and upwd=?";
    pool.query(sql,[_uname,_upwd],(err,result)=>{
        if(err) throw err;

    });
}); */



//导出路由器对象
module.exports=r;