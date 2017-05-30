$(function(){
	var i=0;
	appendcomment();
	$(".container-comments").css({
		"height":$(window).height(),
		"width":"100%"
	});
	$(".bottom-tip").css({
		"width":$(".comments-contain").width()
	});
	$(".comments-contain").mCustomScrollbar({
    	theme:"dark-thick",
    	callbacks: {
　　　　whileScrolling: function(){      　// 只要滚动条滚动，这个函数就会执行
　　　　　　if ($("#mCSB_1_container").height()-$(".comments-contain").height()+parseInt($("#mCSB_1_container").css("top"))<40) {    // 这表示当滚动条滚动到这个div的90%(当然这个值是可变的)的时候调用下面的代码，
　　　　　　　　appendcomment();
　　　　　　}
　　　　}
　　}
	});
	//在滚动条距离底部40以内时请求数据
	$(window).resize(function(){
		if($(window).width()>980){
			$(".container-comments").css({
				"height":$(window).height(),
				"width":"100%"
			});
		}
		else{
			$(".container-comments").css({
				"width":980,
				"height":$(window).height()
			});
		}
	})
	//随着屏幕大小变化 控制container变化
	function appendcomment(){
		i++;
		$.ajax({
            type:"GET",
            url:"Ajax/MessageHandler.ashx",
            data:{pageNumber:i,pageSize:4},
            async:true,
            success:function(dat){
            	if(dat=="[]"){
            		$(".bottom-tip").css({
            			"display":"block"
            		});
            	}
            	else{
                	jsonObj=JSON.parse(dat);
                	for (var j = 0; j < jsonObj.length; j++) {
                	    var everyComments = $("<div>").addClass("every-comment").addClass("clearfix").appendTo($(".comments-contain-in"));
                	    var commentsPhoto = $("<div>").addClass("comments-photo").appendTo(everyComments);
                	    var commentsPhotoin = $("<div>").appendTo(commentsPhoto);
                	    var commentsImg = $("<img>").attr("src", jsonObj[j].MessagePhoto).appendTo(commentsPhotoin);
                	    var commentsTime = $("<p>").text(jsonObj[j].MessageTime.replace("T", " ")).appendTo(commentsPhoto);
                	    var commentsComment = $("<div>").addClass("comments-comment").appendTo(everyComments);
                	    var visitorcomments = $("<p>").text(jsonObj[j].MessageContent).addClass("visitor-comment").appendTo(commentsComment);
                	    var adminReply = $("<div>").addClass("admin-reply").addClass("clearfix").appendTo(commentsComment);
                	    if (jsonObj[j].MessageComment != null) {
                	        var replyH = $("<h3>").text("管理员回复").appendTo(adminReply);
                	        var reliyP = $("<p>").text(jsonObj[j].MessageComment).appendTo(adminReply);
                	    }

                	}
            	}
            }
        })
	}
	$(".pop-comment").css({
		"width":$(window).width(),
		"height":$(window).height()
	});
	$(".close-comment-pop").css({
		"right":($(".container-comments").width()-$(".pop-comment-in").width())/2+$(".close-comment-pop").width()
	});

	$(".pop-comment-in").css({
		"top":($(".container-comments").height()-$(".pop-comment-in").height())/2,
		"left":($(".container-comments").width()-$(".pop-comment-in").width())/2
	});
	$(window).resize(function(){
		$(".bottom-tip").css({
			"width":$(".comments-contain").width()
		});
		$(".pop-comment").css({
			"width":$(window).width(),
			"height":$(window).height()
		});
		$(".pop-comment-in").css({
			"top":($(".container-comments").height()-$(".pop-comment-in").height())/2,
			"left":($(".container-comments").width()-$(".pop-comment-in").width())/2
		});
		$(".close-comment-pop").css({
		"right":($(".container-comments").width()-$(".pop-comment-in").width())/2+$(".close-comment-pop").width()
		})
	})
	$(".comment-now").click(function(){
		$(".pop-comment").slideDown(300);
		$(".container-comments").addClass("container-comments-blur");
		$(".navigation").css({"visibility":"hidden"});
		$(".navigation-box").css({"visibility":"hidden"});
		//$(".navigation").css({"display":"none"});
		//$(".navigation-box").css({"display":"none"});
	})
	$(".close-comment-pop").click(function(){
		$(".pop-comment").slideUp(300);
		$(".container-comments").removeClass("container-comments-blur");
		$(".navigation").css({"visibility":"visible"});
		$(".navigation-box").css({"visibility":"visible"});
		//$(".navigation").css({"display":"block"});
		//$(".navigation-box").css({"display":"block"});
	})
	//弹窗效果

	
	var afterLength=0;
	$(".comment-forus-content").keydown(function(){
		var curLength=$(this).val().length;
		console.log(curLength);
		console.log(afterLength);
        if(curLength>140&&curLength>afterLength){  
            var num=$(this).val().substring(0,139);
            //num是最终截出来的不多于140字的字符串
            $(this).val(num);  
            alert("字数太多了！" );  
        }
        afterLength=$(this).val().length;  
	})
	//控制截断不超过140字
	$(".comment-forus-content").focus(function(){
		if(this.value=="(请不要超过140个字)")
			$(this).val("");
	})
	$(".comment-forus-content").blur(function(){
		if($(this).val()=="")
			$(this).val("(请不要超过140个字)");
	})
	$(".enter-code").focus(function(){
		if(this.value=="请输入图片中的字符")
			$(this).val("");
	})
	$(".enter-code").blur(function(){
		if($(this).val()=="")
			$(this).val("请输入图片中的字符");
	})


	$(".photo-photos").click(function(){
	    var thechoosen = $(".photo-photos").index(this);
	    $("#photoIndex").val(thechoosen);
		//被选中的头像是第几个（0开始标记）
		$(".photo-tick").css({
			"left":13+thechoosen*$(".photo-photos").width()
		});
	})
	//选择头像

	var footerShow = false;
	var scollTopSum = 0, scollBottomSum = 0;
	$('.container-comments').bind('mousewheel', function (event, delta) {
	    if (delta < 0 && (!$(".footer").is(":animated"))) {
	        if (!footerShow) {
	            $(".footer").stop(false, true).animate({
	                "bottom": 0
	            }, 200, function () {
	                footerShow = true;
	            });
	        }

	    }
	    else if (delta > 0 && (!$(".footer").is(":animated"))) {
	        if (footerShow) {
	            $(".footer").stop(false, true).animate({
	                "bottom": -$(".footer").height()
	            }, 200, function () {
	                footerShow = false;
	            });
	        }
	        else {
	            scollTopSum++;//记录滚轮次数
	            scollTop();//设置定时器，滚轮在极短时间内滚动三次才跳页，避免误动滚轮的情况
	            return false;
	        }

	    }

	});
	function scollTop() {//鼠标滚轮事件    
	    if (scollTopSum == 3) {
	        window.location.href = "MemberShow.aspx";
	    }
	    var timer = setTimeout(function () {
	        scollTopSum = 0;
	    }, 500)

	}

})