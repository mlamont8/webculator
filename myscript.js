$(document).ready(function () {

    var testNumLength = function (number) {
        if (number.length > 9) {
            screendiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                screendiv.text("Err");
            }
        }
    };
    var firstNum = "";
    var secondNum = "";
    var operator = "";
    var total = "";
    var screendiv = $("#screen");
    screendiv.text("0");
    $(".number").click(function () {

        firstNum += $(this).text();
        screendiv.text(firstNum);
        testNumLength(firstNum);

    });
    $(".operation").click(function () {
        operator = $(this).text;
        secondNum = firstNum;
        firstNum = "";
        screendiv.text("0");

    });

    $("#allClear #clear").click(function () {
        firstNum = "";
        screendiv.text("0");
        if ($(this).attr("id") === "allClear") {
            secondNum = "";
        }


    });
    $(".equals").click(function () {


    });

});