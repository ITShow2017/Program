<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Comments.aspx.cs" Inherits="Comments" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>留言板</title>
	<link rel="stylesheet" href="css/navigation.css">
	<link rel="stylesheet" href="css/comments.css">
<link rel="stylesheet" href="css/jquery.mCustomScrollbar.css" />
</head>
<body>
    <form id="form1" runat="server" >
	<div class="pop-comment">
		<img class="close-comment-pop" src="images/closepop.png" alt="">
		<div class="pop-comment-back"></div>
		<div class="pop-comment-in clearfix">
			<div class="comment-forus">
				<h1 class="comment-forus-title">留言</h1>
				<textarea runat="server" id="textarea1" class="comment-forus-content">(请不要超过140个字)</textarea>           
			</div>
			<div class="operate-to-comment">
				<div class="choose-photo">
					<h1 class="choose-photo-title">选择头像</h1>
					<div class="choose-photo-photos clearfix">
						<img class="photo-tick" src="images/photo-tick.png" alt="">
                        <asp:TextBox ID="photoIndex" runat="server"  style="display:none"></asp:TextBox>
						<img class="photo-photos" src="images/p1.png" alt="">
						<img class="photo-photos" src="images/p2.png" alt="">
						<img class="photo-photos" src="images/p3.png" alt="">
						<img class="photo-photos" src="images/p4.png" alt="">
						<img class="photo-photos" src="images/p5.png" alt="">
						<img class="photo-photos" src="images/p6.png" alt="">
						<img class="photo-photos" src="images/p7.png" alt="">
						<img class="photo-photos" src="images/p8.png" alt="">
						<img class="photo-photos" src="images/p9.png" alt="">
					</div>
				</div>
				<div class="comment-identify">
					<h1 class="code-title">验证码</h1>
					<div class="about-code clearfix">
                        <asp:TextBox ID="txtCode" runat="server" CssClass="enter-code" Text="请输入图片中的字符"></asp:TextBox>
						<%--<input ype="text" class="enter-code" value="请输入图片中的字符">--%>
						<img src="png2.aspx" class="show-code" id="img" onclick="f_refreshtype()" width="127" height="47"/>
						<p class="change-code" onclick="f_refreshtype()">看不清？换一张</p>
					</div>
				</div>
				<div class="comment-button clearfix">
                    <asp:Button ID="btnSubmit" runat="server" CssClass="submit-comment" OnClick="btnSubmit_Click" Text="提交" />
                 
				<%--	<button class="submit-comment">提交</button>--%>
					<button class="cancel-comment">取消</button>
				</div>
			</div>
		</div>
	</div>
         </form>
	<div class="container-comments">
		<div class="navigation">
			<ul class="slide-left">
				<li class="roll-li ie5-two-words-length">
					<span>首页
						<br>	
						<a href="Index.aspx">首页</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>部门介绍
						<br>	
						<a href="Introdution.aspx">部门介绍</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>作品展示
						<br>	
						<a href="Works.aspx">作品展示</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-five-words-length">
					<span>爱特大事记
						<br>	
						<a href="Events.aspx">爱特大事记</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>成员展示
						<br>	
						<a href="MemberShow.aspx">成员展示</a>
						<span class="under-line"></span>
					</span>
				</li>
				
				<li class="roll-li ie5-three-words-length">
					<span>留言板
						<br>	
						<a href="Comments.aspx">留言板<span class="under-line"></span></a>
						
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>加入我们
						<br>	
						<a href="   ">加入我们</a>
						<span class="under-line"></span>
					</span>
				</li>
			</ul>

		</div>
		<div class="navigation-box">
				<span class="line first-line"></span>
				<span class="line second-line"></span>
				<span class="line third-line"></span>
				<span class="line forth-line"></span>
			</div>
		<div style="height: 50px;width: 100%;" class="clearfix">	</div>
		<!-- 导航栏 -->
		<h1>05</h1>
		<h2>留言板</h2>
		<div class="comments-contain">
			<div class="comments-contain-in">
			<%--<div class="every-comment clearfix">
				<div class="comments-photo">
					<div>
						<img src="images/p7.png" alt="">
					</div>
					<p>2012-12-23 00:00</p>
				</div>
				<div class="comments-comment">
					<p class="visitor-comment">爱特工作室是在中国海洋大学信息科学与程学院院领导主持下成立于2002年的、是以计算机技术人才培养，网站开发为特色的技术性团体。自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，经过多年的发展，现在已成为海大最强的技术团队。</p>
					<div class="admin-reply clearfix">
						<h3>管理员回复</h3>
						<p>爱特工作室是在中国海洋大学信息科学与程学院院领导主持下成立于2002年的、是以计算机技术人才培养，网站开发为特色的技术性团体。自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，经过多年的发展，现在已成为海大最强的技术团队。
						</p>
					</div>
				</div>
			</div>--%>
			</div>
			<div class="bottom-tip">没有更多留言了</div>
		</div>
		<button class="comment-now">我要留言</button>
        <div class="footer">
				<p class="footer-adress">地址：中国海洋大学崂山校区信息学院北楼B505</p>
				<p class="footer-copyright">Copyright @2002-2016 ITStudio All rights reserved</p>
		</div>
	</div>
      <script type="text/javascript">
        //点击切换验证码
        function f_refreshtype() {
            var Image1 = document.getElementById("img");
            if (Image1 != null) {
                Image1.src = Image1.src + "?";
            }
        } 
    </script>
	<script src="js/jquery-1.9.js"></script>
	<script src="js/jquery.rotate.min.js"></script>
	<script type="text/javascript"  src="js/jquery.easing.min.js"></script>
	<script type="text/javascript"  src="js/navigation.js"></script>
	<script src="js/comments.js"></script>
           <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>

</body>
</html>
