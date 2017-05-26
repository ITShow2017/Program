<%@ Page Language="C#" AutoEventWireup="true" CodeFile="test.aspx.cs" Inherits="test" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:TextBox ID="txt" runat="server" TextMode="MultiLine" Height="82px" Width="270px" ></asp:TextBox>
        <asp:Button ID="btn" runat="server" Text="提交" OnClick="btn_Click" />
    </div>
    </form>
</body>
</html>
