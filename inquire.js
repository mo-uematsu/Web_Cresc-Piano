$("#back-btn").on("click", function () {
    $("#send").val("back");
});

$(document).ready(function () {
    wsize = $(window).width();
    width_Tab = 800;
    width_Sma = 670;
    margin_base = 100;

    if (wsize < width_Tab) {
        $("#inquire-page-contents").css("left", margin_base / 2 + "px");
        $("#top-link").css("left", wsize / 2 - 125 + "px");
    } else {
        $("#inquire-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});

$(document).ready(function () {
    if (document.URL.match(/\?/)) { // URLパラメータが存在する場合処理を行う
        var url = location.href;
        var urlArray = url.split("?");
        var paramData = urlArray[1].split("&");
        var paramName = paramData[0].split("=");
        var paramEmail = paramData[1].split("=");
        var paramContent = paramData[2].split("=");
        var paramSend = paramData[3].split("=");

        $("#name").val(decodeURI(paramName[1]));
        $("#email").val(decodeURIComponent(paramEmail[1]));
        $("#content").val(decodeURI(paramContent[1]));
        $("#send").val(paramSend[1]);
        // 値を取得
        if ($("#send").val() == "send") {
            $("#inquire-comment p").html("　お問い合わせいただきありがとうございます。数日以内には返信をさせていただきます。")
            $("#top-link").css("display", "block");
            $(".inquire-content").css("display", "none");
            $("#send-btn").css("display", "inline-block");
            $("#inquire-page").css("height", 300 + "px");
        } else if ($("#send").val() == "back") {
            $("#inquire-comment p").html("　体験レッスンについてや相談、質問などを受け付けております。気軽に以下のフォームからお問い合わせください。")
            $("#attention").html("<span>*</span>は必須項目です");
            $("#conf-btn").css("display","none");
            $("#back-btn").css("display","inline-block");
            $("#send-btn").css("display", "inline-block");
            $("#conf-btn").css("display","inline-block");
            $("#back-btn").css("display","none");
            $("#send-btn").css("display", "none");
            $("#name").prop("type", "text");
            $("#email").prop("type", "text");
            $("#content").css("display", "block");
            $("#send").val("");
        } else if ($("#name").val() == "" || $("#email").val() == "" || $("#content").val() == "") {
            $("#attention").html("<span>必須項目が入力されていません。<span>");
        } else {
            $("#inquire-comment p").html("　入力したお問い合わせ内容を確認してください。")
            $("#attention").html("上記の問い合わせ内容でよろしければ送信してください。");
            $("#conf-btn").css("display","none");
            $("#back-btn").css("display","inline-block");
            $("#send-btn").css("display", "inline-block");
            $("#send").val("send");
            $("#name").prop("type", "hidden");
            $("#email").prop("type", "hidden");
            $("#content").css("display", "none");
            $("#name-data").text($("#name").val());
            $("#email-data").text($("#email").val());
            $("#content-data").text($("#content").val());
        }
    }
});


$(window).resize(function () {
    wsize = $(window).width();
    width_Tab = 800;
    width_Sma = 670;
    margin_base = 100;

    if (wsize < width_Tab) {
        $("#inquire-page-contents").css("left", margin_base / 2 + "px");
        $("#top-link").css("left", wsize / 2 - 125 + "px");
    } else {
        $("#inquire-page-contents").css("left", (wsize - width_Tab) / 2 + margin_base + "px");
    }
});