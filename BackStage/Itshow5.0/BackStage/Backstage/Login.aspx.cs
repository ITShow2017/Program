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
                using (var db = new ITShowEntities())
                {
                    string password = Class1.md5(passWord.Text, 32);
                    Admin admin = db.Admin.SingleOrDefault(a => a.AdminName == userName.Text.Trim() && a.AdminPassword == password);

                    if (admin == null)
                    {
                        passWord.Text = "密码";

                        Response.Write("<script>alert('用户名或密码错误！')</script>");
                    }
                    else
                    {
                        if (Session["username"] != null)
                        {
                            if (Session["username"].ToString() == userName.Text.Trim())
                            {
                                Response.Write("<script>alert('正在登陆！');location='Login.aspx'</script>");
                            }
                            else
                            {
                                Session["username"] = userName.Text.Trim();

                                Response.Write("<script>alert('登录成功！');location='index.aspx'</script>");
                            }
                        }
                        else
                        {
                            Session["username"] = userName.Text.Trim();

                            Response.Write("<script>alert('登录成功！');location='index.aspx'</script>");
                        }
                    }
                }

            }
            else
            {
                passWord.Text = "密码";
                ClientScript.RegisterClientScriptBlock(this.GetType(), "", "alert('验证码输入错误!')", true);
            }
        }
    }
}