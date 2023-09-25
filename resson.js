$(document).ready(function () {
    wsize = $(window).width();
    width_Tab = 800;
    margin_base = 50;

    if (wsize < width_Tab) {
        $("#resson-page-contents").css("left", margin_base / 2 + "px");
    } else {
        $("#resson-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});

$(window).resize(function () {
    wsize = $(window).width();
    width_Tab = 800;
    margin_base = 50;

    if (wsize < width_Tab) {
        $("#resson-page-contents").css("left", margin_base / 2 + "px");
    } else {
        $("#resson-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});