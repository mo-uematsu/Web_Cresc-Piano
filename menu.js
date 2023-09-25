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
