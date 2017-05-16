using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class EventAdd : System.Web.UI.Page
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
                    txtContent.Text = arr[0].ToString();
                    txtTime.Value = arr[1].ToString();

                    Session["infor"] = null;
                }

                if (Session["url"] != null)
                {
                    img.Visible = true;
                    img.ImageUrl = Session["url"].ToString();
                    dimg.Visible = true;
                    Session["url"] = null;
                }
                //else
                //    Response.Write("<script>alert('照片上传失败请重试')</script>");
            }
        }
    }

  
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string content = txtContent.Text.Trim();

        string time = txtTime.Value;

        string url = null;

        if (img.ImageUrl.Length > 0)
            url = img.ImageUrl;

        if (content.Length > 0 && time.Length > 0)
        {
            using (var db = new ITShowEntities())
            {
                Event person = new Event()
                {
                    EventContent = content,

                    EventImage = url,//图片是可有可无的

                    EventTime = time

                };
                db.Event.Add(person);
                if (db.SaveChanges() == 1)
                    Response.Write("<script>alert('添加成功');location='EventList.aspx'</script>");
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
        arr = (ArrayList)Session["infor"];
        txtContent.Text = arr[0].ToString();
        txtTime.Value = arr[1].ToString();
        Session["infor"] = arr;
        Response.Write("<script>location='PhotoCut.aspx?type=3&&type1=0'");

    }

    protected void dimg_Click(object sender, EventArgs e)
    {
        img.ImageUrl = "";
        img.Visible = false;
        dimg.Visible = false;
    }
}