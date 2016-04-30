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
    $(".my-cat-button").click(function(e) {
        e.preventDefault();
        if (count == 0) {
            $('#nav').slideDown();
            $("#nav").css("display", "block");

            count++;
        }
        else {
            $('#nav').slideUp();
            //$(".quick-access").css("display","none");

            count = 0;
        }

    });


    $(".new-drop").click(function(e) {
        e.preventDefault();
        if (count == 0) {
            $(this).parent('li').css({"background-color": "gray", "height": "70px"});


            count++;
        }
        else {
            $(this).parent('li').css({"background-color": "black", "height": "25px"});
            count = 0;
        }

    });

    var thetimeout;
    $('#my-search .form-search .button').mouseover(function() {
        clearTimeout(thetimeout);
        $('#my-search .form-search #search').show(300);
    });
    // $('#my-search .form-search .button').mouseleave(function() {
    //  thetimeout = setTimeout(function() {

    // });
    //  });



});


jQuery(window).load(function() {

    jQuery(".mybestseller").hide();
    jQuery(".most_viewed").hide();
});




