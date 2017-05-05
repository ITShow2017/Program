<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ApplicationList.aspx.cs" Inherits="ApplicationList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        时间起点：
        <%--日期控件--%>
        <asp:UpdatePanel ID="UpdatePanel1"  runat="server">
        <ContentTemplate>
        <asp:TextBox ID="requestedDeliveryDateTextBox" Enabled="false" runat="server" Width="286px" />
        <asp:ImageButton id="imageButton"  Width="36px" runat="server" ImageUrl="~/File/timg.jpg" AlternateText="calendar" OnClick="ImageButton_Click" CausesValidation="false" Height="25px" />
            &nbsp;&nbsp;
            <asp:Button ID="btnTime" runat="server" Text="查询" OnClick="btnTime_Click" />
            <br />
        <div id="calendar" class="calendar" visible="false" runat="server">
        <asp:Calendar ID="requestedDeliveryDateCalendar"  runat="server" OnSelectionChanged="RequestedDeliveryDateCalendar_SelectionChanged" />
            <br />
        </div>
        </ContentTemplate>
        </asp:UpdatePanel>

        部门：
        <asp:DropDownList ID="dropDepartment" runat="server" AutoPostBack="true" OnSelectedIndexChanged="dropDepartment_SelectedIndexChanged">
            <asp:ListItem Selected="True">全部</asp:ListItem>
            <asp:ListItem>程序开发</asp:ListItem>
            <asp:ListItem>前端开发</asp:ListItem>
            <asp:ListItem>UI设计</asp:ListItem>
            <asp:ListItem>安卓App开发</asp:ListItem>
        </asp:DropDownList>
                &nbsp;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />

        <asp:Label ID="lbdpt" runat="server" Visible="false" Text="各部门报名数量:"></asp:Label>
        <asp:Label ID="lbdptCount" runat="server" ></asp:Label>
    &nbsp;&nbsp;&nbsp;
                报名总数量:
        <asp:Label ID="lbcount" runat="server" ></asp:Label>
        &nbsp;<br />
        <br />
    <table>
            <tr>
				<th>姓名</th>
				<th>性别</th>
                <th>专业年级</th>
                <th>意向部门</th>
				<th>电话</th>
                <th>QQ</th>
                <th>个人简述</th>
                <th>报名时间</th>
                <th>删除</th>
			</tr>
    <asp:Repeater ID="rpt" runat="server" OnItemCommand="rpt_ItemCommand">
        <ItemTemplate>
           <tr>
               <td><%# Eval("Name") %></td>
               <td><%# Eval("Sex") %></td>
               <td><%# Eval("MajorGrade") %></td>
               <td><%# Eval("Department") %></td>
               <td><%# Eval("Telephone") %></td>
               <td><%# Eval("QQ") %></td>
               <td><%# Eval("Introdution") %></td>
               <td><%# Eval("Time") %></td>
               <td><asp:LinkButton ID="delete" Text="删除" runat="server" CommandName="delete" CommandArgument='<%# Eval("ApplicationId") %>'></asp:LinkButton></td>
           </tr>

        </ItemTemplate>
    </asp:Repeater>
</table>

        <asp:Button ID="btnUp" runat="server" Text="上一页" OnClick="btnUp_Click" />
        <asp:Button ID="btnDrow" runat="server" Text="下一页"  OnClick="btnDrow_Click"/>
        <asp:Button ID="btnFirst" runat="server" Text="首页" OnClick="btnFirst_Click" />
        <asp:Button ID="btnLast" runat="server" Text="尾页"  OnClick="btnLast_Click"/>
        页次：<asp:Label ID="lbNow" runat="server" Text="1"></asp:Label>
        /<asp:Label ID="lbTotal" runat="server" Text="1"></asp:Label>

        转<asp:TextBox ID="txtJump" Text="1" runat="server" Width="25px"></asp:TextBox>
        <asp:Button ID="btnJump" runat="server" Text="Go"  OnClick="btnJump_Click"/>
    </div>
    </form>
</body>
</html>
