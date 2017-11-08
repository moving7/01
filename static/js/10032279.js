




















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m9106.talk99.cn/monitor',
chat:'http://chat7122a.talk99.cn/chat',
file:'http://yun-static.soperson.com/131221',
compId:10029069,
confId:10032279,
vId:d_genId(),
lang:'',
fixFlash:1,
fixMobileScale:0,
subComp:2409,
_mark:'a323f9fa38404e3a3570efee95c0a250f54bd3343d7b4f5ba6881bd7fd147bd2c40e1637bffe4a9e'
},
chat:{
    mobileColor:'',
    mobileHeight:80,
    mobileChatHintBottom:0,
    mobileChatHintMode:0,
    mobileChatHintColor:'',
    mobileChatHintSize:0
}

, monParam:{
index:-1,
preferConfig:0,

style:{mbg:'http://www.bwie.com/talk99/yaoqinkuang/yaoqin.bmp',mh:256,mw:500,
elepos:'0 0 0 0 0 0 0 0 58 9 169 36 260 9 169 36 0 0 0 0',
mbabg:'http://www.bwie.com/talk99/yaoqinkuang/zixun.gif',
mbdbg:'http://www.bwie.com/talk99/yaoqinkuang/shaohou.gif',
mbpbg:''},

title:'\u5165\u5b66\u96f6\u57fa\u7840 \u6bd5\u4e1a\u8fdb\u540d\u4f01',
text:'<span style="font-family:Microsoft YaHei;"><span style="color:#ff0000;">&nbsp;<span style="WHITE-SPACE: normal; WORD-SPACING: 0px; TEXT-TRANSFORM: none; FLOAT: none; FONT: 12px/20px Simsun; DISPLAY: inline !important; LETTER-SPACING: normal; BACKGROUND-COLOR: rgb(255,255,255); TEXT-INDENT: 0px; -webkit-text-stroke-width: 0px">\u6b22\u8fce\u6765\u5230\u516b\u7ef4\u7814\u4fee\u5b66\u9662\uff0c\u5173\u6ce8\u516b\u7ef4\u6700\u65b0\u52a8\u6001\uff08\u516b\u7ef4\u6559\u80b2\u5b98\u65b9\u5fae\u4fe1\u53f7\uff1abeijingbawei\uff09\uff0c\u4e3a\u60a8\u63d0\u4f9b\u66f4\u65b9\u4fbf\u3001\u66f4\u5feb\u6377\u3001\u66f4\u8d34\u5fc3\u7684\u670d\u52a1\uff0c\u8bf7\u95ee\u60a8\u662f\u60f3\u54a8\u8be2\u54ea\u65b9\u9762\u7684\u8bfe\u7a0b\u5462\uff1f</span></span></span> ',
auto:30,
group:'10035923',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:60,
autoHide:0,
hidePanel:1,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:1,
minBallon:1,
chatFollow:1
}


, panelParam:{
mobileIcon:'',
mobileIconWidth:0,
mobileIconHeight:0,
category:'icon',
preferConfig:1,
position:1,
vertical:120,
horizon:5


,mode:1,
target:'10035923',
online:'http://www.bwie.com/talk99/piaokuang.jpg',
offline:'http://www.bwie.com/talk99/piaokuang.jpg',
width:120,
height:373,
status:1,
closable:1,
regions:[{type:"4",l:"13",t:"340",w:"95",h:"24",bk:"http://www.bwie.net/talk99/qqjt.jpg",v:"http://q.url.cn/s/STcqJEm?_type=wpa&isKfuin=1"}],
collapse:0



}



};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?17070503"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?170704" charset="utf-8"></scr'+'ipt>');
}
}
