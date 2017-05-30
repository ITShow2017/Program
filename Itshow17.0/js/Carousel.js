;(function($){
	var Carousel = function(poster){
			var self = this;
			//保存单个旋转木马对象
			this.poster                  = poster;
			this.posterItemMain = poster.find("ul.poster-list");
			this.nextBtn               = poster.find("div.poster-next-btn");
			this.prevBtn               = poster.find("div.poster-prev-btn");
			this.posterItems        =poster.find("li.poster-item");
			this.posterFirstItem  = this.posterItems.first();
			this.posterLastItem  = this.posterItems.last();
			this.rotateFlag   = true;
			//默认配置参数
			this.setting = {
									"width":821,			//幻灯片的宽度
									"height":390,				//幻灯片的高度
									"posterWidth":493,	//幻灯片第一帧的宽度
									"posterHeight":390,	//幻灯片第一帧的高度				//记录显示比例关系
									"speed":1000,
									"autoPlay":true,
									"delay":5000
									};
			
			//设置配置参数值
			this.setSettingValue();
 			
        
			this.setPosterPos();
			//左旋转按钮
			this.nextBtn .click(function(){
				if(self.rotateFlag){
					self.rotateFlag = false;
					self.carouseRotate("left");
				};
			});
			//右旋转按钮
			this.prevBtn .click(function(){
				if(self.rotateFlag){
					self.rotateFlag = false;
					self.carouseRotate("right");
				};
			});
		//是否开启自动播放
		if(this.setting.autoPlay){
			this.autoPlay();
			this.poster.hover(function(){
										window.clearInterval(self.timer);
										},function(){
										self.autoPlay();
										});
			
		};

	};
	Carousel.prototype = {
		autoPlay:function(){
			var self = this;
			this.timer = window.setInterval(function(){
				self.nextBtn.click();
			},this.setting.delay);

		},

		//旋转
		carouseRotate:function(dir){
			var _this_  = this;
			var zIndexArr = [];
			//左旋转
			if(dir === "left"){
				this.posterItems .each(function(){
					var self = $(this),
						   prev = self.prev().get(0)?self.prev():_this_.posterLastItem,
						   width = prev.width(),
						   height =prev.height(),
						   zIndex = prev.css("zIndex"),
						   opacity = prev.css("opacity"),
						   left = prev.css("left"),
						   top = prev.css("top");
							zIndexArr.push(zIndex);	
							
						   self.animate({
							   					width:width,
												height:height,
												opacity:opacity,
												left:left,
												top:top
												},_this_.setting.speed,function(){
													_this_.rotateFlag = true;
													
												});
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
				this.posterItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			}else if(dir === "right"){//右旋转
				this.posterItems .each(function(){
					var self = $(this),
						   next = self.next().get(0)?self.next():_this_.posterFirstItem,
						   width = next.width(),
						   height =next.height(),
						   zIndex = next.css("zIndex"),
						   opacity = next.css("opacity"),
						   left = next.css("left"),
						   top = next.css("top");
						   zIndexArr.push(zIndex);
						   self.animate({
							   					width:width,
												height:height,
												//zIndex:zIndex,
												opacity:opacity,
												left:left,
												top:top
												},_this_.setting.speed,function(){
													_this_.rotateFlag = true;
													
													
												});
						   
	
				});
				//zIndex需要单独保存再设置，防止循环时候设置再取的时候值永远是最后一个的zindex
				this.posterItems.each(function(i){
					$(this).css("zIndex",zIndexArr[i]);
				});
			};
		},
		//设置剩余的帧的位置关系
		setPosterPos:function(){
				var 	sliceItems  = this.posterItems.slice(1),
						sliceSize     = sliceItems.size()/2,
						rightSlice   = sliceItems.slice(0,sliceSize),
						level            = Math.floor(this.posterItems.size()/2),
						leftSlice      =sliceItems.slice(sliceSize);
			
	
				//设置左边位置关系
				rightSlice.each(function(i){
					level--;
					$(this).css({
										zIndex:level,
										width:40+"%",
										height:80+"%",
										opacity:1,
										left:0,
										top:10+"%"
										});
				});
				//设置左边的位置关系

				leftSlice.each(function(i){
					$(this).css({
										zIndex:i,
										width:40+"%",
										height:80+"%",
										opacity:1,
										left:60+"%",
										top:10+"%"
										});

				});
		},
		//设置配置参数值去控制基本的宽度高度。。。
		setSettingValue:function(){
			this.poster.css({
										width:this.setting.width,
										height:this.setting.height
									});
			this.posterItemMain.css({
										width:100+"%",
										height:100+"%"
									});

			//设置切换按钮的宽高，层级关系
			this.nextBtn.css({
										width:20+"%",
										height:this.setting.height,
										zIndex:Math.ceil(this.posterItems.size()/2)
										});
			this.prevBtn.css({
										width:20+"%",
										height:this.setting.height,
										zIndex:Math.ceil(this.posterItems.size()/2)
										});
			
			this.posterFirstItem.css({
										width:this.setting.posterWidth,
										height:this.setting.posterHeight,
										left:20+"%",
										top:0,
										zIndex:Math.floor(this.posterItems.size()/2)
										});
			this.posterFirstItem.children("a").find(".hide").css({"display":"block"})

		}
	
	};
	Carousel.init = function(posters){
		var _this_ = this;
		posters.each(function(){
			new  _this_($(this));
		});
	};
	window["Carousel"] = Carousel;
})(jQuery);