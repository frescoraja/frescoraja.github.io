!function(){var e=$("#toggle"),s=$("#menu"),o=$("#intro");$(document).ready(function(){$(".ui .min").click(function(){var e=$(this);$browser=e.closest(".browser"),$browser.removeClass("maxed").toggleClass("minied");var s=e.closest(".browser").find(".play");s.hasClass("playing")&&(s.toggleClass("playing"),s.next("video")[0].pause())}),$(".ui .max").click(function(){$(this).closest(".browser").removeClass("minied").toggleClass("maxed")}),$(".ui .close").click(function(){confirm("Are you sure you want to remove this project from view? \nYou will have to refresh the page to see it again..")&&$(this).closest(".browser").removeClass("minied").removeClass("maxed").addClass("closed")}),$("video").each(function(){var e=$(this),s=e.get(0);s.preload="none",e.bind("ended",function(){e.closest(".browser").removeClass("maxed"),e.prev(".play").removeClass("playing"),s.currentTime=0})}),$(".play").click(function(){var e=$(this);e.toggleClass("playing");var s=$(this).next("video").get(0);!0===s.paused?(e.closest(".browser").addClass("maxed"),$("html, body").animate({scrollTop:e.closest("article").offset().top},350),s.play()):(e.closest(".browser").removeClass("maxed"),s.pause())}),setTimeout(function(){o.fadeOut(3e3,function(){o.remove()})},0)}),e.mouseenter(function(){e.addClass("close"),s.addClass("clicked")}),s.mouseleave(function(){e.removeClass("close"),s.removeClass("clicked")}),e.click(function(){e.toggleClass("close"),s.toggleClass("clicked")})}();