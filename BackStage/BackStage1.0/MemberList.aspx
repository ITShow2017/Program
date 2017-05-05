<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MemberList.aspx.cs" Inherits="MemberList" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        年级：
        <asp:DropDownList ID="grade" runat="server" AutoPostBack="true" OnSelectedIndexChanged="grade_SelectedIndexChanged" >
            <asp:listitem Selected="True">2016</asp:listitem>
            <asp:listitem>2015</asp:listitem>
            <asp:listitem>2014</asp:listitem>
            <asp:listitem>2013</asp:listitem>
            <asp:listitem>2012</asp:listitem>
        </asp:DropDownList>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        成员人数：
        <asp:Label runat="server" ID="lbcount" ></asp:Label>
        <table>
            <tr>
				<th>姓名</th>
				<th>所属部门</th>
				<th>年级</th>
				<th>编辑</th>
                <th>删除</th>
			</tr>
    <asp:Repeater ID="rpt" runat="server" OnItemCommand="rpt_ItemCommand">
        <ItemTemplate>
           <tr>
               <td><asp:LinkButton ID="name" runat="server" Text='<%# Eval("MemberName") %>' PostBackUrl='<%# "MemberContent.aspx?id="+Eval("MemberId") %>'></asp:LinkButton></td>
               <td><%# Eval("MemberDepartment") %></td>
               <td><%# Eval("MemberGrade") %></td>
               <td><asp:LinkButton ID="editor" runat="server" Text="编辑" PostBackUrl='<%# "MemberEditor.aspx?id="+ Eval("MemberId") %>'></asp:LinkButton></td>
               <td><asp:LinkButton ID="delete" Text="删除" runat="server" CommandName="delete" CommandArgument='<%# Eval("MemberId") %>'></asp:LinkButton></td>
           </tr>

        </ItemTemplate>
    </asp:Repeater>
</table>
    
    </div>
    </form>
</body>
</html>
