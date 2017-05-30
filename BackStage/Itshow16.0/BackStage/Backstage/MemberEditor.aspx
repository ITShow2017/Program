<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MemberEditor.aspx.cs" Inherits="MemberEditor" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
     编辑成员
         
        <br />
        <br />
        第几届：
        <asp:DropDownList ID="dropYear" runat="server">
            <asp:ListItem Selected="True">2016</asp:ListItem>
            <asp:ListItem>2015</asp:ListItem>
            <asp:ListItem>2014</asp:ListItem>
            <asp:ListItem>2013</asp:ListItem>
            <asp:ListItem>2012</asp:ListItem>
        </asp:DropDownList>
        <br />
        姓名：
        <asp:TextBox ID="txtName" runat="server" MaxLength="19" ></asp:TextBox>
        <br />
        <br />
        部门：
        <asp:DropDownList ID="dropDepartment" runat="server" >
            <asp:ListItem>程序开发</asp:ListItem>
            <asp:ListItem>前端开发</asp:ListItem>
            <asp:ListItem>UI设计</asp:ListItem>
            <asp:ListItem>系统维护</asp:ListItem>
            <asp:ListItem>安卓App开发</asp:ListItem>
        </asp:DropDownList>
        <br />
        年级：
        <br />
        <asp:DropDownList ID="dropGrade" runat="server">
            <asp:ListItem >2016</asp:ListItem>
            <asp:ListItem>2015</asp:ListItem>
            <asp:ListItem>2014</asp:ListItem>
            <asp:ListItem>2013</asp:ListItem>
            <asp:ListItem>2012</asp:ListItem>
        </asp:DropDownList>
        <br />
        照片(点击照片可进行修改)：
        <br />
        <asp:ImageButton ID="btnImage" runat="server" OnClick="btnImage_Click" />
        <br />
                个人简介:<br />
        <asp:TextBox ID="txtIntruduction" runat="server" ></asp:TextBox><br />
     
        爱好：<br />
        <asp:TextBox ID="txtHobby" runat="server" ></asp:TextBox><br />
        <asp:Button ID="btnEditor" runat="server" Text="编辑" OnClick="btnEditor_Click" />
    </div>
    </form>
</body>
</html>
