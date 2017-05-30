<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WorksEditor.aspx.cs" Inherits="WorksEditor" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    编辑作品
        <br />
        <br />
        网站名：
        <br />
        <asp:TextBox ID="txtTitle" runat="server" MaxLength="20"></asp:TextBox>
        <br />
        <br />
        网站截图：
        <asp:ImageButton runat="server"  ID="btnImage" OnClick="btnImage_Click" />
        (点击图片编辑)
        <br />
        <br />
        <br />
        网站链接：<br />
        <asp:TextBox ID="txtLink" runat="server"></asp:TextBox>
        <br />
        <br />
         网站上线时间：<br />
<script type="text/javascript" src="lib/My97DatePicker/4.8/WdatePicker.js"></script> 
        <input runat="server" id="txtTime" type="text" class="text" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'yyyy-MM-dd' })"  />
        <br />
        <br />
        <asp:Button ID="btnEditor" runat="server" Text="编辑" OnClick="btnEditor_Click" />
    </div>
    </form>
</body>
</html>
