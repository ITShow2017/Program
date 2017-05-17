using System;
using System.Collections;
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
        if (Session["username"] == null)
        {
            Response.Write("<script>alert('尚未登录！');location='Login.aspx'</script>");
        }
        else
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

                            btnImage.ImageUrl = person.MemberImage;//成员照片

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
                                    btnImage.ImageUrl = Session["url"].ToString();
                                    Session["url"] = null;
                                }
                                //else
                                //    Response.Write("<script>alert('照片上传失败请重试')</script>");
                            }
                        }
                        else
                            Response.Write("<script>alert('地址栏有误');location='MemberList.aspx'</script>");
                    }

                }
                else
                    Response.Write("<script>alert('地址栏有误');location='MemberList.aspx'</script>");


            }
        }
    }
    protected void btnEditor_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        string name = txtName.Text.Trim();

        if (name.Length > 0 )
        {
            using (var db = new ITShowEntities())//修改
            {
                Member person = (from it in db.Member where it.MemberId == id select it).FirstOrDefault();

                if (person.MemberImage==btnImage.ImageUrl&& person.MemberName == name && person.MemberGrade == dropGrade.SelectedValue&&person.MemberDepartment==dropDepartment.SelectedValue)
                    Response.Write("<script>alert('未修改');location='MemberList.aspx'</script>");
                else
                {
                    person.MemberName = name;
                    person.MemberGrade = dropGrade.SelectedValue;
                    person.MemberDepartment = dropDepartment.SelectedValue;
                    person.MemberImage = btnImage.ImageUrl;//修改图片
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

    protected void btnImage_Click(object sender, ImageClickEventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        ArrayList arr = new ArrayList();
        arr.Add(txtName.Text.Trim());
        arr.Add(dropDepartment.SelectedValue);
        arr.Add(dropGrade.SelectedValue);
        Session["infor"] = arr;
        Response.Write("<script>location='PhotoCutM.aspx?type=1&&type1=1&&id="+id+"'</script>");
    }
}