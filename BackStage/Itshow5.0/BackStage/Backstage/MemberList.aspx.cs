using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MemberList : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Session["url"] = null;
        Session["arr"] = null;//清空储存编辑信息session
        if (Session["username"] == null)
        {
            Response.Write("<script>alert('尚未登录！');location='Login.aspx'</script>");
        }
        else
        {
            if (!IsPostBack)
            {
                using (var db = new ITShowEntities())
                {
                    var person = (from it in db.Member select it);

                    lbcount.Text = person.ToList().Count.ToString();//找出所有的成员的人数
                }

                dataBindToRpt("2016");
            }

        }
    }

    protected void dataBindToRpt(string grade)
    {
        using (var db = new ITShowEntities())
        {
            var person = (from it in db.Member where it.MemberGrade == grade select it);

            rpt.DataSource = person.ToList();

            rpt.DataBind();

            lbcount1.Text = person.ToList().Count.ToString();//每届成员人数
        }
    }

    protected void grade_SelectedIndexChanged(object sender, EventArgs e)
    {
        string grade1 = grade.SelectedValue;

        dataBindToRpt(grade1);

    }

    protected void rpt_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (e.CommandName == "delete")
        {
            int id = Convert.ToInt32(e.CommandArgument);
            using(var db =new ITShowEntities())
            {
                Member person = (from it in db.Member where it.MemberId == id select it).FirstOrDefault();

                db.Member.Remove(person);

                if (db.SaveChanges() == 1)
                    Response.Write("<script>alert('删除成功');location='MemberList.aspx'</script>");
                else
                    Response.Write("<script>alert('删除失败请重试');location='MemberList.aspx'</script>");
            }
        }
    }
}