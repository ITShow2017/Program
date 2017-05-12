using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class BackStage_Backstage_Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void BtnLogin_Click(object sender, EventArgs e)
    {
        if (Session["CheckCode"] != null)
        {
            string checkcode = Session["CheckCode"].ToString();

            if (this.TextBox1.Text == checkcode)
            {

                Response.Write("<script>alert('登录成功！');location='Personal_center.aspx'</script>");

            }
            else
            {
                ClientScript.RegisterClientScriptBlock(this.GetType(), "", "alert('验证码输入错误!')", true);
            }
        }
    }
}