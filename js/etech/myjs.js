$(document).ready(function() {
    $("#bestseller").click(function() {

        $(".widget").hide();
        $(".most_viewed").hide();
        $(".mybestseller").show();
    });
    $("#my-new").click(function() {
        $(".widget").show();
        $(".mybestseller").hide();
        $(".most_viewed").hide();
    });
    $("#most-view").click(function() {

        $(".most_viewed").show();
        $(".mybestseller").hide();
        $(".widget").hide();
    });

    var count = 0;
    $(".my-menu-button").click(function(e) {
        e.preventDefault();
        if (count == 0) {
            $('.quick-access').slideDown();
            $(".quick-access").css("display", "block");

            count++;
        }
        else {
            $('.quick-access').slideUp();
            //$(".quick-access").css("display","none");

            count = 0;
        }

    });



});

jQuery(window).load(function() {

    jQuery(".mybestseller").hide();
    jQuery(".most_viewed").hide();
});




