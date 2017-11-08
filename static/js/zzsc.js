function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}

  window.onload = function()
  {
	  var oDiv = document.getElementById('playBox');
	  var oPre = getByClass(oDiv,'pre')[0];
	  var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,5000) //滚动间隔时间设置
	  }
  }
  
  //网上咨询滑动门效果代码
  function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
  function setTab1(name,cursel,n){
for(i=3;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

  function setTab2(name,cursel,n){
for(i=8;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

  function setTab3(name,cursel,n){
for(i=13;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
  function setTab4(name,cursel,n){
for(i=17;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
 function setTab5(name,cursel,n){
for(i=21;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
 function setTab6(name,cursel,n){
for(i=25;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
 function setTab7(name,cursel,n){
for(i=30;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}
 function setTab8(name,cursel,n){
for(i=35;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"hover":"";
con.style.display=i==cursel?"block":"none";
}
}

/*思言行校刊页面*/
$(function(){
$(".subNav").click(function(){
			$(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd")
			$(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt")
			
			// 修改数字控制速度， slideUp(500)控制卷起速度
			$(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);
	})	
})
