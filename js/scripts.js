var $menuToggles = $(".menu-toggle");
var $toggle = $("#toggle");
var $menu = $("#menu");
var $loadingScreen = $("#intro");


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
