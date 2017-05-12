using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.Linq;

public partial class ApplicationList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            using (var db = new ITShowEntities())
            {
                List<Application> person;
               
                person = (from it in db.Application orderby it.Time select it).ToList();
               
                Session["ds"] = person;

                lbcount.Text = person.Count.ToString();//报名总数量

                DataBindToRepeater(1, (List<Application>)Session["ds"]);
            }
        }
    }


    protected void dropDepartment_SelectedIndexChanged(object sender, EventArgs e)
    {
        string department = dropDepartment.SelectedValue;
        using (var db=new ITShowEntities())
        {
            List<Application> person;

             if (department == "全部")
            {
                person = (from it in db.Application orderby it.Time select it).ToList();

                lbdpt.Visible = false;

                lbdptCount.Visible = false;
            }
                 
            else
            {
                person = (from it in db.Application where it.Department==department orderby it.Time select it).ToList();

                lbdpt.Visible = true;

                lbdptCount.Visible = true;

                lbdptCount.Text = person.Count.ToString();//各部门报名数量
            }

            Session["ds"] = person;

            DataBindToRepeater(1, (List<Application>)Session["ds"]);
        }
    }

    private void DataBindToRepeater(int currentPage, List<Application> datascore)
    {

        PagedDataSource pds = new PagedDataSource();

        pds.AllowPaging = true;

        pds.PageSize = 5;

        pds.DataSource = datascore;

        lbTotal.Text = pds.PageCount.ToString();

        pds.CurrentPageIndex = currentPage - 1;

        rpt.DataSource = pds;

        rpt.DataBind();

    }


    protected void rpt_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (e.CommandName == "delete")
        {
            int id = Convert.ToInt32(e.CommandArgument);
            using (var db = new ITShowEntities())
            {
                Application person = (from it in db.Application where it.ApplicationId == id select it).FirstOrDefault();

                db.Application.Remove(person);

                if (db.SaveChanges() == 1)
                    Response.Write("<script>alert('删除成功');location='ApplicationList.aspx'</script>");
                else
                    Response.Write("<script>alert('删除失败请重试');location='ApplicationList.aspx'</script>");
            }
        }
    }

    protected void btnUp_Click(object sender, EventArgs e)
    {

        if (Convert.ToInt32(lbNow.Text) - 1 < 1)
            lbNow.Text = "1";

        else
            lbNow.Text = Convert.ToString(Convert.ToInt32(lbNow.Text) - 1);

        DataBindToRepeater(Convert.ToInt32(lbNow.Text), (List<Application>)Session["ds"]);
    }

    protected void btnDrow_Click(object sender, EventArgs e)
    {

        if (Convert.ToInt32(lbNow.Text) + 1 <= Convert.ToInt32(lbTotal.Text))
            lbNow.Text = Convert.ToString(Convert.ToInt32(lbNow.Text) + 1);

        DataBindToRepeater(Convert.ToInt32(lbNow.Text), (List<Application>)Session["ds"]);
    }

    protected void btnFirst_Click(object sender, EventArgs e)
    {

        lbNow.Text = "1";

        DataBindToRepeater(Convert.ToInt32(lbNow.Text), (List<Application>)Session["ds"]);
    }

    protected void btnLast_Click(object sender, EventArgs e)
    {

        lbNow.Text = Convert.ToString(Convert.ToInt32(lbTotal.Text));

        DataBindToRepeater(Convert.ToInt32(lbNow.Text), (List<Application>)Session["ds"]);
    }

    protected void btnJump_Click(object sender, EventArgs e)
    {

        int i = 0;

        if (int.TryParse(txtJump.Text, out i))
        {
            if (Convert.ToInt32(txtJump.Text) < 1 || Convert.ToInt32(txtJump.Text) > Convert.ToInt32(lbTotal.Text))
                txtJump.Text = Convert.ToString(Convert.ToInt32(lbNow.Text));

            else
                lbNow.Text = Convert.ToString(Convert.ToInt32(txtJump.Text));
        }

        else
            txtJump.Text = Convert.ToString(Convert.ToInt32(lbNow.Text));

        DataBindToRepeater(Convert.ToInt32(lbNow.Text), (List<Application>)Session["ds"]);
    }




    protected void btnTime_Click(object sender, EventArgs e)
    {
        string department = dropDepartment.SelectedValue;

        string time = txtTime.Value;

        if (time.Length > 0)
        {
            using (var db = new ITShowEntities())
            {
                List<Application> person;

                if (department == "全部")
                {
                    person = (from it in db.Application where it.Time >=Convert.ToDateTime( time) orderby it.Time select it).ToList();

                    //lbdpt.Visible = false;

                    //lbdptCount.Visible = false;
                }

                else
                {
                    person = (from it in db.Application where it.Time >= Convert.ToDateTime(time) && it.Department == department orderby it.Time select it).ToList();

                    //lbdpt.Visible = true;

                    //lbdptCount.Visible = true;

                    //lbdptCount.Text = person.Count.ToString();//各部门报名数量
                }

                Session["ds"] = person;

                DataBindToRepeater(1, (List<Application>)Session["ds"]);

            }
        }
        else
            Response.Write("<script>alert('不能为空')</script>");
    }


    protected void btnDelete_Click(object sender, EventArgs e)
    {
        lbDelete.Visible = true;
        txtTime1.Visible = true;
    }

    protected void lbDelete_Click(object sender, EventArgs e)
    {
        string time = txtTime1.Value;

        if (time.Length > 0)
        {
            using (var db=new ITShowEntities())
            {
                List<Application> person = (from it in db.Application where it.Time <= Convert.ToDateTime(time) select it).ToList();

                int count = person.Count;
                foreach(var item in person)
                {
                    db.Application.Remove(item);
                }
                if(db.SaveChanges()==count)
                    Response.Write("<script>alert('删除成功')</script>");
                else
                    Response.Write("<script>alert('删除失败请重试')</script>");

            }
        }
    }
}