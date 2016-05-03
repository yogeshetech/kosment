$(document).ready(function() {

    $("#bestseller").click(function() {

        $(".widget").hide();
        $(".most_viewed").hide();
        $(".mybestseller").show();
        if (window.matchMedia('(max-width: 480px)').matches)
        {
             $(".cms-index-index .page .main .std .my-new-product .my-height").css({"height": "1105px"});
        }

    });
    $("#my-new").click(function() {
        $(".widget").show();
        $(".mybestseller").hide();
        $(".most_viewed").hide();
        if (window.matchMedia('(max-width: 480px)').matches)
        {
           $(".cms-index-index .page .main .std .my-new-product .my-height").css({"height": "1173px"});
        }
    });
    $("#most-view").click(function() {

        $(".most_viewed").show();
        $(".mybestseller").hide();
        $(".widget").hide();
        if (window.matchMedia('(max-width: 480px)').matches)
        {
             $(".cms-index-index .page .main .std .my-new-product .my-height").css({"height": "1099px"});
        }
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
          if (window.matchMedia('(max-width: 480px)').matches){
        if (count == 0) {
            $(this).parent('li').css({"background-color": "gray", "height": "70px"});
            count++;
        }
        else {
            $(this).parent('li').css({"background-color": "black", "height": "25px"});
            count = 0;
        }
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

    $(".footer-about").click(function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 480px)').matches)
        {
            if (count == 0) {

                $(this).children('ul').slideDown();
                $(this).children('ul').css("display", "block !important");
                count++;
            }
                else {
                    $(this).children('ul').slideUp();
                    // $(this).children('ul').show();
                    count = 0;
                }
            }
        

    });
    
      $(".footer-about-last").click(function(e) {
        e.preventDefault();
        if (window.matchMedia('(max-width: 480px)').matches)
        {
            if (count == 0) {

                $(this).children('ul').slideDown();
                $(this).children('ul').css("display", "block !important");
                count++;
            }
                else {
                    $(this).children('ul').slideUp();
                
                    count = 0;
                }
            }
    });
});


jQuery(window).load(function() {

    jQuery(".mybestseller").hide();
    jQuery(".most_viewed").hide();
});




