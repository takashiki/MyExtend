var gotobili = chrome.contextMenus.create({
  "title": "打开B站页面",
  "contexts": ["selection"],
  "onclick": gotoBiliOnClick
}); 

function gotoBiliOnClick(info, tab) { 
  var txt = info.selectionText; 
  if (txt.indexOf('av') === 0) {
    window.open('http://www.bilibili.com/video/' + txt + '/');
  } else {
    alert('非合法av号');
  }
} 
 
var linkTrim = chrome.contextMenus.create({
  "title": "打开链接",
  "contexts": ["selection"],
  "onclick": linkTrimOnClick
}); 

function linkTrimOnClick(info, tab) {
  var txt = info.selectionText; 
  var reg = /[\u4E00-\u9FA5]/g;
  var link = txt.replace(reg,'');
  window.open(link);
}