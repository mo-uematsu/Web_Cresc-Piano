
function slideSwitch() {
    var $active = $("#slideshow img.active,#slideshow-number-current img.active");

    if ($active.length == 0) $active = $("#slideshow img:last");

    var $next = $active.next().length ? $active.next()
        : $("#slideshow img:first,#slideshow-number-current img:first");

    $active.addClass("last-active");

    $next.css({ opacity: 0.0 })
        .addClass("active")
        .animate({ opacity: 1.0 }, 500, function () {
            $active.removeClass("active last-active");
        });
}

$(function () {
    setInterval("slideSwitch()", 5000);
});


$("#inquire-link-btn,#news-link-btn").hover(function () {
    $(this).css("color", "rgba(59,175,117,1.0)");
    $(this).css("border", "1px solid rgba(59,175,117,1.0)");
    // $(this).animate({color: rgba(59,175,117,1.0)},1000);
}, function () {
    $(this).css("color", "rgba(0,0,0,0.8)");
    $(this).css("border", "1px solid rgba(0,0,0,0.5)");
});

$(document).ready(function () {
    wsize = $(window).width();
    X_base = 600;
    Y_base = 240;
    XY_ratio = Y_base / X_base;
    width_Tab = 800;
    width_Sma = 670;
    shift_Sma = 50;
    margin_base = 100;
    $contents = $("#news-contents,#base-info-contents,#resson-contents,#introduce-contents,#inquire-contents");
    $contents_left = $("#news-contents,#inquire-contents");
    $contents_right = $("#base-info-contents,#resson-contents,#introduce-contents");

    // $("#inquire-contents").css("width", wsize - 140);
    $("#inquire-link-btn").css("left", (wsize - 100) / 2 + "px");
    $("#slideshow-number,#slideshow-number-current").css("left", (wsize - 30) / 2 + "px");

    if (wsize < width_Sma) {
        $("#slideshow").css("height", wsize / width_Sma * Y_base + 60 + "px");
        $("#slideshow img").css("width", wsize / width_Sma * X_base + "px");
        $("#slideshow img").css("height", wsize / width_Sma * Y_base + "px");
        $("#slideshow img").css("left", wsize / width_Sma * margin_base / 2 + "px");
        $("#slideshow img").css("border-radius", "70px");
        $("#slideshow img").css("border", "7px solid rgba(0,182,110,0.2)");
        $("#slideshow-number,#slideshow-number-current").css("top", wsize / width_Sma * Y_base + 10 + "px");
        $("#leaf-note").css("left", (wsize - 250 - shift_Sma) / 2 + "px");
        $(".bird").eq(0).css("left", wsize / width_Sma * margin_base / 2 - 50 + "px");
        $(".bird").eq(1).css("top", wsize / width_Sma * Y_base - 50 + "px"); // "#slideshow img"の"height"の定数引き
        $(".bird").eq(1).css("left", wsize / width_Sma * X_base - 25 + "px"); // "#slideshow img"の"width"の定数引き
        $(".blue-line").css("top", wsize / width_Sma * Y_base + 50 + "px"); // "#slideshow img"の"height"の定数引き
        $contents.css("left", wsize / width_Sma * margin_base / 2 + "px");
    } else {
        $("#slideshow").css("height", (wsize - margin_base) * XY_ratio + 60 + "px");
        $("#slideshow img").css("width", (wsize - margin_base) + "px");
        $("#slideshow img").css("height", (wsize - margin_base) * XY_ratio + "px");
        $("#slideshow img").css("left", margin_base / 2 + "px");
        $("#slideshow-number,#slideshow-number-current").css("top", (wsize - margin_base) * XY_ratio + 10 + "px");
        $("#leaf-note").css("left", (wsize - 250) / 2 + "px");
        $(".bird").eq(0).css("left", margin_base / 2 - 50 + "px"); // "#slideshow img"の"left"の定数引き
        $(".bird").eq(1).css("top", (wsize - margin_base) * XY_ratio - 50 + "px"); // "#slideshow img"の"height"の定数引き
        $(".bird").eq(1).css("left", (wsize - margin_base) - 25 + "px"); // "#slideshow img"の"width"の定数引き
        $(".blue-line").css("top", (wsize - margin_base) * XY_ratio + 50 + "px"); // "#slideshow img"の"height"の定数引き
        $contents.css("left", margin_base / 2 + "px");
        if (wsize > width_Tab) {
            $("#slideshow").css("height", (width_Tab - margin_base + shift_Sma) * XY_ratio + 60 + "px");
            $("#slideshow img").css("width", width_Tab - margin_base + shift_Sma + "px");
            $("#slideshow img").css("height", (width_Tab - margin_base + shift_Sma) * XY_ratio + "px");
            $("#slideshow img").css("left", (wsize - (width_Tab - margin_base)) / 2 + "px");
            $("#slideshow-number,#slideshow-number-current").css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio + 10 + "px");
            $(".bird").eq(0).css("left", (wsize - (width_Tab - margin_base)) / 2 - 50 + "px"); // "#slideshow img"の"left"の定数引き
            $(".bird").eq(1).css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio - 50 + "px"); // "#slideshow img"の"height"の定数引き
            $(".bird").eq(1).css("left", (wsize - (width_Tab - margin_base)) / 2 + width_Tab - margin_base - 25 + "px"); // "#slideshow img"の"left"の定数引き
            $(".blue-line").css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio + 50 + "px"); // "#slideshow img"の"height"の定数引き
            $contents_left.css("left", (wsize - (width_Tab - margin_base)) / 2 + "px");
            $contents_right.css("left", (wsize - (width_Tab - margin_base)) / 2 + 400 + "px");
        }
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
    $contents = $("#news-contents,#base-info-contents,#resson-contents,#introduce-contents,#inquire-contents");
    $contents_left = $("#news-contents,#inquire-contents");
    $contents_right = $("#base-info-contents,#resson-contents,#introduce-contents");

    // $("#inquire-contents").css("width", wsize - 140);
    $("#inquire-link-btn").css("left", (wsize - 100) / 2 + "px");
    $("#slideshow-number,#slideshow-number-current").css("left", (wsize - 30) / 2 + "px");

    if (wsize < width_Sma) {
        $("#slideshow").css("height", wsize / width_Sma * Y_base + 60 + "px");
        $("#slideshow img").css("width", wsize / width_Sma * X_base + "px");
        $("#slideshow img").css("height", wsize / width_Sma * Y_base + "px");
        $("#slideshow img").css("left", wsize / width_Sma * margin_base / 2 + "px");
        $("#slideshow img").css("border-radius", "70px");
        $("#slideshow img").css("border", "7px solid rgba(0,182,110,0.2)");
        $("#slideshow-number,#slideshow-number-current").css("top", wsize / width_Sma * Y_base + 10 + "px");
        $("#leaf-note").css("left", (wsize - 250 - shift_Sma) / 2 + "px");
        $(".bird").eq(0).css("left", wsize / width_Sma * margin_base / 2 - 50 + "px");
        $(".bird").eq(1).css("top", wsize / width_Sma * Y_base - 50 + "px"); // "#slideshow img"の"height"の定数引き
        $(".bird").eq(1).css("left", wsize / width_Sma * X_base - 25 + "px"); // "#slideshow img"の"width"の定数引き
        $(".blue-line").css("top", wsize / width_Sma * Y_base + 50 + "px"); // "#slideshow img"の"height"の定数引き
        $contents.css("left", wsize / width_Sma * margin_base / 2 + "px");
    } else {
        $("#slideshow").css("height", (wsize - margin_base) * XY_ratio + 60 + "px");
        $("#slideshow img").css("width", wsize - margin_base + "px");
        $("#slideshow img").css("height", (wsize - margin_base) * XY_ratio + "px");
        $("#slideshow img").css("left", margin_base / 2 + "px");
        $("#slideshow img").css("border-radius", "90px");
        $("#slideshow img").css("border", "9px solid rgba(0,182,110,0.2)");
        $("#slideshow-number,#slideshow-number-current").css("top", (wsize - margin_base) * XY_ratio + 10 + "px");
        $("#leaf-note").css("left", (wsize - 250) / 2 + "px");
        $(".bird").eq(0).css("left", margin_base / 2 - 50 + "px"); // "#slideshow img"の"left"の定数引き
        $(".bird").eq(1).css("top", (wsize - margin_base) * XY_ratio - 50 + "px"); // "#slideshow img"の"height"の定数引き
        $(".bird").eq(1).css("left", (wsize - margin_base) - 25 + "px"); // "#slideshow img"の"width"の定数引き
        $(".blue-line").css("top", (wsize - margin_base) * XY_ratio + 50 + "px"); // "#slideshow img"の"height"の定数引き
        $contents.css("left", margin_base / 2  + "px");
        if (wsize > width_Tab) {
            $("#slideshow").css("height", (width_Tab - margin_base + shift_Sma) * XY_ratio + 60 + "px");
            $("#slideshow img").css("width", width_Tab - margin_base + shift_Sma + "px");
            $("#slideshow img").css("height", (width_Tab - margin_base + shift_Sma) * XY_ratio + "px");
            $("#slideshow img").css("left", (wsize - (width_Tab - margin_base)) / 2 + "px");
            $("#slideshow-number,#slideshow-number-current").css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio + 10 + "px");
            $(".bird").eq(0).css("left", (wsize - (width_Tab - margin_base)) / 2 - 50 + "px"); // "#slideshow img"の"left"の定数引き
            $(".bird").eq(1).css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio - 50 + "px"); // "#slideshow img"の"height"の定数引き
            $(".bird").eq(1).css("left", (wsize - (width_Tab - margin_base)) / 2 + width_Tab - margin_base - 25 + "px"); // "#slideshow img"の"left"の定数引き
            $(".blue-line").css("top", (width_Tab - margin_base + shift_Sma) * XY_ratio + 50 + "px"); // "#slideshow img"の"height"の定数引き
            $contents_left.css("left", (wsize - (width_Tab - margin_base)) / 2 + "px");
            $contents_right.css("left", (wsize - (width_Tab - margin_base)) / 2 + 400 + "px");
        }
    }
});
