var links = [{
   'art':{
       'tumblr':'https://www.tumblr.com/blog/breakfastbooty',
       'twitter':'https://twitter.com/',
       'pixiv':'https://pixiv.net',
       'tapas':'https://tapas.io/',
       'webtoon':'http://www.webtoons.com/challenge/dashboardEpisode?titleNo=111955'
   },
   'school':{
       'myuic':'https://myuic.apps.uillinois.edu/uPortal/f/welcome/normal/render.uP',
       'blackboard':'https://uic.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_62_1',
       'email':'https://mail.google.com/mail/u/2/#inbox',
       'docs':'https://docs.google.com/document/u/0'
   },
   'work':{
       'email':'https://mail.google.com/mail/u/1/#inbox/',
       'storenvy':'http://www.storenvy.com/',
       'gumroad':'https://gumroad.com/',
       'shipping':'https://www.paypal.com/shiplabel/create/'
   },
   'fun':{
       'dynasty':'https://dynasty-scans.com/chapters/added',
       'discord':'https://discordapp.com/channels/@me/',
       '/u/':'http://boards.4chan.org/u/',
       '/w/':'http://boards.4chan.org/w/',
       '/homo/':'http://boards.4chan.org/lgbt/'
   }
}];

$.each(links,function(k,v) {
    $.each(v,function(l,w) {
        var link = $('#template').clone().removeAttr('id');
        link.attr('id',l);
        link.find('.label').text(l);
        $.each(w,function(m,x) {
            var url = $('#link-template').clone().removeAttr('id');
            url.attr('href',x);
            url.find('li').text(m);
            url.appendTo(link);
        });
        link.find('.label').css('color','var(--'+w+')');
        link.appendTo($('#links'));
    });
});

$(window).on('load',function() {
    $('#load').fadeOut(300);
    $('body').css({'background-image': 'url(img/' + Math.floor(Math.random() * 33) + '.jpg)'});
    $('#search input').focus();
});