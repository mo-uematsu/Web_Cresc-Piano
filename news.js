$(document).ready(function () {
    wsize = $(window).width();
    width_Tab = 800;
    width_Sma = 670;
    margin_base = 100;

    if (wsize < width_Tab) {
        $("#news-page").css("height", wsize * 3 / 2 + "px")
        $("#news-page-contents").css("left", margin_base / 2 + "px");
        $(".news-box").css("width", wsize - margin_base + "px");
        $(".news-box").css("height", (wsize - margin_base) / 4 - 10 + "px");
        $(".news-content").css("height", (wsize - margin_base) / 5 - 50 + "px")
        $(".news-line").css("width", (wsize - margin_base) / 3 - 10 + "px");
        $(".news-picture").css("width", (wsize - margin_base) / 5 + "px");
    } else {
        $("#news-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});

$(window).resize(function () {
    wsize = $(window).width();
    width_Tab = 800;
    width_Sma = 670;
    margin_base = 100;

    if (wsize < width_Tab) {
        $("#news-page").css("height", wsize * 3 / 2 + "px")
        $("#news-page-contents").css("left", margin_base / 2 + "px");
        $(".news-box").css("width", wsize - margin_base + "px");
        $(".news-box").css("height", (wsize - margin_base) / 4 - 10 + "px");
        $(".news-content").css("height", (wsize - margin_base) / 5 - 50 + "px")
        $(".news-line").css("width", (wsize - margin_base) / 3 - 10 + "px");
        $(".news-picture").css("width", (wsize - margin_base) / 5 + "px");
    } else {
        $("#news-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});