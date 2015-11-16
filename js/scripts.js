var $menuToggles = $(".menu-toggle");
var $toggle = $("#toggle");
var $menu = $("#menu");
var $loadingScreen = $("#intro");


$(window).load(function () {
  $loadingScreen.fadeOut(2000,function() {
    $loadingScreen.remove();
  });
});


$menuToggles.click(function (){
  $toggle.toggleClass("close");
  $menu.toggleClass("clicked");
});
