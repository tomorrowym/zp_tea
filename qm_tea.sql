set names utf8;
drop database if exists qm_tea;
create database qm_tea charset=utf8;
use qm_tea;
#用户表
create table qm_user(
    uid int primary key not null auto_increment,
    uname varchar(32),
    upwd varchar(32),
    email varchar(64),
    phone varchar(11)
);
insert into qm_user values(
    1,'ran','ran123456','ran12@qq.com','13788569877'
);
#艺术作者表
create table qm_artist (
    aid int primary key not null auto_increment,
    job_title varchar(32),
    about varchar(158),
    person_img varchar(158),
    production varchar(158)
);
insert into qm_artist values(
    1,'高级工艺美术师','泥料上乘，做工精细，器型典雅，古朴大方，...',
    'images/per/1.png','images/pro/1.png'
);

#商品表
create table qm_goods (
 lid int primary key not null auto_increment,
 title varchar(158),
 subtitle varchar(158),
 sc_price decimal(10,2),
 zp_price decimal(10,2),
 yh_price decimal(10,2),
 brand varchar(56),
 size varchar(26),
 product_id varchar(26),
 g_img varchar(158),
 good_reputation varchar(26)
);

insert into qm_goods values(
    1,'【整箱装5饼】醉品朴茶 福鼎白茶 2019年白牡丹  9周年纪念饼珍藏版357g','9周年纪念饼珍藏版 整箱收藏增值',3999,1640, 3999-1640,'醉品朴茶','1785克','68030','../images/goods_img/68030_01.jpg','126'
);
insert into qm_goods values(
    2,'【整箱装7饼】大与茶號 政和白茶 2015年白牡丹 与华无极 一级 357g 收藏款','香气纯正 初显陈香',2680,2680,2680-2680,'大与茶號','2499克','70011','../images/goods_img/70011_01.jpg','569'
);
insert into qm_goods values(
    3,'醉品x益泡柑 柑白茶 白茶小青柑 寿眉250g 大罐装','5年树柑＋5年陈寿眉',360,360,360-360,'益泡柑','250克','6931246270003','../images/goods_img/6931246270003_01.jpg','785'
);
insert into qm_goods values(
    4,'白玉龙 古树白茶 白牡丹饼 2019年 收藏礼 二级 357g','高性价比藏品',418,418,418-418,'白玉龙','357克','70026','../images/goods_img/70026_01.jpg','2999'
);
insert into qm_goods values(
    5,'【自饮精选！】太姥山·红太阳 福鼎白茶 2013年 松压茶 寿眉 一级 300g','限量款 冬日送暖 提携方便',600,600,600-600,'太姥山','300克','68032','../images/goods_img/68032_01.jpg','9888'
);
insert into qm_goods values(
    6,'2020春茶  醉品朴茶 红茶  金骏眉 口碑好茶 特级 皇冠100g','温暖下午茶 甜蜜治愈',230,138,230-138,'醉品朴茶','100克','8700893','../images/goods_img/8700893_01.jpg','1300+'
);
#商品详情图表
create table qm_goods_pic (
    gid int primary key auto_increment,
    good_id int,
    sm varchar(158),
    md varchar(158),
    lg varchar(158),
    lg_pro varchar(158)
);
#首页轮播图表
create table qm_index_carousel(
    cid int primary key auto_increment,
    img varchar(158),
    title varchar(64),
    href varchar(158)
);


#用户地址表
create table qm_user_address(
    aid int primary key not null auto_increment,
    user_uid  int ,
    receiver varchar(16),
    province  varchar(16),
    city varchar(16),
    county varchar(16),
    address varchar(128),
    cellphone varchar(11),
    postcode char(6)
);
#订单表
create table qm_order (
    did int primary key not null auto_increment,
    user_id int ,
    address_id int ,
    status int,
    order_time date
);
#用户购物车表
create table qm_shopping_cart (
    cid int primary key not null auto_increment,
    user_uid int ,
    good_id int ,
    count int 
);
insert into qm_shopping_cart values(
    1,1,1,5
);
