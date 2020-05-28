//Animation in form input

$(".form-in input").on("focus", function () {
    $(this).addClass("focus");
});

$(".form-in input").on("blur", function () {
    if ($(this).val() == "") {
        $(this).removeClass("focus");
    }
});
