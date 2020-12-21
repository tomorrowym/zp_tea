// let od1=document.querySelector(".header .zuipin-header .right #od")

    var aLi=document.querySelectorAll(".header .right ul li");
    var storge=window.sessionStorage;
    var s=storge.s_uname;
    //console.log(s);
    /* if(s==undefined){
        window.location.href="index.html";
    }; */
    // od.style.display="none";
    //od.innerHTML=`你好${s}`;
    aLi[0].style.display="none";
    aLi[1].style.display="block";
    aLi[1].innerHTML=`你好,${s}/<a id="a1" style="cursor:pointer; ">退出</a>`;
    console.log(aLi[1]);
    var a1=document.querySelector(".header .right ul li #a1");
    console.log(a1);
    a1.onclick=function(){
        window.sessionStorage.clear();
        aLi[0].style.display="block";
        aLi[1].style.display="none";
    }
    if(s==undefined){
        //window.localStorage.clear();
        aLi[0].style.display="block";
        aLi[1].style.display="none";
    };


    function search(){
    var _keyword=keyword.value;
    // var storage=window.sessionStorage;
    // storage["_keyword"]=_keyword;
    // console.log(_keyword);
    location.href=`sp_list.html?keyword=${_keyword}`
    // location.href="sp_list.html"
    }
    // window.location.href="sp_list.html";
    //首页模糊查询
   /*  function search(){
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


