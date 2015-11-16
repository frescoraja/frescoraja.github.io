var $menuToggles = $(".menu-toggle");
var $toggle = $("#toggle");
var $menu = $("#menu");
var $loadingScreen = $("#intro");


$(window).load(function () {
  setTimeout(function () {
    $loadingScreen.fadeOut(2000,function() {
      $loadingScreen.remove();
    });
  }, 1000);
});


$menuToggles.click(function (){
  $toggle.toggleClass("close");
  $menu.toggleClass("clicked");
});
