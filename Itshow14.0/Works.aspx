<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Works.aspx.cs" Inherits="Works" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/works.css">
    <script type="text/javascript"  src="js/jquery-3.1.1.min.js"></script>
     <script type="text/javascript" src="js/Carousel.js"></script> 
    <script src="js/jquery.rotate.min.js"></script>
    <script type="text/javascript"  src="js/jquery.easing.min.js"></script>
    <script type="text/javascript"  src="js/navigation.js"></script>
     <script type="text/javascript" src="js/works.js"></script> 
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="css/ie8.css">
    <style> 
    .mask{
        display:none;
    }
    .cover{
        display:none;
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
    .top-title span{
        display:none;
    }
    </style>
    <![endif]-->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="show-box">
        <div class="top-title">
            <h1>05</h1>
            <span></span>
            <h2>作品展示</h2>
        </div>
<div class="J_Poster poster-main">
	<div class="poster-btn poster-prev-btn">
        <img class="prev-btn-circle" src="./images/circle.png" alt=""/>
        <img class="next-page-arrow-left" src="./images/arrow-left.png" alt=""/>
 
    </div>
    <ul class="poster-list">
        
    </ul>
    <div class="poster-btn poster-next-btn">
         <img class="next-btn-circle" src="./images/circle.png" alt=""/>
         <img class="next-page-arrow-right" src="./images/arrow-right.png" alt=""/>

    </div>
    <div class="mask"></div>
     <div class="cover"></div>
    
</div>
</div>
<div class="next-page">
            <img class="next-page-background" src="./images/next.png" alt=""/>
            <img class="next-page-arrow-bottom" src="./images/arrow-bottom.png" alt=""/>
</div>
</asp:Content>

