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
            if (Request.Cookies["arr"] != null)
            {
                txtContent.Text = Request.Cookies["arr"]["content"];
                txtTime.Value = Request.Cookies["arr"]["time"];

                Request.Cookies["arr"].Expires = System.DateTime.Now.AddDays(-1);
            }
            //if (Session["infor"] != null || Session["url"] != null)
            //{
            //    if (Session["infor"] != null)
            //    {
            //        ArrayList arr = new ArrayList();
            //        arr = (ArrayList)Session["infor"];
            //        txtContent.Text = arr[0].ToString();
            //        txtTime.Value = arr[1].ToString();

            //        Session["infor"] = null;
            //    }

            //    if (Session["url"] != null)
            //    {
            //        img.Visible = true;
            //        img.ImageUrl = Session["url"].ToString();
            //        dimg.Visible = true;
            //        Session["url"] = null;
            //    }
            //else
            //    Response.Write("<script>alert('照片上传失败请重试')</script>");
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
                {
                   // Page.ClientScript.RegisterStartupScript(this.GetType(), "close", "<script language=javascript>window.opener.location.reload(true);self.close();</script>");
                    Response.Write("<script>alert('添加成功')</script>");
                    // Response.Write("<script>window.opener=null;window.close();</script>");
                    //  Page.ClientScript.RegisterStartupScript(this.GetType(), "", " <script lanuage=javascript>alert('没有此考生的成绩信息!');window.opener=null;window.top.open('','_self','');window.top.close(this);</script>");
                }
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
        arr.Add(txtContent.Text);
        arr.Add(txtTime.Value);

        HttpCookie cookie = new HttpCookie("arr");
        cookie.Values["content"] = txtContent.Text.Trim();
        cookie.Values["time"] =txtTime.Value;
        cookie.Expires = System.DateTime.Now.AddMinutes(2);
        Response.Cookies.Add(cookie);

        //ck.Path="/FormTest/ManageSys";//设置Cookie的虚拟路径，注意一定要以“/”开头，否则为无效Cookie；请大家自行看一下它与在客房端的Cookie文档“名称”与“Internet地址”的关系
       // Session["infor"] = arr;
        Response.Write("<script>location='PhotoCut.aspx?type=3&&type1=0'</script>");

    }

    protected void dimg_Click(object sender, EventArgs e)
    {
        img.ImageUrl = "";
        img.Visible = false;
        dimg.Visible = false;
    }
}
