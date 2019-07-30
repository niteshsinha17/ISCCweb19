const controller = new ScrollMagic.Controller();
var aHeader = new TimelineMax();
var aScrollToTop = new TimelineMax();

$(document).ready(function() {
  // scroll-to-top-start

  $(document).on("click", ".scroll-to-top", function() {
    window.scrollTo(0, 0);
  });

  // sroll-to-top-end

  // sponser-start

  $(document).on("click", "#b1", function() {
    $(this).addClass("bullet-active");
    $("#b2").removeClass("bullet-active");
    $("#b3").removeClass("bullet-active");
    $("#sponser-2").css({ left: "-100%" });
    $("#sponser-1").css({ left: "0%" });
    $("#sponser-3").css({ left: "100%" });
  });

  $(document).on("click", "#b2", function() {
    $(this).addClass("bullet-active");
    $("#b1").removeClass("bullet-active");
    $("#b3").removeClass("bullet-active");
    $("#sponser-3").css({ left: "100%" });
    $("#sponser-1").css({ left: "-100%" });
    $("#sponser-2").css({ left: "0%" });
  });

  $(document).on("click", "#b3", function() {
    $(this).addClass("bullet-active");
    $("#b1").removeClass("bullet-active");
    $("#b2").removeClass("bullet-active");
    $("#sponser-3").css({ left: "0%" });
    $("#sponser-1").css({ left: "-100%" });
    $("#sponser-2").css({ left: "100%" });
  });

  // sponser-end

  // paragraph-animation-start

  var t1 = new TimelineMax();
  t1.to("#para", 1, { x: 0, opacity: 1, ease: Bounce.easeOut });

  // paragraph-animation-end

  // timer-start

  function countdown() {
    var now = new Date();
    var eventDate = new Date(2019, 08, 26);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);
  }

  countdown();

  // timer-end

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
});
