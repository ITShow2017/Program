        $(function(){
		var H,W;
		var grayCircleW=$(".gray-circle").css("width").split("px")[0];
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
				$(".gray-circle").css({"top":(H-grayCircleW)/2})//设置外围灰色圆圈的位置
				$(".image-circle").css({"top":(H-440)/2})//设置中间显示图片圆圈的位置
				$(".button-left-top").css({"top":(H-grayCircleW)/2})//设置按钮位置
				$(".button-right-top").css({"top":(H-grayCircleW)/2})
				$(".button-left-bottom").css({"top":(H)/2})
				$(".button-right-bottom").css({"top":(H)/2})
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
					$(".gray-circle").css({"top":(H-grayCircleW)/2})
					$(".image-circle").css({"top":(H-440)/2})
					$(".button-left-top").css({"top":(H-grayCircleW)/2})
					$(".button-right-top").css({"top":(H-grayCircleW)/2})
					$(".button-left-bottom").css({"top":(H)/2})
					$(".button-right-bottom").css({"top":(H)/2})
					$(".mid-line").css({"height":H})//设置中轴高度	
				});
			}
		else {
			H=1000;
			W=1366;
			$(".container").css({"width":W});
			$(".container").css({"height":H});//设置主容器高
			$(".gray-circle").css({"top":(H-grayCircleW)/2})//设置外围灰色圆圈的位置
			$(".image-circle").css({"top":(H-440)/2})//设置中间显示图片圆圈的位置
			$(".button-left-top").css({"top":(H-grayCircleW)/2})//设置按钮位置
			$(".button-right-top").css({"top":(H-grayCircleW)/2})
			$(".button-left-bottom").css({"top":(H)/2})
			$(".button-right-bottom").css({"top":(H)/2})
		}
		
		var rightEnter=$(".right-enter"),leftEnter=$(".left-enter"),topEnter=$(".top-enter"),bottomEnter=$(".bottom-enter"),orangeCube=$(".orange-cube");
		var index=1;
		var num=4;
		$(function(){
			//中轴延展到圆形上方，并通过回调函数进行默认部门的展示，并通过默认部门展示的回调函数，让中轴延展到底部，通过周周延伸到底部的回调函数使按钮可以被点击并实现轮播
			$(".mid-line").animate({"height":(H-grayCircleW)/2},1000,function(){
				$(".HTML").addClass("onShow");
				show();
				leftEnter.animate({"top":100},600)
				$(".orange-cube").animate({"top":0},600,function(){
					$(".mid-line").animate({"height":100+"%"},300,function(){
							$(".button-right-bottom").on("click",function(){//右下方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;//如果点击的是当前展示的位置，就返回
							}
							if(index==1)//第一张到第二张
							{
								index=2;
								onceturn(leftEnter,topEnter,orangeCube);
							}
							else if(index==2)
							{
								return;
							}
							else if (index==3)//第三张到第四张到第一张到第二张
							 {
								index=2;
								thirdturn(rightEnter,bottomEnter,leftEnter,topEnter,orangeCube);
							}
							else if(index==4)//第四张到第一张到第二张
							{
								index=2;
								twiceturn(bottomEnter,leftEnter,topEnter,orangeCube);	
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".VS").addClass("onShow");
							show();	

						})
						$(".button-left-bottom").on("click",function(){//左下方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1)//第一张到第二张到第三张
							{
								index=3;
								 twiceturn(leftEnter,topEnter,rightEnter,orangeCube);				
							}
							else if(index==2)//第二张到第三张
							{
								index=3;
								onceturn(topEnter,rightEnter,orangeCube);		
							}
							else if (index==3) {
								return;										
							}
							else if(index==4)//第四张到第一张到第二张到第三张
							{
								index=3;
								thirdturn(bottomEnter,leftEnter,topEnter,rightEnter,orangeCube);
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".UI").addClass("onShow");
							show();	
						
						})
						$(".button-left-top").on("click",function(){//左上方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1)//第一张到第二张到第三张到第四张
							{
								index=4;
								thirdturn(leftEnter,topEnter,rightEnter,bottomEnter,orangeCube);		
							}
							else if(index==2)//第二张到第三张到第四张
							{
								index=4;
								twiceturn(topEnter,rightEnter,bottomEnter,orangeCube);					
							}
							else if (index==3) //第三张到第四张
							{
								index=4;
								onceturn(rightEnter,bottomEnter,orangeCube)
							}
							else if(index==4)
							{
								return;

							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".APP").addClass("onShow");
							show();	

						})
						$(".button-right-top").on("click",function(){//右上方按钮的点击事件
							if(leftEnter.is(':animated')||rightEnter.is(':animated')||topEnter.is(':animated')||bottomEnter.is(':animated'))
							{
								return;
							}
							if(index==1){
								return ;	
							}
							else if(index==2)//第二张到第三张到第四张到第一张
							{
								index=1;
								thirdturn(topEnter,rightEnter,bottomEnter,leftEnter,orangeCube);	
							}
							else if (index==3) //第三张到第四张到第一张
							{
							
								index=1;
								 twiceturn(rightEnter,bottomEnter,leftEnter,orangeCube);
								
							}
							else if(index==4)//第四张到第一张
							{
								index=1;
								onceturn(bottomEnter,leftEnter,orangeCube);
							}
							$(".onShow").removeClass("onShow").addClass("disShow");	
							$(".HTML").addClass("onShow");
							show();	

						})						
					})
					// $(".image-circle").hover(stop, play);
					// play();
				})
			})						
		})	
  		function show(){//用来设置简要离开的左右两侧的部门介绍动作，和新出现的部门介绍动作
				$(".disShow").children(".characterize").animate({"left":100+"%"},1)
				$(".disShow").children(".department").animate({"left":-100+"%"},1)
				$(".disShow").children(".number").animate({"left":-100+"%"},1)
				$(".disShow").children(".department-img").animate({"left":-100+"%"},1,function(){
				$(".disShow").removeClass("disShow");
				$(".onShow").children(".number").animate({"left":28+"%"},600);
				$(".onShow").children(".department").animate({"left":28+"%"},600);
				$(".onShow").children(".department-img").animate({"left":28+"%"},600);
				$(".onShow").children(".characterize").animate({"left":50+"%"},600);
				})
  		}  		
  		// function play() {//轮播效果，通过判断当前展示的部门并设置时间间隔去触发click事件
    //             timer = window.setInterval(function() {
    //             	if(index==1)
    //             	{
    //             		$(".button-right-bottom").trigger('click');
    //             		alert("666")
    //             	}
    //             	else if(index==2){
				// 		$(".button-left-bottom").trigger('click');
				// 		alert("777")
    //             	}
    //             	else if(index==3){
				// 		$(".button-left-top").trigger('click');
				// 		alert("888")
    //             	}
    //             	else if(index==4){
				// 		$(".button-right-top").trigger('click');
				// 		alert("999")
    //             	}

    //             },2600);
    //         }
    //     function stop() {//解除事件绑定
    //            clearInterval(timer);
    //        }
		function onceturn(from,to,orangeCube){
			//正在展示的部门和用户点击的部门之间的间隔为一，默认顺时针旋转。
			//实现思路是通过四个橙色的正方形分别去遮挡两个四分之一扇形之间的间隔，通过判断用户点击，去改变橙色方块的位置并显示不同部门对应的图片,并通过回调函数去还原已经浏览过的图片位置
  			if(from==rightEnter)//第三张到第四张
  			{
  				from.animate({"top":-240,"z-Index":4},600,function(){//移出图片的动作并通过回调函数还原位置
				from.css({"left":480,"top":100})
					})
				to.animate({"top":100,"z-Index":7},600)//新加入图片的动作
				$(".orange-cube-pretend-3rd").animate({"left":0},600)

  			}
  			else if(from==bottomEnter)//第四张到第一张
  			{
  				from.animate({"left":480,"z-Index":4},600,function(){
				from.css({"left":120,"top":480})
				})
				to.animate({"left":100,"z-Index":7},600)
				$(".orange-cube-pretend-1st").css({"left":480})
				$(".orange-cube-pretend-2nd").css({"top":480})
				$(".orange-cube-pretend-3rd").animate({"left":240},600,function(){
					$(".orange-cube-pretend-3rd").css({"left":-240})
				})
				
  			}
  			else if(from==topEnter)//第二张到第三张
  			{
  				from.animate({"left":-280,"z-Index":4},600,function(){
					from.css({"left":100,"top":-240})
				})
				to.animate({"left":100,"z-Index":7},600)
				$(".orange-cube-pretend-2nd").animate({"top":240},600)
				
  			}
  			else if(from=leftEnter)//第一张到第二张
  			{
				from.animate({"top":480,"z-Index":4},600,function(){
						from.css({"top":100,"left":-280})
					})
					to.animate({"top":135,"z-Index":7},600)
					$(".orange-cube-pretend-1st").animate({"left":240},600)
					
  			}			
  		}
  		function twiceturn(from,to,end,orangeCube){
  			//正在展示的部门和用户点击的部门之间的间隔为二，默认顺时针旋转。
  			//实现思路以两次移动的方法实现，第一次时间极短，并通过第一次移动的回调函数去调用下一次的正常速度的移动（调用一次移动函数）
  			if(from==rightEnter)//第三张到第四张到第一张
  			{
  				from.animate({"top":-240,"z-Index":4},1,function(){
					from.css({"left":480,"top":100})
					})
				to.animate({"top":100,"z-Index":7},1)
				$(".orange-cube-pretend-3rd").animate({"left":0},1,function(){
					onceturn(to,end,orangeCube)
				})
  			}
  			else if(from==bottomEnter)//第四张到第一张到第二张
  			{
  				from.animate({"left":480,"z-Index":4},1,function(){
						from.css({"left":120,"top":480})
						})
					to.animate({"left":100,"z-Index":7},1)
				$(".orange-cube-pretend-1st").css({"left":480})
				$(".orange-cube-pretend-2nd").css({"top":480})
				$(".orange-cube-pretend-3rd").animate({"left":240},1,function(){
					$(".orange-cube-pretend-3rd").css({"left":-240})
					onceturn(to,end,orangeCube)
				})
  					
  			}
  			else if(from==topEnter)//第二张到第三张到第四张
  			{
  				from.animate({"left":-280,"z-Index":4},1,function(){
						from.css({"left":100,"top":-240})
						})
						to.animate({"left":100,"z-Index":7},1)
						$(".orange-cube-pretend-2nd").animate({"top":240},1,function(){
							onceturn(to,end,orangeCube)
						})
  			}
  			else if(from=leftEnter)//第一张到第二张到第三张
  			{
				from.animate({"top":480,"z-Index":4},1,function(){
						from.css({"top":100,"left":-280})
					})
					to.animate({"top":135,"z-Index":7},1)
					$(".orange-cube-pretend-1st").animate({"left":240},1,function(){
						onceturn(to,end,orangeCube);
				})
  			}
  		}
  		function thirdturn(from,second,third,end,orangeCube){
  			//正在展示的部门和用户点击的部门之间的间隔为三，默认顺时针旋转。
  			//实现思路以三次移动的方法实现，第一，二次时间极短，并通过第一次移动的回调函数去调用下一次的距离为二的移动（调用二次移动函数）
			if(from==rightEnter)//第三张到第四张到第一张到第二张
  			{
  				rightEnter.animate({"top":-240,"z-Index":4},1,function(){
					rightEnter.css({"left":480,"top":100})
				})
				bottomEnter.animate({"top":100,"z-Index":7},1)
				$(".orange-cube-pretend-3rd").animate({"left":0},1,function(){
					twiceturn(bottomEnter,leftEnter,topEnter,orangeCube);
				})
					
  			}
  			else if(from==bottomEnter)//第四张到第一张到第二张到第三张
  			{
  				bottomEnter.animate({"left":480,"z-Index":4},1,function(){
				bottomEnter.css({"left":120,"top":480})
				})
				leftEnter.animate({"left":100,"z-Index":7},1)
				$(".orange-cube-pretend-1st").css({"left":480})
				$(".orange-cube-pretend-2nd").css({"top":480})
				$(".orange-cube-pretend-3rd").animate({"left":240},1,function(){
					$(".orange-cube-pretend-3rd").css({"left":-240})
					twiceturn(leftEnter,topEnter,rightEnter,orangeCube);
				})
  			}
  			else if(from==topEnter)//第二张到第三张到第四张到第一张
  			{
  				topEnter.animate({"left":-280,"z-Index":4},1,function(){
					topEnter.css({"left":100,"top":-240})
					})
					rightEnter.animate({"left":100,"z-Index":7},1)
					$(".orange-cube-pretend-2nd").animate({"top":240},1,function(){
						 twiceturn(rightEnter,bottomEnter,leftEnter,orangeCube);
					})
  			}
  			else if(from=leftEnter)//第一张到第二张到第三张到第四张
  			{
				leftEnter.animate({"top":480,"z-Index":4},1,function(){
				leftEnter.css({"top":100,"left":-280})
				})
				topEnter.animate({"top":135,"z-Index":7},1)
				$(".orange-cube-pretend-1st").animate({"left":240},1,function(){
					twiceturn(topEnter,rightEnter,bottomEnter,orangeCube);
				})
  			}
  		}
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
  		        window.location.href = "Index.aspx";
  		    }
  		    var timer = setTimeout(function () {
  		        scollTopSum = 0;
  		    }, 500)

  		}
  		function scollBottom() {//鼠标滚轮事件    
  		    if (scollBottomSum == 3) {
  		        window.location.href = "Works.aspx";
  		    }
  		    var timer = setTimeout(function () {
  		        scollBottomSum = 0;
  		    }, 500)

  		}

    
  	})