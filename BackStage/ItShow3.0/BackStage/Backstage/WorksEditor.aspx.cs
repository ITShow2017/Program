using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class WorksEditor : System.Web.UI.Page
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
                        Works person = (from it in db.Works where it.WorksId == id select it).FirstOrDefault();

                        if (person != null)
                        {
                            txtTitle.Text = person.WorksName;

                            txtLink.Text = person.WorksUrl;

                            txtTime.Value = person.WorksTime.ToString();

                            if (Session["infor"] != null || Session["url"] != null)
                            {
                                if (Session["infor"] != null)
                                {
                                    ArrayList arr = new ArrayList();
                                    arr = (ArrayList)Session["infor"];
                                    txtTitle.Text = arr[0].ToString();
                                    txtLink.Text = arr[1].ToString();
                                    txtTime.Value = arr[2].ToString();

                                    Session["infor"] = null;
                                }

                                if (Session["url"] != null)
                                {
                                    btnImage.Visible = true;
                                    btnImage.ImageUrl = Session["url"].ToString();
                                    Session["url"] = null;
                                }
                                //else
                                //    Response.Write("<script>alert('照片上传失败请重试')</script>");
                            }

                        }
                        else
                            Response.Write("<script>alert('地址栏有误');location='WorksList.aspx'</script>");
                    }

                }
                else
                    Response.Write("<script>alert('地址栏有误');location='WorksList.aspx'</script>");

            }
        }
    }

    protected void btnEditor_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);

        string title = txtTitle.Text.Trim();

        string link = txtLink.Text.Trim();

        string time =txtTime.Value;

        string Pattern = @"(http|https)://[^\s]*";
        Regex r = new Regex(Pattern);

        if (title.Length > 0&& r.IsMatch(link) && link.Length>0&&time.Length>0)
        {
            using (var db = new ITShowEntities())//修改
            {
                Works person = (from it in db.Works where it.WorksId == id select it).FirstOrDefault();

                if (person.WorksName == title && person.WorksImage==btnImage.ImageUrl&& person.WorksTime == Convert.ToDateTime(time) && person.WorksUrl == link)
                    Response.Write("<script>alert('未修改');location='WorksList.aspx'</script>");
                else
                {
                    person.WorksName = title;
                    person.WorksUrl = link;
                    person.WorksTime =Convert.ToDateTime( time);
                    person.WorksImage = btnImage.ImageUrl;
                    if (db.SaveChanges() == 1)
                        Response.Write("<script>alert('编辑成功');location='WorksList.aspx'</script>");
                    else
                        Response.Write("<script>alert('编辑失败请重试')</script>");
                }
            }
        }
        else
            Response.Write("<script>alert('不能为空')</script>");
    }

    protected void btnImage_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32( Request.QueryString["id"]);
        ArrayList arr = new ArrayList();
        arr.Add(txtTitle.Text.Trim());
        arr.Add(txtLink.Text.Trim());
        arr.Add(txtTime.Value);
        Session["infor"] = arr;
        Response.Write("<script>location='PhotoCutW.aspx?type=2&&type1=1&&id="+id+"'</script>");
    }
}