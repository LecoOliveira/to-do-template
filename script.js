$('.form-login .sign-up a').click(function () {
    $('.form-login').animate({ height: "toggle", opacity: "toggle" }, "fast");
    $('.form-register').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$('.form-register .sign-up a').click(function () {
    $('.form-register').animate({ height: "toggle", opacity: "toggle" }, "fast");
    $('.form-login').animate({ height: "toggle", opacity: "toggle" }, "slow");
});