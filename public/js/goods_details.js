function show_details(){
var url=location.href;
var url_arr=url.split("=");
console.log(url_arr);
var _product_id=url_arr[2];
console.log(_product_id);
var _goodSth=document.querySelector("#goodSth");
var content__=document.querySelector(".content__");
console.log(_goodSth);
var storge=window.sessionStorage;
var _kwd=storge.kwd;
var xhr=new XMLHttpRequest();
console.log(xhr);
xhr.onreadystatechange=function(){
    console.log(123);
    if(xhr.readyState==4 && xhr.status==200){
        console.log(111);
        var r=xhr.responseText;
        console.log(r);
        var arr=JSON.parse(r)
        console.log(arr);
        content__.innerHTML=` <div class="zuipin__wrapper">
        <div class="now__page">
            <ul>
                <li><a href="index.html">首页</a></li>
                <li>/</li>
                <li><a href="">${_kwd}</a></li>
                <li>/</li>
                <li><a href="">${arr[0].title}</a></li>
            </ul>
        </div>
    </div>`;
        _goodSth.innerHTML=`<div class="zuipin__wrapper clearfix">
        <div class="picFocus float-left ">
            <div class=" s-img float-left">
                <a href="" class="prev-btn swiper-button-disabled"></a>
                <div class="swiper-container sl-img swiper-container-vertical">
                    <ul>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                        <li class="swiper-slide"><img src="./images/img/2018-09-17 18_14_34_159524693663.jpg" alt=""></li>
                    </ul>
                </div>
                <a href="" class="next-btn"></a>
            </div>
            <div class="l-img float-left">
                <ul>
                    <li class="show"><img src="${arr[0].g_img}" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="g-item  float-left">
            <h1 class="g-title">${arr[0].title}</h1>
            <p class="g-scr">${arr[0].subtitle}</p>
            <div class="height-1"></div>
                <dl>
                    <dt>
                        <div class="g-scj">市场价
                            <span class="scj-price">
                                ￥<del>${arr[0].sc_price}</del>
                            </span>
                        </div>
                </dt>
                    <dd>
                        <div class="g-zp">醉品价<span class="zp-price hy-price">￥<span class="zp hy">${arr[0].zp_price}</span></span></div>
                    </dd>
                    <dd>
                        <div class="g-cx">
                            促销
                            <div class="tips-text-wrap">
                                <div class="icon-text">包邮</div>
                                <div class="tips-text"> 全场在线支付满59元免运费</div>
                            </div>
                            <div class="tips-text-wrap">
                                <div class="icon-text">直降</div>
                                <div class="tips-text">已优惠<b class="youhui">${arr[0].yh_price}</b>元</div>
                            </div>
                        </div>
                    </dd>
                    <dd>
                        <div class="height-1"></div>
                    </dd>
                    <dd>
                        <div class="g-pp">
                            <ul>
                                <li>
                                    <span class="g-hl">品牌</span>
                                    <span class="g-con">${arr[0].brand}</span>
                                </li>
                                <li>
                                    <span class="g-hl">净含量</span>
                                    <span class="g-con">${arr[0].size}</span>
                                </li>
                                <li>
                                    <span class="g-hl">商品编号</span>
                                    <span class="g-con">${arr[0].product_id}</span>
                                </li>
                            </ul>
                        </div>
                    </dd>
                    <dd>
                        <div style="border:1px solid; height: 35px; border-top:0; border-left: 0; border-right: 0;"></div>
                    </dd>
                    <dd>
                        <div class="g-sl">
                            数量
                            <button type="button" class="jian">-</button>
                            <input type="text" class="text-num" value="1">
                            <button type="button" class="plus">+</button>
                        </div>
                    </dd>
                    <dd class="g-cart">加入购物车</dd>
                    <dd><div class="height-1"></div></dd>
                    <dd>
                        <div class="g-fw">
                            <ul>
                                <li>服务</li>
                                <li>90天商品保价</li>
                                <li>30天无理由退货</li>
                                <li>10分钟极速退款</li>
                            </ul>
                        </div>
                    </dd>
                </dl>
          
            <dl></dl>
        </div>
    </div>` 
    }
}
xhr.open('get',`/pro/v1/goods_details/${_product_id}`,true);
xhr.send();
}