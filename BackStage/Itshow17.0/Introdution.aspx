<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Introdution.aspx.cs" Inherits="Introdution" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <meta charset="UTF-8">
	<title>部门介绍</title>
	<link rel="stylesheet" href="css/navigation.css">
	<link rel="stylesheet" href="css/introduction.css">
	<script type="text/javascript"  src="js/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.mousewheel.js"></script>
	<script src="js/jquery.rotate.min.js"></script>
	<script type="text/javascript"  src="js/jquery.easing.min.js"></script>
	<script type="text/javascript"  src="js/introduction.js"></script>
	<script type="text/javascript"  src="js/navigation.js"></script>
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
	</style>
	<![endif]-->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <span class="mid-line"></span>
		<div class="gray-circle">
		<div class="orange-cube"></div>
		<div class="orange-cube"></div>
		<div class="orange-cube"></div>
		<div class="orange-cube"></div>
		<div class="orange-cube-pretend orange-cube-pretend-1st"></div>
		<div class="orange-cube-pretend orange-cube-pretend-2nd"></div>
		<div class="orange-cube-pretend orange-cube-pretend-3rd"></div>
		</div>
		<div class="button button-left-top"></div>
		<div class="button button-left-bottom"></div>
		<div class="button button-right-bottom"></div>
		<div class="button button-right-top disShow"></div>
		<div class="image-circle">
			<img class="left-enter" src="images/前端开发.png" alt="1"/>
        	<img class="top-enter" src="images/程序开发.png" alt="2"/>
        	<img class="right-enter" src="images/UI设计.png" alt="3"/>
        	<img class="bottom-enter" src="images/APP.png" alt="4"/>
		</div>
		<div class="HTML">
			<h1 class="number">01
			<span></span>
			</h1>
			<h2 class="department">部门介绍</h2>
			<img class="department-img" src="images/前端开发z.png" alt="">
			<div class="characterize">
			<p >
			<span>职能：</span>爱特前端部门主要负责网站前端代码的实现。前端部门的作用是以html，css，JavaScript为主要语言来对网站表现层与结构层等前台部分做出完美构造，在实现设计师要带给用户的视觉冲击之外还能保证与后台交互实现网站对用户功能，且让网站满足各种用户需求。
			</p>
			<p>
<%--			<span>特点：</span>让网站更具实用性和吸引力，并实现良好的用户体验是他们最大的心愿。</p>--%>

			
			</div>
		</div>
		<div class="VS">
			<h1 class="number">02
			<span></span>
			</h1>
			<h2 class="department">部门介绍</h2>
			<img class="department-img" src="images/程序开发z.png" alt="">
			<div class="characterize">
			<p>
			<span>职能：</span>爱特工作室程序部主要负责在后台实现网站及应用程序的功能。程序部主要基于ASP.NET、PHP、JSP等技术，应用C++、C#、Java等语言开发应用程序，完成与SQL Server、MyS-QL等数据库的交互、设计对外API接口、开发手机APP等。
			</p>
			<p >
			<%--<span>特点：</span>他们用键盘编制自己的梦想，将Coding Changes the World”这句话变成了实实在在的东西。</p>--%>

			</div>
		</div>
		<div class="UI">
			<h1 class="number">03
			<span></span>
			</h1>
			<h2 class="department">部门介绍</h2>
			<img class="department-img ui_" src="images/UI设计z.png" alt="">
			<div class="characterize">
			<p >
			
			
			<span>职能：</span>爱特工作室UI设计部门，顾名思义负责的是各种设计工作。UI设计部门不仅会用Photoshop、Illustrator等软件进行网页、APP等各种界面的设计，更能够在设计静态页面的同时兼顾与用户之间的交互
			</p>
			<p>
			<%--<span>特点：</span>用户的每一次点击，鼠标的每一次滑过所引发的小惊喜都是他们深思熟虑的结晶。好的设计就是成功的一半，这是他们的信仰，也是他们的骄傲。</p>--%>
			</div>
		</div>
		<div class="APP disShow">
			<h1 class="number">04
			<span></span>
			</h1>
			<h2 class="department">部门介绍</h2>
			<img class="department-img" src="images/APP开发z.png" alt="">
			<div class="characterize">
			<p >
			

			<span>职能：</span>爱特APP开发部门是第一个跳出了传统的网页开发的部门，负责安卓端应用程序的开发。他们遵循Material Design的设计模式，利用C++、JAVA等语言进行应用程序后台的开发与构建，并使程序流畅的和数据库及网络进行交互，力求带给用户最好的使用体验。
			</p>
			<p>
			<%--<span>特点：</span>指尖的每一次触摸，触碰到的都是他们真诚的心。</p>--%>
			</div>
            </div>
    
</asp:Content>

