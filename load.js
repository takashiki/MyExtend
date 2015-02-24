$(function() {
  if ($('#bofqi embed').attr('quality') !== undefined) {
    $('#bofqi').css('height', 320);
    $('#bofqi').css('width', 480);
    $('#bofqi embed').css('height', 320);
    $('#bofqi embed').css('width', 480);
    $('#bofqi').css('margin', '20px 0px');
  }
});
