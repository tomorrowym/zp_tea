const express=require('express');
//引入中间件模块
const bodyParser=require('body-parser');
//引入用户路由器模块
const userRouter=require('./router/user');
//引用商品路由器模块
const goodsRouter=require('./router/goods');
//创建web服务器
const app=express();
//设置端口
app.listen(8500);
//托管静态资源到public目录
app.use(express.static('./public'));
//使用body-parser中间件，将post请求数据解析为对象
app.use(bodyParser.urlencoded({
    extended:false
}));
//将路由器挂载到web服务器下，并给所有路由添加前缀/user
app.use('/user',userRouter);
//将路由器挂载到web服务器下，并给所有路由添加前缀/goods
app.use('/goods',goodsRouter);

