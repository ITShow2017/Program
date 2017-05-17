using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MemberAdd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            if (Session["username"] == null)
            {
                Response.Write("<script>alert('尚未登录！');location='Login.aspx'</script>");
            }
            if (Session["infor"] != null || Session["url"] != null)
            {
                if (Session["infor"] != null)
                {
                    ArrayList arr = new ArrayList();
                    arr = (ArrayList)Session["infor"];
                    txtName.Text = arr[0].ToString();
                    dropDepartment.SelectedValue = arr[1].ToString();
                    dropGrade.SelectedValue = arr[2].ToString();

                    Session["infor"] = null;

                }
                if (Session["url"] != null)
                {
                    img.Visible = true;
                    img.ImageUrl = Session["url"].ToString();
                    Session["url"] = null;
                }
               
            }
        }
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string name = txtName.Text.Trim();

        string department = dropDepartment.SelectedValue;

        string grade = dropGrade.SelectedValue;

        //string image =;

        if (name.Length > 0 && img.ImageUrl.Length > 0)
        {
            using (var db = new ITShowEntities())
            {
                Member person = new Member()
                {
                    MemberDepartment = department,

                    MemberGrade = grade,

                    MemberName = name,

                    MemberImage = img.ImageUrl
                };

                db.Member.Add(person);

                if (db.SaveChanges() == 1)
                    Response.Write("<script>alert('添加成功');location='MemberList.aspx'</script>");
                else
                    Response.Write("<script>alert('添加失败请重试')</script>");
            }
        }

        else
            Response.Write("<script>alert('不能为空')</script>");
        }
    

    protected void btnImage_Click(object sender, EventArgs e)
    {
        ArrayList arr = new ArrayList();
        arr.Add(txtName.Text.Trim());
        arr.Add(dropDepartment.SelectedValue);
        arr.Add(dropGrade.SelectedValue);
        Session["infor"] = arr;
        Response.Write("<script>location='PhotoCut.aspx?type=1&&type1=0'</script>");
    }
}