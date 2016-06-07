$(document).ready(function () {

    //keeps numbers smaller than 15 digits 
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
    var total = "0";
    var screendiv = $("#screen");
    screendiv.text("0");

    //when typing in any number
    $(".number").click(function () {

        firstNum += $(this).text();
        screendiv.text(firstNum);
        testNumLength(firstNum);

    });

    //when performing an operation
    $(".operation").click(function () {
        operator = $(this).text();
        secondNum = firstNum;
        firstNum = "";
    });
// clearing screen
    $("#allClear, #clear").click(function () {
        firstNum = "";
        screendiv.text("0");
        if ($(this).attr("id") === "allClear") {
            secondNum = "";
        }
    });

    //when calculating percentage of last number entered
    $(".percentage").click(function () {
        firstNum = firstNum / 100;
        screendiv.text(firstNum);

    });
    
    // when selecting the equals
    $("#equals").click(function () {
        if (operator === "+") {
            total = parseFloat(firstNum) + parseFloat(secondNum);
        } else if (operator === "-") {
            total = parseFloat(secondNum) - parseFloat(firstNum);
        } else if (operator === "/") {
            total = parseFloat(secondNum) / parseFloat(firstNum);
        } else if (operator === "X") {
            total = parseFloat(secondNum) * parseFloat(firstNum);
        }
        total = total.toString(10);
        screendiv.text(total);
        firstNum = total;
        console.log(total);
    });


});