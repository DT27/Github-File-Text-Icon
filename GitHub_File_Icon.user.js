// ==UserScript==
// @id		githubfileicon@dragonet1943@gmail.com
// @name        GitHub File Text Icon
// @namespace   https://github.com/DT27/Github-File-Text-Icon
// @description	在GitHub项目文件列表中使用彩色文件类型文字作为图标
// @include     https://github.com/*
// @autho	DT27
// @version     0.1
// @license     GPL version 3
// @grant       none
// ==/UserScript===
function hasClass(elem, cls){
    cls = cls || '';
    if(cls.replace(/\s/g, '').length == 0) return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className.baseVal + ' ');
}
var f = document.querySelectorAll('tr.js-navigation-item');
var colors = new Array("#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#f1c40f","#e67e22","#e74c3c");
for(var i=0; i<f.length; i++){
if(f[i].children[0].className!=""&&!hasClass(f[i].children[0].children[0],"octicon-file-directory")){
	var n = Math.floor(Math.random() * colors.length + 1)-1;
	color = colors[n];
  var icon = f[i].children[0];
  var fn = f[i].children[1].children[0].children[0].textContent;
  fn = fn.toLowerCase();
  var ext = fn.substring(fn.lastIndexOf('.')+1, fn.length);
  
  if (ext.length>4) {
    icon.innerHTML = '<i style="display: block; font-size: 12px; font-weight:400; margin-left:3px; font-style: normal; line-height:20px; color: red;">'+fn.substring(0,1).toUpperCase()+'</i>';
  }else if (ext.length==4) {
    icon.innerHTML = '<i style="display: block; font-size: 11px; font-weight:400; margin-left:-8px; font-style: normal; line-height:20px; color: red;">'+ext.toUpperCase()+'</i>';
  } else if (ext.length==3) {
    icon.innerHTML = '<i style="display: block; font-size: 12px; line-height:20px; font-weight:400; font-style: normal; color: '+color+'; margin-left:-5px;">'+ext.toUpperCase()+'</i>';
  } else if (ext.length==0) {
  } else {
    icon.innerHTML = '<i style="display: block; font-size: 12px; line-height:20px; font-weight:400; font-style: normal; color: '+color+'; margin-left:-2px;">'+ext.toUpperCase()+'</i>';
  }
 }
}
