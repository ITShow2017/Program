<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Index.aspx.cs" Inherits="Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
	<meta charset="UTF-8" />
	<title>爱特工作室</title>
	<link rel="stylesheet" href="css/index.css" />
	<link rel="stylesheet" href="css/navigation1.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    		<div style="height: 50px;width: 100%;" class="clearfix">	</div>

    <div class="logo-and-slogan">
			<img class="IT-logo" src="images/logo.png" alt="">
			<p class="IT-slogan">用自己的指挥、思想、热情创造未来</p>
		</div>
		<div class="all-about-IT clearfix">
			<div class="about-IT">
				<div class="about-IT-in">
					<img src="images/Culture.png" alt="">
					<div>
						<img src="images/Ground.png" alt="">
						<p></p>
					</div>
				</div>
				<h1>团队文化</h1>
			</div>
			<div class="about-IT">
				<div class="about-IT-in">
					<img src="images/Idea.png" alt="">
					<div>
						<img src="images/Ground.png" alt="">
						<p></p>
					</div>
					<h1>新奇的想法</h1>
				</div>
			</div>
			<div class="about-IT">
				<div class="about-IT-in">
					<img src="images/Team.png" alt="">
					<div>
						<img src="images/Ground.png" alt="">
						<p></p>
					</div>
					<h1>优秀的团队</h1>
				</div>
			</div>
			<div class="about-IT">
				<div class="about-IT-in">
					<img src="images/About Us.png" alt=""/>
					<div>
						<img src="images/Ground.png" alt=""/>
						<p></p>
					</div>
					<h1>关于我们</h1>
				</div>
			</div>
		</div>
		<div class="next-page">
			<img class="next-page-background" src="images/next.png" alt=""/>
			<img class="next-page-arrow" src="images/arrow.png" alt=""/>
		</div>
    <script src="js/jquery-1.9.js"></script>
	<script src="js/jquery.rotate.min.js"></script>
	<script type="text/javascript"  src="js/jquery.easing.min.js"></script>
	<script type="text/javascript"  src="js/navigation.js"></script>
	<script src="js/jquery.mousewheel.js"></script>
	<script src="js/index.js"></script>
</asp:Content>

