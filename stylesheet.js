$(".menu-trigger").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(".slide").removeClass("open");
    $("nav").removeClass("open");
    $(".overlay").removeClass("open");
  } else {
    $(this).addClass("active");
    $(".slide").addClass("open");
    $("nav").addClass("open");
    $(".overlay").addClass("open");
  }
});

$(".overlay").on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(".menu-trigger").removeClass("active");
    $(".slide").removeClass("open");
    $("nav").removeClass("open");
  }
});

$(".link-btn").hover(function () {
  $(this).css("color", "rgba(59,175,117,1.0)");
  $(this).css("border", "1px solid rgba(59,175,117,1.0)");
  // $(this).animate({color: rgba(59,175,117,1.0)},1000);
}, function () {
  $(this).css("color", "rgba(0,0,0,0.8)");
  $(this).css("border", "1px solid rgba(0,0,0,0.5)");
});

$(".footer-contents li a,.mini-insta").hover(function () {
  $(this).css("color", "rgba(0,0,255,1.0)");
}, function () {
  $(this).css("color", "rgba(0,0,0,0.8)");
});

$(document).ready(function () {
  wsize = $(window).width();

  width_Tab = 800;
  width_Sma = 670;
  shift_Sma = 50;

  $("#back-picture img").css("left", (wsize - 1900) / 2 + "px");
  $(".green-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".green-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".green-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);
  $(".blue-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".blue-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".blue-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);
  $(".orange-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".orange-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".orange-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);

  if (wsize < width_Sma) {
    $("#title,.footer-title").css("left", (wsize - 300 - shift_Sma) / 2 + "px");
    $("#back-title,.footer-back-title,.footer-mid,.footer-bot").css("left", (wsize - 600 - shift_Sma) / 2 + "px");
    $("#board").css("left", (wsize - 270 - shift_Sma) / 2 + "px");
    $("#header-picture p").css("left", (wsize - 170 - shift_Sma) / 2 + "px");
    $("#flower1").css("left", (wsize - 450 - shift_Sma) / 2 + "px");
    $("#flower2").css("left", (wsize + 350 - shift_Sma) / 2 + "px");
    $("#leaf").css("left", (wsize - 400 - shift_Sma) / 2 + "px");
  } else {
    $("#title,.footer-title").css("left", (wsize - 300) / 2 + "px");
    $("#back-title,.footer-back-title,.footer-mid,.footer-bot").css("left", (wsize - 600) / 2 + "px");
    $("#board").css("left", (wsize - 270) / 2 + "px");
    $("#header-picture p").css("left", (wsize - 170) / 2 + "px");
    $("#flower1").css("left", (wsize - 450) / 2 + "px");
    $("#flower2").css("left", (wsize + 350) / 2 + "px");
    $("#leaf").css("left", (wsize - 400) / 2 + "px");
  }
});

$(window).resize(function () {
  wsize = $(window).width();
  X_base = 600;
  Y_base = 240;
  XY_ratio = Y_base / X_base;
  width_Tab = 800;
  width_Sma = 670;
  shift_Sma = 50;
  margin_base = 100;

  $("#back-picture img").css("left", (wsize - 1900) / 2 + "px");
  $(".green-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".green-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".green-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);
  $(".blue-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".blue-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".blue-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);
  $(".orange-line").eq(0).css("left", (wsize - width_Tab) / 2);
  $(".orange-line").eq(1).css("left", (wsize - width_Tab) / 2 + 280);
  $(".orange-line").eq(2).css("left", (wsize - width_Tab) / 2 + 280 * 2);

  if (wsize < width_Sma) {
    $("#title,.footer-title").css("left", (wsize - 300 - shift_Sma) / 2 + "px");
    $("#back-title,.footer-back-title,.footer-mid,.footer-bot").css("left", (wsize - 600 - shift_Sma) / 2 + "px");
    $("#board").css("left", (wsize - 270 - shift_Sma) / 2 + "px");
    $("#header-picture p").css("left", (wsize - 170 - shift_Sma) / 2 + "px");
    $("#flower1").css("left", (wsize - 450 - shift_Sma) / 2 + "px");
    $("#flower2").css("left", (wsize + 350 - shift_Sma) / 2 + "px");
    $("#leaf").css("left", (wsize - 400 - shift_Sma) / 2 + "px");
  } else {
    $("#title,.footer-title").css("left", (wsize - 300) / 2 + "px");
    $("#back-title,.footer-back-title,.footer-mid,.footer-bot").css("left", (wsize - 600) / 2 + "px");
    $("#board").css("left", (wsize - 270) / 2 + "px");
    $("#header-picture p").css("left", (wsize - 170) / 2 + "px");
    $("#flower1").css("left", (wsize - 450) / 2 + "px");
    $("#flower2").css("left", (wsize + 350) / 2 + "px");
    $("#leaf").css("left", (wsize - 400) / 2 + "px");
  }
});

