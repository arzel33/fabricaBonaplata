window.onload = function() {
        scrollTo(0, 0);
        setTimeout(function(){
                $("#header").animate({
                        opacity: "1"
                }, 1200);
                setTimeout(function(){
                        $("#header").animate({
                                top: "15%"
                        }, 690);
                        setTimeout(function(){
                                $("#description").animate({
                                        opacity: "1"
                                }, 500);
                                setTimeout(function(){
                                        $("#motors").animate({
                                                opacity: "1"
                                        }, 500);
                                        $("#repre").animate({
                                                opacity: "1"
                                        }, 500);
                                }, 800);
                        }, 600);
                }, 1500);       
        }, 500);
}

