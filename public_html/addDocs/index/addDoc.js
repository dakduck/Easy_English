var counter = 0;
$(document).ready(function () {
    $("#prep").change(function () {
        if ($("#prep").prop("checked")) {
            $('#showList').empty();
            $('.tab-content').empty();
            $.get("prep.xml")
                    .done(preplist);
        }
    });
    $("#ten").change(function () {
        if ($("#ten").prop("checked")) {
            $('#showList').empty();
            $('.tab-content').empty();
            $.get("tense.xml")
                    .done(tenselist);
        }
    });
    $("#iv").change(function () {
        if ($("#iv").prop("checked")) {
            $('#showList').empty();
            $(".tab-content").load("table.html");
            $("#pic").attr("src", "iv.jpg");
            $("#nextblob").css("display", "none");
        }
    });
    $("#nextblob").click(function () {
        n = $("#showList li").length;
        if (counter !== n - 1) {
            $("#showList li").eq(counter).removeClass().next().addClass("selected2");
            $(".tab-content").load("showList/" + $("#showList li").eq(counter + 1).attr("data") + ".html");
            $("#pic").attr("src", "showList/" + $("#showList li").eq(counter + 1).attr("data") + ".jpg");
            if (counter === n - 2)
                $("#next").attr("src", "breeds/" + $("li").eq(0).attr("data") + ".jpg");
            else
                $("#next").attr("src", "breeds/" + $("li").eq(counter + 2).attr("data") + ".jpg");
           counter++;
        } else {
            $("#showList li").eq(counter).removeClass();
            counter = 0;
            $("#showList li").eq(counter).addClass("selected2");
            $(".tab-content").load("showList/" + $("#showList li").eq(0).attr("data") + ".html");
            $("#pic").attr("src", "showList/" + $("#showList li").eq(0).attr("data") + ".jpg");
        }
    });

$(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

function preplist(xmlDom) {
    $("#nextblob").css("display", "block");
    counter = 0;
    $(".tab-content").load("showList/about.html");
    $("#pic").attr("src", "showList/about.jpg");
    

    var name = $(xmlDom).find("showList");
    name.each(function (i, e) {
        var elem = $(e).attr("rus");
        $('<li>')
                .text(elem)
                .appendTo($("#showList"))
                .attr("data", $(e).text().replace(' ', '_').toLowerCase());
    });
    $("#showList li").eq(counter).addClass("selected2");
}

function tenselist(xmlDom) {
    $("#nextblob").css("display", "block");
    counter = 0;
    $(".tab-content").load("showList/present_simple.html");
    $("#pic").attr("src", "showList/present_simple.jpg");

    var name = $(xmlDom).find("showList");
    name.each(function (i, e) {
        var elem = $(e).attr("rus");
        $('<li>')
                .text(elem)
                .appendTo($("#showList"))
                .attr("data", $(e).text().toLowerCase().replace(" ", "_"));
    });
    $("#showList li").eq(counter).addClass("selected2");
}
  