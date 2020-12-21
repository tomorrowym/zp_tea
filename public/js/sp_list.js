function search(){
    var _keyword=keyword.value;
    // var storage=window.sessionStorage;
    // storage["_keyword"]=_keyword;
    // console.log(_keyword);
    location.href=`sp_list.html?keyword=${_keyword}`
    // location.href="sp_list.html"
    }
 //首页模糊查询
 function show(){
    var goods_list=document.querySelector(".goods_list");
    console.log(goods_list);
    /* var storage=window.sessionStorage;
    storage.getItem(_keyword);
     console.log(_keyword);
    var storage=window.sessionStorage;
    var _keyword=storage._keyword;
    console.log(_keyword);
    // var _keyword=keyword.value;
    console.log(_keyword); */
    var _url=location.href;
    console.log(_url);
   var __url= _url.split("=");
   console.log(__url);
   var _keyword=__url[1];
  /*  var storge=window.sessionStorage;
   storge["kwd"]=_keyword; */
    //创建异步对象
    var xhr=new XMLHttpRequest();
    //接收响应
    xhr.onreadystatechange=function(){
        console.log(xhr);
        if(xhr.readyState==4 && xhr.status==200){
              var r=xhr.responseText;
              var _arr=JSON.parse(r);
              console.log(_arr);
             
              for(var i=0,htmlStr='';i<_arr.length;i++){
                console.log(_arr[i]);
              htmlStr+=`<div class="item float_left">
                <dl>
                    <dt>
                        <a href="goods_details.html?kwd=${_keyword}&pid=${_arr[i].product_id}">`;
               htmlStr+=` <img src="${_arr[i].g_img}" alt="">
                        </a>
                    </dt>
                    <dd>
                        <p class=".new-goodsSomething">
                        ${_arr[i].title}
                        </p>
                        <p class="goodsPing">${_arr[i].subtitle}</p>
                    </dd>
                    <dd>
                        <p class="nowPrice">￥${_arr[i].zp_price}</p>
                    </dd>`;
               htmlStr+=`<dd><p class="peopleGood">${_arr[i].good_reputation}人好评</p></dd>
        <dd class="cart-show">
            <p class="red-buy addToCart">
                <span class="">加入购物车</span>
            </p>
        </dd>
        </dl>
        </div>`;
            }
          goods_list.innerHTML=htmlStr;
        }
        
       
    }
    //打开链接
    xhr.open("get",`/pro/v1/search_sp/${_keyword}`,true);
    //发送
    xhr.send();
    // sessionStorage.clear();
 } 

 
  /* function search(){
    sessionStorage.clear();
       var _keyword=keyword.value;
       console.log(_keyword);
       //创建异步对象
       var xhr=new XMLHttpRequest();
       //接收响应
       xhr.onreadystatechange=function(){
           if(xhr.readyState==4 && xhr.status==200){
                 var r=xhr.responseText;
                 var arr=JSON.parse(r);
                 console.log(arr);
                //  window.location.href="sp_list.html";
           }
       }
       //打开链接
       xhr.open("get",`/pro/v1/search_sp/${_keyword}`,true);
       //发送
       xhr.send();
       
    } */
    
/*  <div class="item float_left">
                    <dl>
                        <dt>
                            <a href="">
                                <img src="./images/goods_img/70025-1.jpg" alt="">
                            </a>
                        </dt>
                        <dd>
                            <p class=".new-goodsSomething">
                                【 整箱装24罐】 白玉龙 古树白茶 2019年白牡丹 一级 150g分享礼 青/白色包装随机发货
                            </p>
                            <p class="goodsPing">古树白茶 纯正花果香</p>
                        </dd>
                        <dd>
                            <p class="nowPrice">￥8352</p>
                        </dd>
                        <dd><p class="peopleGood">12人好评</p></dd>
                        <dd class="cart-show">
                            <p class="red-buy addToCart">
                                <span class="">加入购物车</span>
                            </p>
                        </dd>
                    </dl>
                </div> */