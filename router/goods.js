const express=require('express');
const r=express.Router();
const pool=require('../pool.js');

//首页商品模糊查询
r.get('/index',(req,res)=>{
    let obj=req.query;
    console.log(obj.title);
    if(!obj.title){
        res.send({code:"301",msg:"title required"});
        return;
    }
    pool.query('select * from qm_goods where title like ?',
    ["%"+obj.title+"%"],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
    /* res.send('111'); */
});

//加入购物车
r.get('/shopping_cart',(req,res)=>{
    let obj=req.query;
    console.log(obj);
    console.log(obj.count);
    if(!obj.user_uid){
        res.send({code:"401",msg:"user_id required"});
        return;
    }
    if(!obj.good_id){
        res.send({code:"402",msg:"good_id required"});
        return;
    }
    if(!obj.count){
        res.send({code:"403",msg:"Add at least one item"});
        return;
    }
    //执行SQL
    pool.query('insert into qm_shopping_cart set ?',[obj],
    (err,result)=>{
        if(err) throw err;
        res.send({code:200,msg:"insert suc"});
    });
    // res.send("加入成功")
});

//购物车删除商品

//导出路由对象
module.exports=r;