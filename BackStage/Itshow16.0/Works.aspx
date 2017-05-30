<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Works.aspx.cs" Inherits="Works" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>网站作品</title>
        <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/works.css">
    <script type="text/javascript"  src="js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript"  src="js/jquery.mousewheel.js"></script>
    
     <script type="text/javascript" src="js/Carousel.js"></script> 
    <script src="js/jquery.rotate.min.js"></script>
    <script type="text/javascript"  src="js/jquery.easing.min.js"></script>
    <script type="text/javascript"  src="js/navigation.js"></script>
     <script type="text/javascript" src="js/works.js"></script> 
</head>
<body>
    <form id="form1" runat="server">
    <div class="container">
        <span class="mid-line"></span>
<div class="navigation">
            <ul class="slide-left">
                <li class="roll-li ie5-two-words-length">
                    <span>首页
                        <br>    
                        <a href="Index.aspx">首页</a>
                        <span class="under-line"></span>
                    </span>
                </li>
                <li class="roll-li ie5-four-words-length showing">
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
<div class="show-box">
        <div class="top-title">
            <h1>02</h1>
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
</div>
    </form>
</body>
</html>
