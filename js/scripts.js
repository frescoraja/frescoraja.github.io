var $menuToggles = $(".menu-toggle");
var $toggle = $("#toggle");
var $menu = $("#menu");
var $loadingScreen = $("#intro");

initBrowser();
initVideo();
$(window).load(function () {
  setTimeout(function () {
    $loadingScreen.fadeOut(3000,function() {
      $loadingScreen.remove();
    });
  }, 0);
});


$menuToggles.click(function (){
  $toggle.toggleClass("close");
  $menu.toggleClass("clicked");
});


function initBrowser() {

  $(".browser_img").each(function() {
    var $this = $(this);
    $(this).click(function() {
      $(this).closest(".browser").toggleClass('maxied');
    });
    var title = $this.attr('title');
    var style = $this.attr('style');
    if(typeof title === 'undefined') {
      title = "";
    }
    var before_html = '<div class="browser" style="'+style+'">';
        before_html +=  '<h4 class="title">';
        before_html +=    title;
        before_html +=  '</h4>';
        before_html +=  '<ul class="ui">';
        before_html +=    '<li class="close"></li>';
        before_html +=    '<li class="min"></li>';
        before_html +=    '<li class="max"></li>';
        before_html +=  '</ul>';
        before_html +=  '<div class="window" style="'+style+'"></div></div>';

    var after_html = "</div></div>";

    $(this).before(before_html);
    $(this).appendTo($(this).prev('.browser').find('.window'));
  });

  $('.ui .min').click(function(){
    $(this).closest('.browser').removeClass('maxied').toggleClass('minied');
  });

  $('.ui .max').click(function(){
    $(this).closest('.browser').removeClass('minied').toggleClass('maxied');
  });

  $('.ui .close').click(function() {
    if(confirm("Are you sure you want to close this project?\n\nYou'll have to refresh the page to see it again, in addition to hurting my feelings.")) {
      $(this).closest('.browser').removeClass('minied').removeClass('maxied').addClass('closed');
    }
  });
}

function initVideo() {

  $("video").each(function(){
    var $this = $(this);
    var video = $this.get(0);
    $this.bind('ended', function() {
      $this.closest(".browser").removeClass('maxied');
      $this.prev('.play').removeClass('playing');
      video.currentTime = 0;
    });
  });

  $("video").before("<span class='play'></span>");

  $(".play").click(function() {
    var $this = $(this);
    $this.toggleClass('playing');
    var video = $(this).next("video").get(0);
    if(video.paused === true) {
      $(this).closest(".browser").addClass('maxied');
      video.play();
    } else {
      video.pause();
      $(this).closest(".browser").removeClass('maxied');
    }
  });
}
