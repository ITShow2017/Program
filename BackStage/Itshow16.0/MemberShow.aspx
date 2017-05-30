<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MemberShow.aspx.cs" Inherits="MemberShow" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>成员展示</title>
    <link rel="stylesheet" href="css/membershow2.css">
	<link rel="stylesheet" href="css/navigation.css">
    <script src="js/jquery-1.9.js"></script>
	<script src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.SuperSlide.2.1.1.js"></script>
	<script src="js/jquery.rotate.min.js"></script>
	<script type="text/javascript"  src="js/jquery.easing.min.js"></script>
	<script type="text/javascript"  src="js/navigation.js"></script>
	<script src="js/membershow.js"></script>
    <script src="js/jquery.color.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div class="pop-member">
		
		<div class="pop-member-back"></div>
		<div class="pop-member-in clearfix">
			<img src="" alt="">
			<div class="member-detailed">
				<h1>李四</h1>
				<p>2123293707510750757051</p>
				<div class="member-star clearfix">
					<img src="images/constellation.png" alt="">
					<h2>年级：</h2>
					<p></p>
				</div>
				<div class="member-major clearfix">
					<img src="images/major.png" alt="">
					<h2>专业：</h2>
					<p></p>
				</div>
				<div class="member-hobby clearfix">
					<img src="images/hobby.png" alt="">
					<h2>爱好：</h2>
					<p></p>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="navigation">
			<ul class="slide-left">
				<li class="roll-li ie5-two-words-length">
					<span>首页
						<br />	
						<a href="Index.aspx">首页</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>部门介绍
						<br />	
						<a href="Introdution.aspx">部门介绍</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>作品展示
						<br />	
						<a href="Works.aspx">作品展示</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-five-words-length">
					<span>爱特大事记
						<br />	
						<a href="Events.aspx">爱特大事记</a>
						<span class="under-line"></span>
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>成员展示
						<br />	
						<a href="MemberShow.aspx">成员展示</a>
						<span class="under-line"></span>
					</span>
				</li>
				
				<li class="roll-li ie5-three-words-length">
					<span>留言板
						<br />	
						<a href="Comments.aspx">留言板<span class="under-line"></span></a>
						
					</span>
				</li>
				<li class="roll-li ie5-four-words-length">
					<span>加入我们
						<br />	
						<a href="	">加入我们</a>
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

		<!-- <div class="member-line"></div> -->
		<div class="member-title">
			<h1>04</h1>
			<h2>成员介绍</h2>
		</div>
		<div class="member-introduce clearfix">
			<div class="member-introduce-time">
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2011</p>
					</div>

					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<!-- <img src="images/before_click.png" class="member-year-point" ></img>
						<img src="images/time_after_click.png" class="member-year-point member-year-point-a" ></img> -->
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2012</p>
					</div>

					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2013</p>
					</div>

					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2014</p>
					</div>

					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2015</p>
					</div>

					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">2016</p>
					</div>
					<div class="member-year-line">
						<div class="member-year-line-o"></div>
					</div>
					<div class="member-year">
						<div class="member-year-point">
							<div class="member-small-point"></div>
						</div>
						<p  class="member-year-year">加入我们</p>
					</div>
			</div>
			<div class="member-introduce-photo">
				<div class="member-introduce-in">
					<div class="member-entrance">
						<div class="member-contain clearfix"></div>
						<div class="every-member">
							<div class="every-member-in">
								<img src="" alt="">
								<div>
									<h1>张三</h1>
									<p>UI设计</p>
								</div>
							</div>
						</div>
					</div>
					<div class="member-entrance">
						<div class="member-contain clearfix"></div>
					</div>
					<div class="member-entrance">
						<div class="member-contain clearfix"></div>
					</div>
					<div class="member-entrance">
						<div class="member-contain clearfix"></div>
					</div>
					<div class="member-entrance">
						<div class="member-contain clearfix"></div>
					</div>
					<div class="member-entrance
					member-entrance-2 clearfix">
						<div class="hd">
							<ul><li></li><li></li><li></li></ul>
						</div>
						<!-- <div class="member-entrance-page">
							<ul>
								<li  >
								<div class="member-contain clearfix"></div>
								</li>
								<li>
								<div class="member-contain clearfix"></div>
								</li>
								<li>
								<div class="member-contain clearfix">
								</div>
								</li>
							</ul>
						</div>  -->
						<div class="member-entrance-page">
							<div class="every-contain">
								<div class="member-contain clearfix"></div>
							</div>
							<div class="every-contain">
								<div class="member-contain clearfix"></div>
							</div>
							<div class="every-contain">
								<div class="member-contain clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="next-page clearfix">
			<img class="next-page-background" src="images/next.png" alt="">
			<img class="next-page-arrow" src="images/page2.png" alt="">
		</div>
	</div>
    </div>
    </form>
</body>
</html>
