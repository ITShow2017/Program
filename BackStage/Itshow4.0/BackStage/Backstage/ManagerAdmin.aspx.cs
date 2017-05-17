using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class BackStage_Backstage_ManagerAdmin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        using (var db=new ITShowEntities())
        {
            Admin admin = db.Admin.SingleOrDefault(a => a.AdminId == id);

            txtemail.Text = admin.AdminEmail;
        }
    }

    protected void email_Click(object sender, EventArgs e)
    {
        email1.Visible = true;
        password1.Visible = false;
        photo1.Visible = false;
    }

    protected void btnpassword_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);

        if (RequiredFieldValidator2.IsValid == true && CompareValidator1.IsValid == true)
        {
            if (txtPwd.Text.Length >= 8)
            {
                string pwd = Class1.md5(txtPwd.Text, 32);

                using (var db=new ITShowEntities())
                {
                    Admin admin = db.Admin.SingleOrDefault(a => a.AdminId == id);

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

    protected void btnphoto_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        //在此填写你的添加照片逻辑
    }

    protected void btnemail_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);

        string email = txtemail.Text;

        using (var db = new ITShowEntities())
        {
            Admin admin = db.Admin.SingleOrDefault(a => a.AdminId == id);

            admin.AdminEmail = email;

            db.SaveChanges();
        }
    }


    protected void password_Click(object sender, EventArgs e)
    {
        email1.Visible = false;
        password1.Visible = true;
        photo1.Visible = false;
    }

    protected void changePhoto_Click(object sender, EventArgs e)
    {
        email1.Visible = false;
        password1.Visible = false;
        photo1.Visible = true;
    }
}