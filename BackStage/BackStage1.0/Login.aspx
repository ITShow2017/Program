﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="BackStage_Backstage_Login" %>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5shiv.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link href="static/h-ui/css/H-ui.min.css" rel="stylesheet" type="text/css" />
<link href="static/h-ui.admin/css/H-ui.login.css" rel="stylesheet" type="text/css" />
<link href="static/h-ui.admin/css/style.css" rel="stylesheet" type="text/css" />
<link href="lib/Hui-iconfont/1.0.8/iconfont.css" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>爱特工作室后台登录</title>
<meta name="keywords" content="H-ui.admin 3.0,H-ui网站后台模版,后台模版下载,后台管理系统模版,HTML后台模版下载">
<meta name="description" content="H-ui.admin 3.0，是一款由国人开发的轻量级扁平化网站后台模板，完全免费开源的网站后台管理系统模版，适合中小型CMS后台系统。">
        <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js">
</script>
   
    
</head>
<body>
<input type="hidden" id="TenantId" name="TenantId" value="" />
<div class="header"></div>
<div class="loginWraper">
  <div id="loginform" class="loginBox">
    <form class="form form-horizontal" action="index.html" method="post" runat="server" >
      <div class="row cl">
        <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60d;</i></label>
        <div class="formControls col-xs-8">
          <%--<input id="" name="" type="text" placeholder="账户" class="input-text size-L">--%>
              <asp:TextBox ID="userName" runat="server" CssClass="input-text size-L" Text="账号" onfocus="if(this.value=='账号'){this.value='';}" onblur="if(this.value==''){this.value='账号'}" ></asp:TextBox>
        </div>
      </div>
      <div class="row cl">
        <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60e;</i></label>
        <div class="formControls col-xs-8">
          <%--<input id="" name="" type="password" placeholder="密码" class="input-text size-L">--%>
              <asp:TextBox ID="passWord" runat="server" CssClass="input-text size-L" Text="密码"></asp:TextBox>
        </div>
      </div>
      <div class="row cl">
        <div class="formControls col-xs-8 col-xs-offset-3">
             <asp:TextBox ID="TextBox1" runat="server" CssClass="input-text size-L" Text="验证码" onfocus="if(this.value=='验证码'){this.value='';}" onblur="if(this.value==''){this.value='验证码'}" Width="150" ></asp:TextBox>
          <%--<input class="input-text size-L" type="text" placeholder="验证码" onblur="if(this.value==''){this.value='验证码'}" onclick="if(this.value=='验证码:'){this.value='';}" value="验证码:" style="width:150px;">--%>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <img src="png.aspx" id="img" onclick="f_refreshtype()" width="120" height="40" /> <%--<a id="kanbuq" href="javascript:;">看不清，换一张</a>--%> </div>
      </div>
      <div class="row cl">
        <div class="formControls col-xs-8 col-xs-offset-3">
          <label for="online">
            <input type="checkbox" name="online" id="online" value="">
            使我保持登录状态</label>
        </div>
      </div>
      <div class="row cl">
        <div class="formControls col-xs-8 col-xs-offset-3">
          <%--<input name="" type="submit" class="btn btn-success radius size-L" value="&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;">--%>
             <asp:Button ID="BtnLogin" runat="server" CssClass="btn btn-success radius size-L" OnClick="BtnLogin_Click" Text="登录" />
          <input name="" type="reset" class="btn btn-default radius size-L" value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;">
        </div>
      </div>
    </form>
  </div>
</div>
<div class="footer">Copyright 爱特工作室  by <a href="http://www.mycodes.net/" target="_blank">源码之家</a></div>
<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
        $("#passWord").focus(function(){
            $("#passWord").attr("type","password");
            if(this.value=="密码")
                $(this).val("");
        })
        $("#passWord").blur(function(){
            if($(this).val()=="")
                $(this).val("密码").attr("type","text");})
</script>
<script type="text/javascript">
        //点击切换验证码
        function f_refreshtype() {
            var Image1 = document.getElementById("img");
            if (Image1 != null) {
                Image1.src = Image1.src + "?";
            }
        } 
</script>        
<script type="text/javascript" src="static/h-ui/js/H-ui.min.js"></script>

</body>
</html>
