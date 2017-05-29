   var sum;
        $(document).ready(function(){ 
                $.ajax({ 
                    type: "GET",    
                    url: "../Ajax/WorksHandler.ashx",
                    dataType: "JSON",
                     async : false,
    
                success: function(data) {

                    for (j = 0; j < data.length; j++) {
                            var posterItem= $("<li>").addClass("poster-item").appendTo($(".poster-list"));
                            var posterItemA= $("<a>").attr("href", data[j].WorksUrl).appendTo(posterItem);
                            var posterItemAImg = $("<img>").attr("src", data[j].WorksImage).appendTo(posterItemA);
                            var posterItemAP = $("<p>").addClass("hide").text(data[j].WorksName).appendTo(posterItemA);
                            sum=j+1;
                            
                       }
                    Carousel.init($(".J_Poster"));
                    $(".mask").css({"z-index":Math.floor(sum/2)-2})
                    $(".cover").css({"z-index":Math.floor(sum/2)-1})
                    

                }
                });
           });
            
 $(function(){
        var H,W;
        if($.browser.version != "7.0")//判断是不是IE7 ，IE7下不支持“$(window).width()”
            {    H=$(window).height();//获得窗口宽度
                 W=$(window).width();//获得窗口高度
                $(window).resize(function(){//浏览器缩放重新获得窗口宽高
                    H=$(window).height();
                    W=$(window).width();
                });
               

                   
                     if(W<=1150)//窗口宽度小于1100，就定宽（（默认打开浏览器时的宽高）
                {
                    $(".container").css({"width":1150});
                }
                else{
                    $(".container").css({"width":100+"%"});
                }
                if(H<=660)//窗口高度小于660，就定高
                {
                    $("body").css({"height":660});
                    $(".container").css({"height":660});

                    H=660;
                }
                else if(H>660&& H <=730) {
                    $(".container").css({"height":H});
                    $(".show-box").css({"top":45})
                    $(".poster-main").css({"top":5})
                    $(".hide").css({"top":-15})
                }
                 else if(H>730&&H<=850) {
                    $(".container").css({"height":H});
                    $(".show-box").css({"top":65})
                     $(".poster-main").css({"top":30})
                    $(".hide").css({"top":15})
                }
                 else if(H>850) {
                    $(".container").css({"height":H});
                    $(".show-box").css({"top":120})
                     $(".poster-main").css({"top":40})
                    $(".hide").css({"top":30})
                }
                $(".mid-line").animate({"height":parseInt($(".show-box").css("top"))+25},1000)
                
               
                $(window).resize(function(){//浏览器缩放重新设置位置

                    if(W<=1150)//窗口宽度小于1100，就定宽（窗口宽高改变后的设置）
                    {
                        $(".container").css({"width":1150});
                    }
                    else {
                        $(".container").css({"width":100+"%"});
                    }
                    if(H<=660)//窗口高度小于660，就定高
                    {
                        $("body").css({"height":660});
                        $(".container").css({"height":660});
                        $(".show-box").css({"top":45})
                        $(".poster-main").css({"top":5})
                        $(".hide").css({"top":-15})
                        
                        H=660;
                    }
                    else if(H>660&& H <=730) {
                        $(".container").css({"height":H});
                        $(".show-box").css({"top":45})
                        $(".poster-main").css({"top":5})
                        $(".hide").css({"top":-15})
                        $(".mid-line").css({"height":parseInt($(".show-box").css("top"))+25})
                    }
                     else if(H>730&&H<=850) {
                        $(".container").css({"height":H});
                        $(".show-box").css({"top":65})
                         $(".poster-main").css({"top":30})
                        $(".hide").css({"top":10})
                        $(".mid-line").css({"height":parseInt($(".show-box").css("top"))+25})
                    }
                     else if(H>850) {
                       $(".container").css({"height":H});
                        $(".show-box").css({"top":120})
                         $(".poster-main").css({"top":40})
                        $(".hide").css({"top":30})
                        $(".mid-line").css({"height":parseInt($(".show-box").css("top"))+25})
                    }

                       
                });

            }
        else {
            H=1000;
            W=1500;
            $(".container").css({"width":W});
            $(".container").css({"height":H});//设置主容器高
            $(".show-box").css({"top":150})
                         $(".poster-main").css({"top":100})
                        $(".hide").css({"top":50})
                        $(".mid-line").css({"height":parseInt($(".show-box").css("top"))+25})
        }

           

    function arrowShow(){
        $(".next-page-arrow-bottom").animate({opacity:0},1000,function(){
            $(this).animate({opacity:1},1000);
              arrowShow()
        });
         $(".next-page-arrow-left").animate({opacity:0},1000,function(){
            $(this).animate({opacity:1},1000);
        });
          $(".next-page-arrow-right").animate({opacity:0},1000,function(){
            $(this).animate({opacity:1},1000);
        });

    }
          arrowShow() 


});