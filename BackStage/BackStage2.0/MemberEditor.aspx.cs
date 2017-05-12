using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MemberEditor : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            Regex r = new Regex("^[1-9]d*|0$");

            if (Request.QueryString["id"] != null && r.IsMatch(Request.QueryString["id"]))
            {
                int id = Convert.ToInt32(Request.QueryString["id"]);

                using (var db = new ITShowEntities())
                {
                    Member person = (from it in db.Member where it.MemberId == id select it).FirstOrDefault();

                    if (person != null)
                    {
                        txtName.Text = person.MemberName;

                        dropDepartment.SelectedValue = person.MemberDepartment;

                        dropGrade.SelectedValue = person.MemberGrade;
                    }
                    else
                        Response.Write("<script>alert('地址栏有误');location='MemberList.aspx'</script>");
                }

            }
            else
                Response.Write("<script>alert('地址栏有误');location='MemberList.aspx'</script>");

        }
    }

    protected void btnEditor_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        string name = txtName.Text.Trim();

        if (name.Length > 0 )
        {
            using (var db = new ITShowEntities())//修改短趣
            {
                Member person = (from it in db.Member where it.MemberId == id select it).FirstOrDefault();

                if (person.MemberName == name && person.MemberGrade == dropGrade.SelectedValue&&person.MemberDepartment==dropDepartment.SelectedValue)
                    Response.Write("<script>alert('未修改');location='MemberList.aspx'</script>");
                else
                {
                    person.MemberName = name;
                    person.MemberGrade = dropGrade.SelectedValue;
                    person.MemberDepartment = dropDepartment.SelectedValue;
                    if (db.SaveChanges() == 1)
                        Response.Write("<script>alert('编辑成功');location='MemberList.aspx'</script>");
                    else
                        Response.Write("<script>alert('编辑失败请重试')</script>");
                }
            }
        }
        else
            Response.Write("<script>alert('不能为空')</script>");
    }
}