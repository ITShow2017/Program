<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WorksList.aspx.cs" Inherits="WorksList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
            作品数量:
        <asp:Label ID="lbcount" runat="server" ></asp:Label>
    <table>
            <tr>
				<th>网站名</th>
				<th>上线时间</th>
                <th>网站链接</th>
				<th>编辑</th>
                <th>删除</th>
			</tr>
    <asp:Repeater ID="rpt" runat="server" OnItemCommand="rpt_ItemCommand">
        <ItemTemplate>
           <tr>
               <td><asp:LinkButton ID="name" runat="server" Text='<%# Eval("WorksName") %>' PostBackUrl='<%# "WorksContent.aspx?id="+Eval("WorksId") %>'></asp:LinkButton></td>
               <td><%# Eval("WorksTime") %></td>
               <td><asp:LinkButton ID="LinkButton1" runat="server" Text='<%# Eval("WorksUrl") %>' PostBackUrl='<%# Eval("WorksUrl") %>'></asp:LinkButton></td>
               <td><asp:LinkButton ID="editor" runat="server" Text="编辑" PostBackUrl='<%# "Worksditor.aspx?id="+ Eval("WorksId") %>'></asp:LinkButton></td>
               <td><asp:LinkButton ID="delete" Text="删除" runat="server" CommandName="delete" CommandArgument='<%# Eval("WorksId") %>'></asp:LinkButton></td>
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
