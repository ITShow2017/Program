  var sumEvent14 = 0,sumEvent15 = 0, sumEvent16 = 0, sumEvent17 = 0;//用来分别记录每年的大事件件数，来加到不同的位置
	$(document).ready(function(){ 

		        $.ajax({ 
		            type: "GET", 	
		            url: "Ajax/EventHandler.ashx",
		            dataType: "JSON",
	
		            success: function (data) {

		                for (j = 0; j < data.length; j++) {
		                    var year = data[j].EventTime;
		                    if (year.slice(0, 4) == "2014") {
		                        sumEvent14++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-14"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }


		                    }
		                    else if (year.slice(0, 4) == "2015") {
		                        sumEvent15++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-15"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }
		                    else if (year.slice(0, 4) == "2016") {
		                        sumEvent16++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-16"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }
		                    else if (year.slice(0, 4) == "2017") {
		                        sumEvent17++;
		                        var row = $("<div>").addClass("accomplishment-row").appendTo($(".accomplishment-17"));
		                        var rowLeft = $("<div>").addClass("accomplishment-left").appendTo(row);
		                        var rowYear = $("<h2>").text(data[j].EventTime).appendTo(rowLeft);
		                        var rowDot = $("<img>").attr("src", "images/dot.png").appendTo(rowLeft);
		                        var rowRight = $("<div>").addClass("accomplishment-right").appendTo(row);
		                        var rowP = $("<p>").appendTo(rowRight);
		                        var rowSpan = $("<span>").text(data[j].EventContent).appendTo(rowP);
		                        if (data[j].EventImage != "") {
		                            var rowImg = $("<img>").attr("src", data[j].EventImage).appendTo(rowRight);
		                            rowImg.css({ "display": "none" })
		                        }
		                    }

		                }
		            }
		    
		        });



		
	    $(function(){
		var H,W;//窗口的宽高
		var flag=false;//记录钟表是否已经被点开
		var index_;//记录点开的是哪一个钟表
		var i=4;//记录一共有几个年份
		var init_=-1;//记录当前是展示的哪个年份·
		var clockBoxTop= parseInt($(".navigation-box").css("top"))+parseInt($(".navigation-box").css("height"))//保存时钟容器的top值，用来计算时间容器的高度
		var clockHeight=parseInt($(".clock").css("height"))//保存时钟的高度，用来计算时钟的top值

		if($.browser.version != "7.0")//判断是不是IE7 ，IE7下不支持“$(window).width()”
			{	 H=$(window).height();//获得窗口宽度
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
				if(H<=650)//窗口高度小于650，就定高
					{
						$("body").css({"height":650});
						$(".container").css({"height":650});
						H=650;
					}
					else {
						$(".container").css({"height":H});
					}
					timer = setTimeout(function () {
				$(".clock-box").css({"height": (H-clockBoxTop*2)})
				$(".clock").each(function(index){
					$(this).css({"top":index*((H-clockBoxTop*2-i*clockHeight)/(i-1)+clockHeight)})
				})
				$(".clock").eq(i-1).css({"margin-bottom":0})
				 },5);
				$(window).resize(function(){//浏览器缩放重新设置位置
					if(W<=1150)//窗口宽度小于1100，就定宽（窗口宽高改变后的设置）
					{
						$(".container").css({"width":1150});
					}
					else {
						$(".container").css({"width":100+"%"});
					}
					if(H<=650)//窗口高度小于650，就定高
					{
						$("body").css({"height":650});
						$(".container").css({"height":650});
						H=650;
					}
					else {
						$(".container").css({"height":H});
					}
						if(flag==false)//时钟未点开浏览器宽高变化需要重新设置位置
						{
							$(".clock-box").css({"height": (H-clockBoxTop*2)})
							$(".clock").each(function(index){
							$(this).css({"top":index*((H-clockBoxTop*2-i*clockHeight)/(i-1)+clockHeight)})
							})
						}
						else if(flag==true){//时钟点开后浏览器宽高变化需要重新设置位置
								            
								       var clockArray=$(".clock ")
								            var accomplishment=index_+14;
								            var topClock=clockArray.slice(0,index_+1);
								            var bottomClock=clockArray.slice(index_+1);
								            var sum1=parseInt(index_);
								            var sum2=parseInt(index_);
								            topClock.each(function(){
								            	var this_=$(this);
								            	$(this).css({
								            		"width":70,
								            		"height":70,
								            		"margin-left":10,
								            		"top":70*(sum1-index_)})
								            	sum1+=1;
								            })
								            bottomClock.each(function(){
								            	var _this_=$(this);
								            	$(this).css({
								            		"top":(H-clockBoxTop*2-i*70+(sum2+1)*70)})
								            		sum2+=1;  	
								            })

                    							 if(accomplishment==14)
									            { 
									            	init_=0;
									            				
									            	change(index_,14)
									            }
									            else if(accomplishment==15)
									            { 	init_=1;
						            				change(index_,15)
						            			}
						            			else if(accomplishment==16)
						            			{ 
						            				init_=2;
						            				change(index_,16)
						            				
						            			}
						            			else if(accomplishment==17)
						            				
						            			{
						            				init_=3;
						            				change(index_,17)
						            			}

						}

						

				});

			}
		else {
			H=1000;
			W=1500;
			$(".container").css({"width":W});
			$(".container").css({"height":H});//设置主容器高
			timer = setTimeout(function () {
				$(".clock-box").css({"height": (H-clockBoxTop*2)})
				$(".clock").each(function(index){
					$(this).css({"top":index*((H-clockBoxTop*2-i*clockHeight)/(i-1)+clockHeight)})
				})
				$(".clock").eq(i-1).css({"margin-bottom":0})
				 },5);
		}
			$(".mid-line1").animate({"height": clockBoxTop},500,function(){//动画的动画效果嵌套回调，实现顺序
				$("#0 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
					$("#1 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
						$("#2 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
							$("#3 .colck-image-box").animate({"height":$(".clock-box").css("width")},500,function(){
							    $(".mid-line2").animate({ "height": clockBoxTop }, 500, function () {

									

									var clockArray=$(".clock ")
										$(".clock ").on("click",function(){
											flag=true;

											if($(this).is(':animated')||$(".clock a").is(':animated')||$(".accomplishment-left").is(':animated'))//如果正有动画执行则钟表不可点
											{
												return;
											}
											else{
												

												$(".clock a").animate({"left":-50},1,function(){
													$(this).animate({"top":25},300)
												})
								            index_=parseInt($(this).attr("id"));//保存当前点开的钟表
								            if(init_==index_)
											{
												return;//如果当前点击的和正在展示的一样就返回
											}
								            init(init_,index_);//否则重新设置位置，进行展示
								            var accomplishment=index_+14;
								            var topClock=clockArray.slice(0,index_+1);//移到顶部的时钟
								            var bottomClock=clockArray.slice(index_+1);//移到底部的时钟
								            var sum1=parseInt(index_);
								            var sum2=parseInt(index_);
								            topClock.each(function(){//设置位置
								            	var this_=$(this);
								            	$(this).animate({
								            		"width":70,
								            		"height":70,
								            		"margin-left":10,
								            		"top":70*(sum1-index_)},300)
								            	sum1+=1;
								            })
								            bottomClock.each(function(){
								            	var _this_=$(this);
								            	$(this).animate({
								            		"width":70,
								            		"height":70,
								            		"margin-left":10,
								            		"top":(H-clockBoxTop*2-i*70+(sum2+1)*70)},300)
								            		sum2+=1;  	
								            })
								            timer = setTimeout(function () {//时钟移动后事件的进入
                    							 if(accomplishment==14)
									            { 
									            	init_=0;
									            				
									            	show(index_,14)
									            }
									            else if(accomplishment==15)
									            { 	init_=1;
						            				show(index_,15)
						            			}
						            			else if(accomplishment==16)
						            			{ 
						            				init_=2;
						            				show(index_,16)
						            				
						            			}
						            			else if(accomplishment==17)
						            				
						            			{
						            				init_=3;
						            				show(index_,17)
						            			}
                   						 			
               								 },300);
									           
											}
								 		})
								 		$(".accomplishment-right").each(function(){
								 			if($(this).find("img").length>0 )
								 			{
								 				var this_=$(this);
								 				$(this).find("span").css({"cursor":"pointer"})
								 				$(this).find("span").hover(function(){$(this).css({"color":"#e94e1b"});
								 					 this_.prev().find("h2").css({"color":"#e94e1b"})
								 					},function(){$(this).css({"color":"black"});
								 					this_.prev().find("h2").css({"color":"black"})
								 				})
								 				
								 			}
								 		})
								 		$(".accomplishment-right p").find("span").on("click",function(){
											var this_=$(this)
								 			if($(this).parent("p").parent(".accomplishment-right").find("img").length>0 )
								 			{
									 			$("body").after($("<div class='open'><p class='bottomText'></p></div>"),"<div class='mask'></div>")
									 			 $(this).parent("p").parent(".accomplishment-right").find("img").appendTo(".open").css({
									 			 	"display":"block",
									 			 	"width":100+"%",
									 			 	"height":460
									 			 });
													$(".mask").css(
													{
														'height':$(".container").css("height"),
														'width':$(".container").css("width")
													})
													
													$(".open").css(
													{
														'top':50+"%",

													})
													$(".bottomText").text($(this).text())
														
												
													$(window).resize(function(){

														$(".mask").css(
														{
														'height':$(".container").css("height"),
														'width':$(".container").css("width")
														})
													
														$(".open").css(
														{
															'top':50+"%"
														})

													});
													$(".mask").on('click',function(){
														$(".open").find("img").appendTo( this_.parent("p").parent(".accomplishment-right")).css({"display":"none"});
														$(".open").remove();
														$(".mask").remove();
													})
								 			}
								 			
											})
								})
							})
						})
					})
				})	
			})
		function show(init,id){//事件进入
			var j=0;//用来保存事件的个数进行计算
			var show_;//保留需要展示的是哪个容器
			if(id==14)
			{
			    j = sumEvent14;
				show_=$(".accomplishment-14")
			}
			else if(id==15)
			{
			    j = sumEvent15;
				show_=$(".accomplishment-15")
			}
			else if(id==16)
			{
			    j = sumEvent16;
				show_=$(".accomplishment-16")
			}
			else if(id==17)
			{
			    j = sumEvent17;
				show_=$(".accomplishment-17")
			}
			$(".activity-mid-line").animate({"top":clockBoxTop+(init+1)*70},1,function(){//中间线的展示
				$(this).animate({"height":H-clockBoxTop*2-i*70},300,function(){	
					show_.css({"display":"block"}).animate({
											   "top":50+(init+1)*70
												},1,function(){
													var time=300;
													for( var k=0;k<j;k++)
													{ 	
														show_.find(".accomplishment-row").eq(k).find('.accomplishment-left')
																		   .animate({ left   : '50%'}, time)
										            						.end()
																		   .find('.accomplishment-right')
																		  .animate({ left   : '50%'}, time)	
																		  time+=200;

													}		
												})
					show_.find(".accomplishment-row").each(function (index) {
					    $(this).css({ "top": (H - (clockBoxTop * 2 + (i) * 70)) / (j + 1) * (index + 1) })
					})
							})
						})
		}
		function init(init_,index_){//点其他年份进行的当前年份的还原函数
			var id;
			if(init_==0)
			{
				Mclear(0)
			}
			else if(init_==1)
			{
				Mclear(1)
			}
			else if(init_==2)
			{
				Mclear(2)
			}
			else if(init_==3)
			{
				Mclear(3)
			}
			$(".activity-mid-line").css({"height":0})//中间线的还原
		}
		function Mclear(init_)
		{
			if(init_==0)
			{
				id=$(".accomplishment-14")//保留需要还原是哪个容器
			}
			else if(init_==1)
			{
				id=$(".accomplishment-15")
			}
			else if(init_==2)
			{
				id=$(".accomplishment-16")
			}
			else if(init_==3)
			{
				id=$(".accomplishment-17")
			}
			id.css({"display":"none"})//进行还原
			id.find('.accomplishment-left').css({ left   : '-100%'}).end().find('.accomplishment-right').animate({ left   : '100%'})//进行还原	

		}
		function change(init,id)
		{
			var j=0;//记录一共几行
			var show_;//记录容器
			if(id==14)//判断执行函数的是哪个容器
			{
			    j = sumEvent14;
				show_=$(".accomplishment-14")//保留当前是哪个容器
			}
			else if(id==15)
			{
			    j = sumEvent15;
				show_=$(".accomplishment-15")
			}
			else if(id==16)
			{
			    j = sumEvent16;
				show_=$(".accomplishment-16")
			}
			else if(id==17)
			{
			    j = sumEvent17;
				show_=$(".accomplishment-17")
			}
			$(".activity-mid-line").css({"top":clockBoxTop+(init+1)*70,
										"height":H-clockBoxTop*2-i*70})
			
					show_.find(".accomplishment-row").each(function(index){//计算并设置当前时期每行的位置
						$(this).css({"top":(H-(clockBoxTop*2+(i)*70))/(j+1)*(index+1)})
					})
					show_.css({ "top":clockBoxTop- parseInt($(".navigation-box").css("top"))+(init+1)*70})//计算当前容器的位置并设置

		}
	    })

	    var scollTopSum = 0, scollBottomSum = 0;
	    $('.container').mousewheel(function (event, delta) {
	        if (delta > 0) {
	            scollTopSum++;//记录滚轮次数
	            scollTop()//设置定时器，滚轮在极短时间内滚动三次才跳页，避免误动滚轮的情况
	            return false;   //阻止事件冒泡
	        }
	        else if (delta < 0) {
	            scollBottomSum++;
	            scollBottom()
	            return false;


	        }

	    });
	    function scollTop() {//鼠标滚轮事件    
	        if (scollTopSum == 3) {
	            window.location.href = "Works.aspx";
	        }
	        var timer = setTimeout(function () {
	            scollTopSum = 0;
	        }, 500)

	    }
	    function scollBottom() {//鼠标滚轮事件    
	        if (scollBottomSum == 3) {
	            window.location.href = "MemberShow.aspx";
	        }
	        var timer = setTimeout(function () {
	            scollBottomSum = 0;
	        }, 500)

	    }


	})