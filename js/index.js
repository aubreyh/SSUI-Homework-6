    function hover(){
        $("#palette").attr("src", "assets/icons/palette2.png");
    }

    function unhover(){
        $("#palette").attr("src", "assets/icons/palette.png");
    }
    
    $(document).ready(function(){
        
        $("#modal").animatedModal({
            modalTarget: 'animatedModal',
            animatedIn: 'slideInRight',
            animatedOut: 'slideOutRight',
            color: '#20252a' /* black */
            /*,
                // Callbacks
            beforeOpen: function() {
                console.log("The animation was called");
            },           
            afterOpen: function() {
                console.log("The animation is completed");
            }, 
            beforeClose: function() {
                console.log("The animation was called");
            }, 
            afterClose: function() {
            console.log("The animation is completed");
            }
            */
        });

        
        $("#show_more").click(function(){
            $(".mobile_hidden").show();
            $("#show_more").hide();
        });
    });
