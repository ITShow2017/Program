using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class WorksAdd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["username"] == null)
        {
            Response.Write("<script>alert('尚未登录！');location='Login.aspx'</script>");
        }
        else if (!IsPostBack)
        {
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
                    img.Visible = true;
                    img.ImageUrl = Session["url"].ToString();
                    Session["url"] = null;
                }
                //else
                //    Response.Write("<script>alert('照片上传失败请重试')</script>");
            }
        }
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string title = txtTitle.Text.Trim();

        string link = txtLink.Text.Trim();

        string Pattern = @"(http|https)://[^\s]*";

        string time =txtTime.Value;

        Regex r = new Regex(Pattern);

        if (link.Length > 0&&time.Length>0 && r.IsMatch(link) && title.Length > 0&&img.ImageUrl.Length>0)//都不能为空
        {
            using (var db = new ITShowEntities())
            {
                Works person = new Works()
                {
                    WorksName = title,

                    WorksUrl = link,

                    WorksTime=Convert.ToDateTime( time),

                    WorksImage=img.ImageUrl
                };

                db.Works.Add(person);

                if (db.SaveChanges() == 1)
                    Response.Write("<script>alert('添加成功');location='WorksList.aspx'</script>");
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
        arr.Add(txtTitle.Text.Trim());
        arr.Add(txtLink.Text.Trim());
        arr.Add(txtTime.Value);
        Response.Write("<script>location='PhotoCut.aspx?type=2&&type1=0'</script>");
    }
}