using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MemberAdd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string name = txtName.Text.Trim();

        string department = dropDepartment.SelectedValue;

        string grade = dropGrade.SelectedValue;

        //string image =;

        if (name.Length > 0 )
        {
            using (var db=new ITShowEntities())
            {
                Member person = new Member()
                {
                    MemberDepartment = department,

                    MemberGrade = grade,

                    MemberName = name

                };

                db.Member.Add(person);

                if(db.SaveChanges()==1)
                    Response.Write("<script>alert('添加成功');location='MemberList.aspx'</script>");
                else
                    Response.Write("<script>alert('添加失败请重试')</script>");
            }
        }
        else
            Response.Write("<script>alert('不能为空')</script>");
    }
}