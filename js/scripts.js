var $menuToggles = $(".menu-toggle");
var $toggle = $("#toggle");
var $menu = $("#menu");
var $loadingScreen = $("#intro");

initBrowsers();
initVideos();

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


function initBrowsers() {
  $('.ui .min').click(function(){
    var $this = $(this);
    $browser = $this.closest(".browser");
    $browser.removeClass('maxed').toggleClass('minied');
    var $player = $this.closest(".browser").find(".play");
    if ($player.hasClass("playing")) {
      $player.toggleClass("playing");
      $player.next("video")[0].pause();
    }
  });

  $('.ui .max').click(function(){
    $(this).closest('.browser').removeClass('minied').toggleClass('maxed');
  });

  $('.ui .close').click(function() {
    if(confirm("Are you sure you want to remove this project from view? \nYou will have to refresh the page to see it again..")) {
      $(this).closest('.browser').removeClass('minied').removeClass('maxed').addClass('closed');
    }
  });
}

function initVideos() {

  $("video").each(function(){
    var $this = $(this);
    var video = $this.get(0);
    video.preload = "auto";
    $this.bind('ended', function() {
      $this.closest(".browser").removeClass('maxed');
      $this.prev('.play').removeClass('playing');
      video.currentTime = 0;
    });
  });

  $(".play").click(function() {
    var $this = $(this);
    $this.toggleClass('playing');
    var video = $(this).next("video").get(0);
    if(video.paused === true) {
      $this.closest(".browser").addClass("maxed");
      $("html, body").animate({
        scrollTop: $this.closest("article").offset().top
      }, 350);
      video.play();
    } else {
      $this.closest(".browser").removeClass("maxed");
      video.pause();
    }
  });
}
