"use strict";

$(function() {
    $("ul.tabs").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $("div.tabs-content")
            .find("div.tab-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

let imageArray = document.getElementsByClassName("work-image-item");
let clicked = 0;

$(function loadMore() {
    $("#loader").hide();
    for (let index = 0; index < 12; index++) {
        $(imageArray[index]).show();
    }
    $("#loadMore").on("click", function(event) {
        clicked++;
        $("#loader").show();
        $("#loadMore").hide();
        if (clicked === 1) {
            setTimeout(function() {
                $("#loader").hide();
                for (let index = 12; index < 24; index++) {
                    $(imageArray[index]).fadeIn("slow");
                }
                $("#loadMore").show();
            }, 1000);
        }
        if (clicked === 2) {
            setTimeout(function() {
                $("#loader").hide();
                for (let index = 24; index < imageArray.length; index++) {
                    $(imageArray[index]).fadeIn("slow");
                }
                $("#loadMore").hide();
            }, 1000);
        }
    });
});

$(function filter() {
    $(".work-tab-item").on("click", function() {
        $(".work-image-item").hide();
        $(".work-tab-item").removeClass("work-tab-item-active");
        $(this).addClass("work-tab-item-active");
        imageArray = document.getElementsByClassName($(this).attr("data-type"));
        console.log(imageArray);
        for (let index = 0; index < 12; index++) {
            $(imageArray[index]).show();
        }
        if ($(imageArray).length <= 12) {
            $("#loadMore").hide();
        } else {
            $("#loadMore").show();
        }
    });
});

let hero = 0;
$(function carousel() {
    $("#sliderList li:first-child")
        .addClass("active")
        .animate({ bottom: +15 + "px" }, 300);

    function moveTo(hero) {
        $("#sliderList li")
            .removeClass("active")
            .eq(hero)
            .addClass("active");
        $("#sliderList li.active").animate({ bottom: +15 + "px" }, 300);
        $(".hero-list").animate({ left: -163 * hero + "px" }, 300);
    }

    $("#leftButton").click(function() {
        hero = $("#sliderList li.active").index();
        if (hero === 0) {
            hero = 4;
        }
        hero -= 1;
        moveTo(hero);
    });

    $("#rightButton").click(function() {
        hero = $("#sliderList li.active").index();
        if (hero === 3) {
            hero = -1;
        }
        hero += 1;
        moveTo(hero);
    });
});
