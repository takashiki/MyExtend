function genericOnClick(info, tab) { 
  alert(info.linkUrl); 
} 
function selectionOnClick(info, tab) { 
  var txt = info.selectionText; 
  if (txt.indexOf('av') === 0) {
    window.open('http://www.bilibili.com/video/' + txt + '/');
  } else {
    alert('非合法av号');
  }
} 
var link = chrome.contextMenus.create({"title": "链接地址","contexts":["link"],"onclick":genericOnClick}); 
var selection = chrome.contextMenus.create({
  "title": "打开页面",
  "contexts":["selection"],
  "onclick":selectionOnClick
}); 