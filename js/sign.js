const btn = document.querySelector("#btn")
const user = document.querySelector("#user")
const pasword = document.querySelector("#paswod")
let userValue=''
let paswordValue=''

btn.onclick=function(){
  userValue=user.value
  paswordValue=pasword.value
  if(userValue==='admin' && paswordValue==='123456'){
    location.href="index.html"
    localStorage.setItem("随心",paswordValue)
  }else{
    // .alert( message, title, btnValue, callback [, type] )
    mui.alert("输入错误")
    user.value=pasword.value=''
  }
  
}

