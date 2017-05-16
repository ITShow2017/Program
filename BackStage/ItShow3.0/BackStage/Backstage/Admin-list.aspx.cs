using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class BackStage_Backstage_Admin_list : System.Web.UI.Page
{
    //统计管理员数目
    static protected int AdminCount;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["username"] == null)
        {
            Response.Write("<script>alert('尚未登录！');location='Login.aspx'</script>");
        }
        else
        {
            using (var db = new ITShowEntities())
            {
                string username = Session["username"].ToString();

                Admin admin = db.Admin.SingleOrDefault(a => a.AdminName == username);
                //超级管理员才能使用此功能
                if (admin.AdminId != 3)
                {
                    Response.Write("<script>alert('你没有权限使用此功能！');location='Admin-role.aspx'</script>");
                }
            }
            if (!IsPostBack)
            {
                RptDataBind(1);
            }
        }
    }
    //分页操作
    protected void RptDataBind(int currentPage)
    {

        using (var db = new ITShowEntities())
        {
            var datascore = from it in db.Admin orderby it.AdminId select it;

            PagedDataSource pds = new PagedDataSource();

            pds.AllowPaging = true;

            pds.PageSize = 5;

            pds.DataSource = datascore.ToList();

            AdminCount = datascore.Count();

            lbTotal.Text = pds.PageCount.ToString();

            pds.CurrentPageIndex = currentPage - 1;//当前页数从零开始，故把接受的数减一

            rptAdmin.DataSource = pds;

            rptAdmin.DataBind();

        }

    }

    protected void rptAdmin_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        int id = Convert.ToInt32(e.CommandArgument);
        //删除对应管理员，超级管理员不能删除自己
        if(id!=3)
        {
            Response.Write("<script>alert('你没有权限删除此管理员!');location='Admin-list.aspx'</script>");
        }
        else
        {
            if (e.CommandName == "Delete")
            {
                using (var db = new ITShowEntities())
                {
                    Admin admin = db.Admin.SingleOrDefault(a => a.AdminId == id);

                    db.Admin.Remove(admin);

                    db.SaveChanges();
                }
            }
        }
    }
    protected void btnDown_Click(object sender, EventArgs e)
    {
        if (Convert.ToInt32(lbNow.Text) + 1 <= Convert.ToInt32(lbTotal.Text))
        {
            lbNow.Text = Convert.ToString(Convert.ToInt32(lbNow.Text) + 1);

            RptDataBind(Convert.ToInt32(lbNow.Text));
        }
    }
    protected void btnFirst_Click(object sender, EventArgs e)
    {
        lbNow.Text = Convert.ToString(1);
        RptDataBind(1);
    }
    protected void btnLast_Click(object sender, EventArgs e)
    {
        lbNow.Text = lbTotal.Text;

        RptDataBind(Convert.ToInt32(lbTotal.Text));
    }
    protected void btnJump_Click(object sender, EventArgs e)
    {
        if (RequiredFieldValidator1.IsValid == true)
        {
            if (Convert.ToInt32(txtJump.Text) <= Convert.ToInt32(lbTotal.Text) && Convert.ToInt32(txtJump.Text) >= 1)
            {
                lbNow.Text = txtJump.Text;

                RptDataBind(Convert.ToInt32(txtJump.Text));
            }
        }
    }
    protected void btnUp_Click(object sender, EventArgs e)
    {
        if (Convert.ToInt32(lbNow.Text) - 1 >= 1)
        {
            lbNow.Text = Convert.ToString(Convert.ToInt32(lbNow.Text) - 1);

            RptDataBind(Convert.ToInt32(lbNow.Text));
        }
    }

    protected void lkSelect_Click(object sender, EventArgs e)
    {
        if (txtAdmin.Text != "")
        {
            using(var db=new ITShowEntities())
            {
                var datasource = from it in db.Admin where (it.AdminName.Contains(txtAdmin.Text))select it;

                AdminCount = datasource.Count();

                rptAdmin.DataSource = datasource.ToList();

                rptAdmin.DataBind();
            }
        }
        else
        {
            RptDataBind(1);
        }
    }
}