var arr=document.querySelectorAll("footer h1");
var li=document.querySelector("nav ul li a");
li.style.color="red";
window.addEventListener("load",()=>{
    arr[0].innerHTML="Yashassvi Suhane";
    arr[1].innerHTML="201500829";
    arr[2].innerHTML="GLA University,Mathura";
    var date=new Date().toISOString().slice(0,10);
    var strA=date.split("-");
    var arrA=strA.reverse();
    var str=arrA.join("-");
    arr[3].innerHTML=str;
});