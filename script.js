var links = [{
  'one': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': '',
  },
  'two': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': '',
  },
  'three': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': '',
  },
  'four': {
    'link one': '',
    'link two': '',
    'link three': '',
    'link four': '',
  }
}];

$.each(links, function(k, v) {
  $.each(v, function(l, w) {
    var link = $('#template').clone().removeAttr('id');
    link.attr('id', l);
    link.find('.label').text(l);
    $.each(w, function(m, x) {
      var url = $('#link-template').clone().removeAttr('id');
      url.attr('href', x);
      url.find('li').text(m);
      url.appendTo(link);
    });
    link.find('.label').css('color', 'var(--' + w + ')');
    link.appendTo($('#links'));
  });
});

$(window).on('load', function() {
  $('#load').fadeOut(300);
  $('body').css({
    'background-image': 'url(img/' + Math.floor(Math.random() * 33) + '.jpg)'
  });
  $('#search input').focus();
});
