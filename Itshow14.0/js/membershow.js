//jQuery(".member-entrance-2").slide({mainCell:".member-entrance-page ul",autoPlay:true,delayTime:1000,effect:"leftLoop",interTime:5000});
$(function(){
	$(".member-year:eq(5)")[0].click();
	var memberthisYear;
	$(".member-entrance .hd li:eq(0)").addClass("onhd");
	$(".pop-member").css({
		"width":$(window).width(),
		"height":$(window).height()
	});
	$(".pop-member-in").css({
		//"top":($(".container").height()-$(".pop-member-in").height())/2,
		"top":"200px",
		"left":($(".container").width()-$(".pop-member-in").width())/2
	});
	$(".closepop").css({
		"right":$(".container").width()*0.2-$(".closepop").width()
	});
	//弹窗的位置
	$(".container").css({
			"height":$(window).height(),
			"width":"100%"
		});
	if($(window).width()/$(window).height()>=(1896/887))
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
	//背景图的位置
	$(".next-page").css({
			"bottom":0,
			"left":($(".container").width()-$(".next-page-background").width())/2
		});
	//翻页按钮的位置
	$(".member-entrance-2 .hd").css({
		"left":$(".every-contain").width()*0.375-$(".member-entrance-2 .hd ul").width()*0.5
	});
	//16级左右翻页按钮的位置
	$(window).resize(function(){
		$(".pop-member").css({
			"width":$(window).width(),
			"height":$(window).height()
		});
		$(".pop-member-in").css({
			"top":($(".container").height()-$(".pop-member-in").height())/2,
			"left":($(".container").width()-$(".pop-member-in").width())/2
		});
		$(".closepop").css({
			"right":$(".container").width()*0.2-$(".closepop").width()
		});
		if($(window).width()>1010){
			$(".container").css({
			"height":$(window).height(),
			"width":"100%"
			});
			if($(window).width()/$(window).height()>=(1896/887))
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
				"width":1010,
				"height":$(window).height()
			});
		}
		$(".member-line").css({
			"left":($(window).width()-$(".member-line").width())/2
		});
		$(".next-page").css({
			"bottom":0,
			"left":($(".container").width()-$(".next-page-background").width())/2
		});
		$(".member-entrance-2 .hd").css({
		"left":$(".every-contain").width()*0.375-$(".member-entrance-2 .hd ul").width()*0.5
		});
	})
	//窗口大小改变时以上各处的位置
	$(".container").mouseenter(function(){
		$(".every-member-in div").fadeOut(200);
	})
	$(".member-contain").delegate(".every-member-in","mouseleave",function(){
		if(!$(this).find("div").is(":animated")){
			$(this).find("div").stop(false,true).fadeOut(200);
		}
	});
	$(".member-contain").delegate(".every-member-in","mouseenter",function(){
		if(!$(this).find("div").is(":animated")){
			var showPhoto=$(this).find("div");
			$(".every-member-in").find("div").not(showPhoto).stop(false,true).fadeOut(200);
			$(this).find("div").stop(false,true).fadeIn(200);
		}
	});
	//鼠标移入移出各个成员显示姓名和部门
	var usedyear=0;
	var nowyear;
	var yearWaittime;
	$(".member-contain").delegate(".every-member-in","click",function(){
	    var i =$(".member-entrance:eq("+nowyear+")").find(".every-member-in").index(this);
		$(".pop-member").css({
			"display":"block"
		});
		$(".navigation").css({
			"visibility":"hidden"
		});
		$(".navigation-box").css({
			"visibility":"hidden"
		});
		$(".container").addClass("container-blur");

		$.ajax({
		        type: "GET",
		        url: "Ajax/MemberHandler.ashx",
		        data: { MemberYear: nowyear + 2011 },
		        //发送给后台，请求第几页信息，每页信息多大
		        //dataType:"json",
		        async: true,
		        success: function (dat){
		        	var memberthisYear = JSON.parse(dat);
		        	console.log(nowyear);
		        	console.log(memberthisYear);
		        	console.log(i);
		        	for (var j = 0; j < memberthisYear.length; j++)
					{
		    			if($(this).find("h1").text()==memberthisYear[j].MemberName)
		    			{
		        			i = j;
		    			}
					}
					$(".pop-member-in>img").attr("src",memberthisYear[i].MemberImage);
					$(".member-detailed h1").text(memberthisYear[i].MemberName);
					$(".member-detailed>p").text(memberthisYear[i].MemberInstruction);
					$(".member-star p").text(memberthisYear[i].MemberGrade);
					$(".member-major p").text(memberthisYear[i].MemberInterest);
					$(".member-hobby p").text(memberthisYear[i].MemberMajor);
		        }
		}) 
	})
	//显示弹窗，将后台数据添加在弹窗上
	$(".closepop").click(function(){
		$(".pop-member").css({
			"display":"none"
		});
		$(".navigation").css({
			"visibility":"visible"
		});
		$(".navigation-box").css({
			"visibility":"visible"
		});
		$(".container").removeClass("container-blur");
	})
	//关闭弹窗
	var hasgetMember = new Array([6]);
	for (var k = 0; k < 6; k++)
	{
	    hasgetMember[k] = 0;
	}
	//避免重复请求数据
	$(".member-entrance .hd li").click(function(){
		var nowpage=$(".member-entrance .hd li").index(this);
		$(this).addClass("onhd");
		$(".member-entrance .hd li").not(this).removeClass("onhd");
		$(".member-entrance-page").stop(false,true).animate({
			marginLeft:-nowpage*$(".every-contain").width()
		},300);
	})
	//切换16级各页之间的效果
	
	$(".member-year").click(function(){
		nowyear = $(".member-year").index(this);
			$(".member-introduce-in").stop(false,true).animate({
				marginTop:-nowyear*$(".member-introduce-photo").height()
			},700);
	//上面是上下切换不同年份成员的效果

		var changeyearTime=100;
		if(nowyear!=usedyear)
		{
			$(".member-year:eq("+usedyear+") .member-year-year").animate({
							fontSize:"14px",
			},changeyearTime);
			$(".member-year:eq("+usedyear+") .member-small-point").animate({
							width:10,
            				height:10,
            				top:0,
            				left:0
			},changeyearTime);
		}
		if(nowyear>usedyear)
		{
			var jy=0;
			var i;
			function biggeryear() {  
    			jy++;
    			if(jy<=nowyear){
        			if(nowyear==jy)
        			{
        				setTimeout(function(){
        				$(".member-year-line:eq("+(jy-1)+") div").animate({
							height:"30px"
						},changeyearTime);
						$(".member-year:eq("+(jy-1)+") .member-small-point").css({"backgroundColor":"#e94e1b"}).animate({
            					width:10,
            					height:10,
            					//backgroundColor:"#e94e1b",
            					top:0,
            					left:0
            				},changeyearTime);
						$(".member-year:eq("+jy+") .member-small-point").css({"backgroundColor":"#e94e1b"}).animate({
								width:14,
            					height:14,
            					//backgroundColor:"#e94e1b",
            					top:-2,
            					left:-2

						},changeyearTime);
						$(".member-year:eq("+jy+") .member-year-year").animate({
							fontSize:"18px",
						},changeyearTime);
            			biggeryear();  
        				},changeyearTime);
        			}
        			else
        			{
        				setTimeout(function(){ 
        					$(".member-year-line:eq("+(jy-1)+") div").animate({
								height:"30px"
							},changeyearTime);
            				$(".member-year:eq("+(jy-1)+") .member-small-point").css({"backgroundColor":"#e94e1b"}).animate({
            					width:10,
            					height:10,
            					//backgroundColor:"#e94e1b",
            					top:0,
            					left:0
            				},changeyearTime);
            				biggeryear();  
        				},changeyearTime);
        			}	
    			}
			}  
			biggeryear();
			usedyear=nowyear;
		}
		else if(nowyear<usedyear){
			var iy=usedyear;
    		function smalleryear(){
    			iy--;
    			if(iy>=nowyear){
    				if(nowyear==iy)
        			{
        				setTimeout(function(){
        				$(".member-year-line:eq("+iy+") div").animate({
								height:0
							},changeyearTime);
            				$(".member-year:eq("+(iy+1)+") .member-small-point").css({"backgroundColor":"white"}).animate({
            					width:6,
            					height:6,
            					//backgroundColor:"white",
            					top:2,
            					left:2
            				},changeyearTime);	
						$(".member-year:eq("+iy+") .member-small-point").css({"backgroundColor":"#e94e1b"}).animate({
								width:14,
            					height:14,
            					//backgroundColor:"#e94e1b",
            					top:-2,
            					left:-2

						},changeyearTime);
						$(".member-year:eq("+iy+") .member-year-year").animate({
							fontSize:"18px",
						},changeyearTime);
            			smalleryear();  
        				},changeyearTime);
        			}
        			else
        			{
        				setTimeout(function(){ 
        					$(".member-year-line:eq("+(iy)+") div").animate({
								height:0
							},changeyearTime);
            				$(".member-year:eq("+(iy+1)+") .member-small-point").css({"backgroundColor":"white"}).animate({
            					width:6,
            					height:6,
            					//backgroundColor:"white",
            					top:2,
            					left:2
            				},changeyearTime);
            				smalleryear();  
        				},changeyearTime);
        			}
    			}

    		}
    		smalleryear();
    		usedyear=nowyear;
		}



		if (hasgetMember[nowyear]== 0) {
		    $.ajax({
		        type: "GET",
		        url: "Ajax/MemberHandler.ashx",
		        data: { MemberYear: nowyear + 2011 },
		        //发送给后台，请求第几页信息，每页信息多大
		        //dataType:"json",
		        async: true,
		        success: function (dat) {
		            jsonObj = JSON.parse(dat);
		            //memberthisYear = jsonObj;
		            var length = jsonObj.length;
		            var everyMembersize;
		            	var thispageContain=$(".member-entrance:eq("+nowyear+") .member-contain");
		            var k;
		            
		            //将json字符串解析
		            var memeberpageLength;
		            for(k=0;k<thispageContain.length;k++){
		            	if(jsonObj.length<=8)
		            	{
		            		memeberpageLength=jsonObj.length;
		            		length=jsonObj.length;
		            	}
		            	else
		            	{
		            		memeberpageLength=8;
		            		length=8;
		            	}
		            	var thisContain=thispageContain[k];
		            	//if(jsonObj.length>8)
		            	//{
		            		if (length <= 2) {
		                		$(thisContain).css({
		                    		"width": "25%",
		                    		"height": "100%",
		                    		"marginLeft": "25%"
		                		});
		                		everyMembersize="100%";
		            		}
		            		else if (length <= 4) {
		                		$(thisContain).css({
		                    		"width": "50%",
		                    		"height": "100%",
		                    		"marginLeft": 0
		                		});
		                		everyMembersize = "50%";
		            		}
		            		else if (length <= 6) {
		                		$(thisContain).css({
		                    		"width": "75%",
		                    		"height": "100%",
		                    		"marginLeft": 0
		                		});
		                		everyMembersize = "33.3%";
		            		}
		            		else {
		                		$(thisContain).css({
		                    		"width": "100%",
		                    		"height": "100%",
		                    		"marginLeft": 0
		                		});
		                		everyMembersize = "25%";
		            		}
		            	for (j = k*8; j < memeberpageLength*(k+1)&&j<jsonObj.length; j++) {
		               		var everymember = $("<div>").addClass("every-member").css({ "width": everyMembersize }).appendTo(thispageContain[k]);
		                	var everymemberIn = $("<div>").addClass("every-member-in").appendTo(everymember);
		                	var memberPhoto = $("<img>").attr("src", jsonObj[j].MemberImage).appendTo(everymemberIn);
		                	var memberMessage = $("<div>").appendTo(everymemberIn);
		                	var memberName = $("<h1>").text(jsonObj[j].MemberName).appendTo(memberMessage);
		                	var memberDep = $("<p>").text(jsonObj[j].MemberDepartment).appendTo(memberMessage);
		            	}
		            }
		            hasgetMember[nowyear] = 1;
		        }
		    })
		}
		//获得各年份成员数据并添加
	})
	//到下一页的效果
	var arrowChange=setInterval(arrowShow,2000);
	function arrowShow(){
		$(".next-page-arrow").animate({opacity:0},1000,function(){
			$(this).animate({opacity:1},1000);
		});
	}
	//var escroll=false;
	$('.container').bind('mousewheel', function(event, delta) {
    	if (delta<0) {
    window.location.href = "Introdution.aspx";
    	}
	});
	$(".next-page").click(function(){
		window.location.href="Introdution.aspx";
	})
})