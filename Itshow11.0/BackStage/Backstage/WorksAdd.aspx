<%@ Page Language="C#" AutoEventWireup="true" CodeFile="WorksAdd.aspx.cs" Inherits="WorksAdd" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
<script type="text/javascript">
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}
</script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    添加作品
         
        <br />
        <br />
        网站名：
        <br />
        <asp:TextBox ID="txtTitle" runat="server" MaxLength="20"></asp:TextBox>
        <br />
        <br />
        网站截图：
        <asp:Button runat="server" ID="btnImage" Text="添加照片" OnClick="btnImage_Click" />
        <br />
        <asp:Image runat="server" ID="img" Visible="false" />
         
        <br />
        <br />
        网站链接：<br />
        <asp:TextBox ID="txtLink" runat="server" onblur="check()"></asp:TextBox>
        <script>
                  function check() {                 
                      var temp = document.getElementById("txtLink").value;
                      var aaa = document.getElementById("txtLink");
                      var match = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;

                      if (!match.test(temp)) {
                          aaa.value = "";
                          alert('提示\n\n请输入有效URL');
                          myreg.focus();

                      }
                 
                  }
              </script>
        <br />
        <br />
        网站上线时间：<br />
        <%--日期控件--%>
<script type="text/javascript" src="lib/My97DatePicker/4.8/WdatePicker.js"></script> 
        <input runat="server" id="txtTime" type="text" class="text" onclick="WdatePicker({ skin: 'whyGreen', dateFmt: 'yyyy-MM-dd' })"  />
        <br />

        <br />
        <asp:Button ID="btnAdd" runat="server" Text="添加" OnClick="btnAdd_Click" />
    </div>
    </form>
</body>
</html>
