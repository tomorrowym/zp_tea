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
 price decimal(10,2),
 writer varchar(56),
 size varchar(26),
 pug varchar(26),
 gimg varchar(158)
);

insert into qm_goods values(
    1,'紫砂壶','古老的紫砂壶，出自明朝末年','5600','坤大师','500cc','黑泥','images/1.png'
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
