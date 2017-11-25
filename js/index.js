    function hover(){
        $("#palette").attr("src", "assets/icons/palette2.png");
    }

    function unhover(){
        $("#palette").attr("src", "assets/icons/palette.png");
    }
    
    $(document).ready(function(){
        $("#show_more").click(function(){
            $(".mobile_hidden").show();
            $("#show_more").hide();
        });
    });
