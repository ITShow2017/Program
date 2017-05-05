<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EventList.aspx.cs" Inherits="EventList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        大事件数量:
        <asp:Label ID="lbcount" runat="server" ></asp:Label>
    <table>
            <tr>
				<th>大事件内容</th>
				<th>发生时间</th>
				<th>编辑</th>
                <th>删除</th>
			</tr>
    <asp:Repeater ID="rpt" runat="server" OnItemCommand="rpt_ItemCommand">
        <ItemTemplate>
           <tr>
               <td><%# Eval("EventContent") %></td>
               <td><%# Eval("EventTime") %></td>
               <td><asp:LinkButton ID="editor" runat="server" Text="编辑" PostBackUrl='<%# "EventEditor.aspx?id="+ Eval("EventId") %>'></asp:LinkButton></td>
               <td><asp:LinkButton ID="delete" Text="删除" runat="server" CommandName="delete" CommandArgument='<%# Eval("EventId") %>'></asp:LinkButton></td>
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
