function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var value = '';
  if (r != null) {
    value = decodeURI(r[2]);
  }

  return value;
}

$(function() {
  if ($('#bofqi embed').attr('quality') !== undefined) {
    $('#bofqi').css('height', 320);
    $('#bofqi').css('width', 480);
    $('#bofqi embed').css('height', 320);
    $('#bofqi embed').css('width', 480);
    $('#bofqi').css('margin', '20px 0px');
  }
  
  if(window.location.host == '115.com' && getQueryString('ct') == 'play') {
    setInterval(function() {
      $('#video').css('height', 324);
      $('#video').css('width', 574);
    }, 3000);
    $('.wrap,.video-container,.video-player').css('height', 324);
    $('.video-container,.video-player').css('width', 574);
    $('.video-container').css('min-height', 324);
    $('.wrap').css('width', 584);
  }
});
