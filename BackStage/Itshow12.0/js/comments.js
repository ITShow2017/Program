$(function(){
	var i=0;
	appendcomment();
	$(".container-comments").css({
		"height":$(window).height(),
		"width":"100%"
	});
	$(".comment-now").css({ "left": ($(".container-comments").width() - $(".comment-now").width()) / 2 });
	$(".bottom-tip").css({
	    "width": $(".comments-contain").width()
	});
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
		$(".bottom-tip").css({
		    "width": $(".comments-contain").width()
		});
	})
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
                	    var commentsTime = $("<p>").text(jsonObj[j].MessageTime.replace("T"," ")).appendTo(commentsPhoto);
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
	$(".comments-contain").scroll(function(){
		var ScrolltoBottom=$(".comments-contain-in").height()-$(".comments-contain").height()-$(".comments-contain").scrollTop();
		//获取滚动条距离底部的距离
		if(ScrolltoBottom<40){
			appendcomment();
		}
	})

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
		$(".pop-comment").css({
			"width":$(window).width(),
			"height":$(window).height()
		});
		console.log(($(".container-comments").height()-$(".pop-comment-in").height())/2);
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
		//$(".navigation").css({"display":"none"});
		//$(".navigation-box").css({"display":"none"});
	})
	$(".close-comment-pop").click(function(){
		$(".pop-comment").slideUp(300);
		$(".container-comments").removeClass("container-comments-blur");
		//$(".navigation").css({"display":"block"});
		//$(".navigation-box").css({"display":"block"});
	})

	$(".comment-forus-content").focus(function(){
		if(this.value=="(请不要超过140个字)")
			$(this).val("");
	})
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
	$(".comment-forus-content").blur(function(){
		if($(this).val()=="")
			$(this).val("(请不要超过140个字)");
	})
	$(".photo-photos").click(function(){
	    var thechoosen = $(".photo-photos").index(this);
	    //$("#photoIndex")[0].setAttribute("value",thechoosen+"");
	    $("#photoIndex").val(thechoosen);
		//被选中的头像是第几个（0开始标记）
		$(".photo-tick").css({
			"left":13+thechoosen*$(".photo-photos").width()
		});
	})
	$(".enter-code").focus(function(){
		if(this.value=="请输入图片中的字符")
			$(this).val("");
	})
	$(".enter-code").blur(function(){
		if($(this).val()=="")
			$(this).val("请输入图片中的字符");
	})

})