$(document).ready(function(){
    $("#2020Extend").click(function() {
        if ($("#2020Container").is(":hidden")) {
            $('#2020Container').show();
            $('#2020Extend i').attr("class", "fas fa-caret-right");
            $('#2020Extend i').attr("class", "fas fa-caret-down");
        }
        else {
            $('#2020Container').hide();
            $('#2020Extend i').attr("class", "fas fa-caret-down");
            $('#2020Extend i').attr("class", "fas fa-caret-right");
        }
    });

    $("#2019Extend").click(function() {
        if ($("#2019Container").is(":hidden")) {
            $('#2019Container').show();
            $('#2019Extend i').attr("class", "fas fa-caret-right");
            $('#2019Extend i').attr("class", "fas fa-caret-down");
        }
        else {
            $('#2019Container').hide();
            $('#2019Extend i').attr("class", "fas fa-caret-down");
            $('#2019Extend i').attr("class", "fas fa-caret-right");
        }
    });

    $("#2018Extend").click(function() {
        if ($("#2018Container").is(":hidden")) {
            $('#2018Container').show();
            $('#2018Extend i').attr("class", "fas fa-caret-right");
            $('#2018Extend i').attr("class", "fas fa-caret-down");
        }
        else {
            $('#2018Container').hide();
            $('#2018Extend i').attr("class", "fas fa-caret-down");
            $('#2018Extend i').attr("class", "fas fa-caret-right");
        }
    });
});