
var uname_msg=document.getElementById("uname_msg");
var upwd_msg=document.getElementById("upwd_msg");
var email_msg=document.getElementById("email_msg");
var phone_msg=document.getElementById("phone_msg");

console.log(uname_msg);

function show_uname(){
    uname_msg.innerHTML="请输入6~10位";
}
function show_upwd(){
      upwd_msg.innerHTML="密码长度在6~12位";
}
function show_cpwd(){
    cpwd_msg.innerHTML="两次密码输入一致";

}
function show_email(){
    email_msg.innerHTML="请输入邮箱";

}
function show_phone(){
    phone_msg.innerHTML="请输入手机号";
}


function check_uname(){
    var _uname=uname.value;
    if(!_uname){
        return;
    }
    console.log(_uname);
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log(1112);
            var r=xhr.responseText;
            console.log(r);
            if(r==1){
                uname_msg.innerHTML="用户名已存在";
            }else{
                uname_msg.innerHTML="√";
            }
        }
    }
    xhr.open("get",`/pro/v1/getUname/${_uname}`,true);
    xhr.send();
    
}
function check_upwd(){
    var _upwd=upwd.value;
    if(!_upwd){
        return;
    }
      var _upwd=upwd.value.length;
      console.log(_upwd);
      if(_upwd>=6 && _upwd<=12){
          upwd_msg.innerHTML="√";
      }else{
        upwd_msg.innerHTML="请输入正确格式";
      }
}
function check_cpwd(){
    var _cpwd=cpwd.value;
    if(!_cpwd){
        return;
    }
    var _cpwd=cpwd.value;
    var _upwd=upwd.value;
    console.log(_cpwd,_upwd);
    if(_cpwd==_upwd){
        cpwd_msg.innerHTML="√";
    }else{
        cpwd_msg.innerHTML="两次密码请输入一致";
    }
   
}
function check_email(){
    var _email=email.value;
    if(!_email){
        return;
    }
    email_msg.innerHTML="√";
}
function check_phone(){
    var _phone=phone.value.length;
    if(!_phone){
        return;
    }
    if(_phone==11){
        phone_msg.innerHTML="√";
    }else{
        phone_msg.innerHTML="请输入正确的手机号";
    }
    
}

function reg(){
    var _uname=uname.value;
    var _upwd=upwd.value;
    var _email=email.value;
    var _phone=phone.value;
    if(!_uname){
        alert('用户名不能为空'); return;
    }
    if(!_upwd){
        alert('密码不能为空');return;
    }
    if(!_email){
        alert('邮箱不能为空');return;
    }
    if(!_phone){
        alert('电话不能为空');return;
    }
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
         if(xhr.readyState==4 && xhr.status==200){
             var r=xhr.responseText;
             console.log(r);
             var a1=uname_msg.innerHTML;
             var a2=upwd_msg.innerHTML;
             var a3=cpwd_msg.innerHTML;
             var a4=email_msg.innerHTML;
             var a5=phone_msg.innerHTML;
           /*   if(a1!==a2!==a3!==a4!==a5!=="√"){
                r=0;
                alert("注册失败");
                return;
            } */
             console.log(a1);
             if(r==1 && _uname&&_upwd &&_email &&_phone){
                 alert("注册成功");
                 window.location.href="login.html";
             }else{
                 alert("注册失败");
             }
         }
    }
    xhr.open('post',`/pro/v1/reg`,true);
    var formdata=`uname=${_uname}&upwd=${_upwd}&email=${_email}&phone=${_phone}`;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}