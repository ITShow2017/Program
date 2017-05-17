using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class BackStage_Backstage_Personal : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string username = Request.QueryString["username"];

        using (var db=new ITShowEntities())
        {
            Admin admin = db.Admin.SingleOrDefault(a => a.AdminName == username);

            txtemail.Text = admin.AdminEmail;
            //以下写读取照片路径
        }
    }

    protected void btnsure_Click(object sender, EventArgs e)
    {
        string username = Request.QueryString["username"];

        using (var db = new ITShowEntities())
        {
            Admin admin = db.Admin.SingleOrDefault(a => a.AdminName == username);

            admin.AdminEmail = txtemail.Text;
            //以下写存照片的路径

        }
    }

    protected void btnchangepassword_Click(object sender, EventArgs e)
    {
        passvword1.Visible = true;
        div1.Visible = false;
    }

    protected void btnpassword_Click(object sender, EventArgs e)
    {
        string username = Request.QueryString["username"];
        if (RequiredFieldValidator2.IsValid == true && CompareValidator1.IsValid == true)
        {
            if (txtPwd.Text.Length >= 8)
            {
                string pwd = Class1.md5(txtPwd.Text, 32);

                using (var db = new ITShowEntities())
                {
                    Admin admin = db.Admin.SingleOrDefault(a => a.AdminName == username);

                    admin.AdminPassword = pwd;

                    db.SaveChanges();
                }
            }
            else
            {
                Response.Write("<script>alert('密码长度不够！')</script>");
            }
        }
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        div1.Visible = true;
        passvword1.Visible = false;
    }
}