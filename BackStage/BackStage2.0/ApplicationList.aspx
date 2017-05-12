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
        <script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
        <input runat="server" id="txtTime" type="text" class="text" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'yyyy-MM-dd' })"  />&nbsp;&nbsp;&nbsp;&nbsp;
        <%--日期控件--%>
        <asp:Button ID="btnTime" runat="server" Text="查询" OnClick="btnTime_Click" />
        <br />

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
        <br />
        <asp:Button runat="server" ID="btnDelete" Text="批量删除" OnClick="btnDelete_Click" />
        
        <%--日期控件--%>
        <script type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
        &nbsp;&nbsp;&nbsp;
        <input runat="server" visible="false" id="txtTime1" type="text" class="text" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'yyyy-MM-dd' })"  />
        <asp:Button runat="server" Visible="false" ID="lbDelete" Text="删除该日期之前的记录" OnClick="lbDelete_Click"></asp:Button>
        <br />
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
