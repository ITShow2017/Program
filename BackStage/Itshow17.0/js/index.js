
$(function(){
	//一些由js控制的随着可视窗口大小变化的宽高
		$(".container").css({
			"height":$(window).height(),
			"width":"100%"
		});
		/*$(".about-IT-in").css({
			"height":$(window).width()*0.107
		});
		$(".about-IT img").css({
			"height":$(window).width()*0.107
		});*/
		$(".next-page").css({
			"bottom":$(".next-page-background").height(),
			"left":($(".container").width()-$(".next-page-background").width())/2
		});
		if($(window).width()/$(window).height()>=(1900/886))
		{
			$(".container").css({
				"backgroundSize":"100% auto"
			});
		}
		else{
			$(".container").css({
				"backgroundSize":"auto 100%"
			});
		}
	$(window).resize(function(){
		if($(window).width()>980){
			$(".container").css({
			"height":$(window).height(),
			"width":"100%"
			});
			if($(window).width()/$(window).height()>=(1900/886))
			{
				$(".container").css({
					"backgroundSize":"100% auto"
				});
			}
			else{
				$(".container").css({
					"backgroundSize":"auto 100%"
				});
			}
		}
		else{
			$(".container").css({
				"width":980,
				"height":$(window).height()
			});
		}
		/*$(".about-IT-in").css({
			"height":$(window).width()*0.107

		});*/
		$(".about-IT-in>img").css({
			"width":$(".about-IT-in").width()
		});
		/*$(".about-IT img").css({
			"height":$(window).width()*0.107
		});*/
		$(".next-page").css({
			"bottom":$(".next-page-background").height(),
			"left":($(".container").width()-$(".next-page-background").width())/2
		});
	})

	//关于爱特的各个内容的翻转效果
	var turn = function(target,time,opts){
		target.find('.about-IT-in').hover(function itshow(){
			var realaboutit=$(".about-IT-in").width();
			if(!$(this).children('img').is(":animated")){

				$(this).children('img').stop().animate(opts[0],time,function(){

					var aboutithidden=$('.about-IT').children("img").not($(this));
					$(this).hide().next().show();

				//$(this).next().animate(opts[1],time);
					$(this).next().animate({width:realaboutit},time);
				});
			}
		},function ithidden(){
			var realaboutit=$(".about-IT-in").width();
			$(this).children('div').animate(opts[0],time,function(){

				$(this).hide().prev().show();

				//$(this).prev().animate(opts[1],time);
				$(this).prev().animate({width:realaboutit},time);

			});

		});

	}

	var verticalOpts = [{'width':0},{'width':"100%"}];
	/*$(window).resize(function(){
		console.log(realaboutit);
		verticalOpts = [{'width':0},{'width':realaboutit}];
	})*/
	turn($('.all-about-IT'),150,verticalOpts);
	//到下一页的效果
	var arrowChange=setInterval(arrowShow,2000);
	function arrowShow(){
    	$(".next-page-arrow").animate({opacity:0},1000,function(){
    		$(this).animate({opacity:1},1000);
    	});
   }
    //var escroll=false;
	var scollSum = 0;
	$('.container').mousewheel(function (event, delta) {
	    if (delta < 0) {
	        scollSum++;//记录滚轮次数
	        scoll()//设置定时器，滚轮在极短时间内滚动三次才跳页，避免误动滚轮的情况
	        return false;   //阻止事件冒泡
	    }
	});
	function scoll() {//鼠标滚轮事件    
	    if (scollSum == 3) {
	        window.location.href = "Introdution.aspx";
	    }
	    var timer = setTimeout(function () {
	        scollSum = 0;
	    }, 500)

	}
	//$('.container').bind('mousewheel', function(event, delta) {
    //	if (delta<0) {
    //window.location.href = "Introdution.aspx";
    //	}
	//});
	$(".next-page").click(function () {
		window.location.href="Introdution.aspx";
	})

})