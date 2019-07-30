const controller = new ScrollMagic.Controller();

var aHeader = new TimelineMax();
var aScrollToTop = new TimelineMax();

$(document).ready(function() {
  // toggle-btn-start

  $(document).on("click", "#toggle-btn", function() {
    $("#top").toggleClass("top");
    $("#bottom").toggleClass("lower");
    $("#span-to-hide").toggleClass("hide");
    $(".first,.sec,.thir,.forth").removeClass("show-drop-down");
    $(".hidden-nav").toggleClass("show-nav");
    $(".toggle-menu").toggleClass("menu-show");
  });

  //    toggle-btn-end

  // scroll-to-top-start

  $(document).on("click", ".scroll-to-top", function() {
    window.scrollTo(0, 0);
  });

  // sroll-to-top-end

  // header-animation-start
  aHeader.to(".header-box", 1, { top: "-10", position: "fixed" });

  var headerScene = new ScrollMagic.Scene({
    offset: 100
  })
    .setTween(aHeader)
    .addTo(controller);

  // header-animation-end

  // scroll-btn-animation-start

  aScrollToTop.from(".scroll-to-top", 1, {
    bottom: "-6%",
    ease: Elastic.easeOut.config(1, 0.3)
  });

  var scrolltop = new ScrollMagic.Scene({
    offset: 100
  })
    .setTween(aScrollToTop)
    .addTo(controller);

  // scroll-btn-animation-end

  $(document).on("click", "#informal", function() {
    $(this).addClass("item-active");
    $("#tech").removeClass("item-active");

    $("#tech-events").removeClass("show");
    $("#informal-events").addClass("show");
  });

  $(document).on("click", "#tech", function() {
    $(this).addClass("item-active");
    $("#informal").removeClass("item-active");
    $("#informal-events").removeClass("show");
    $("#tech-events").addClass("show");
  });

  // know-more-about-event-end
});
