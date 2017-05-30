<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Events.aspx.cs" Inherits="Events" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>爱特大事件</title>
	<link rel="stylesheet" href="css/navigation.css">
	<link rel="stylesheet" href="css/event.css">
	<script type="text/javascript"  src="js/jquery-3.1.1.min.js"></script>
	<script src="js/jquery.rotate.min.js"></script>
<script type="text/javascript"  src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript"  src="js/jquery.easing.min.js"></script>
	<script type="text/javascript"  src="js/navigation.js"></script>
	<script type="text/javascript"  src="js/event.js"></script>
    	<!--[if lte IE 8]>
	<link rel="stylesheet" href="css/ie8.css">
	<style>
	.gray-circle{
    behavior: url(./css/PIE.htc);
	}
	.image-circle
	{
    behavior: url(./css/PIE.htc);
	}
	</style>
	<![endif]-->
	<!--[if lte IE 7]>
	<style>
	.clock-box{
    margin-left: -45px;
	}
	.clock a{
    margin-left: -45px;
	}
	</style>
	<![endif]-->
	<!--[if lte IE 5]>
	<style>
	 .ie5-two-words-length
    {
    width:32px;
    }
    .ie5-three-words-length
    {
    width:50px;
    }
    .ie5-four-words-length
    {
    width:65px;
    }
    .ie5-five-words-length
    {
    width:80px;
    }
	.number span{
	display:none;
	}
	.accomplishment-left{
	margin-left:-5px;
	}
	.accomplishment-left img{
	margin-left:0px;
	}
	.left-title{
	width:200px;
	}
	.left-title span
	{
    top:0px;
	}
	</style>
	<![endif]-->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <span class="mid-line1"></span>
		<span class="mid-line2"></span>
		<span class="activity-mid-line"></span>
		<div class="clock-box">
			<div class="clock" id="0">
				<div class="colck-image-box">
				<img src="images/clock2014.png" alt="">
				</div>
				<a >2014</a>
			</div>
			
			<div class="clock" id="1">
				<div class="colck-image-box">
				<img src="images/clock2015.png" alt="">
				</div>
				<a >2015</a>
			</div>
			<div class="clock" id="2">
				<div class="colck-image-box">
				<img src="images/clock2016.png" alt="">
				</div>
				<a>2016</a>
			</div>
			<div class="clock" id="3">
				<div class="colck-image-box">
				<img src="images/clock2017.png" alt="">
				</div>
				<a >2017</a>
			</div>
		</div>
		<div class="accomplishment">
			<div class="accomplishment-14" id="14">
			</div>
			<div class="accomplishment-15" id="15">
			</div>
			<div class="accomplishment-16 " id="16">
			</div>
            <div class="accomplishment-17" id="17">
            </div>
		</div>
		<div class="left-title">
			<img src="./images/03.png" alt="">
			<span></span>
			<h2>爱特大事记</h2>
		</div>
</asp:Content>

