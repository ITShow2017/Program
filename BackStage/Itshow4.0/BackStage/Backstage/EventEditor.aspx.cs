using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class EventEditor : System.Web.UI.Page
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
                        Event person = (from it in db.Event where it.EventId == id select it).FirstOrDefault();

                        if (person != null)
                        {
                            txtContent.Text = person.EventContent;

                            txtTime.Value = person.EventTime;

                            img.ImageUrl = person.EventImage;

                            if (img.ImageUrl.Length > 0)
                            {
                                img.Visible = true;

                                dimg.Visible = true;
                            }
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
                            else
                                Response.Write("<script>alert('地址栏有误');location='EventList.aspx'</script>");
                        }

                    }
                }
                else
                    Response.Write("<script>alert('地址栏有误');location='EventList.aspx'</script>");

            }
        }
    }

    protected void btnEditor_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        string content = txtContent.Text.Trim();
        string time = txtTime.Value;

        string url = null;
        if(img.ImageUrl.Length>0)
            url= img.ImageUrl;//图片地址

        if (content.Length > 0 && txtTime.Value.Length > 0 )
        {

            using (var db = new ITShowEntities())//修改短趣
            {
                Event person = (from it in db.Event where it.EventId == id select it).FirstOrDefault();

                if (person.EventTime == time && person.EventContent == content&&person.EventImage==img.ImageUrl)//如果没修改
                    Response.Write("<script>alert('未修改');location='EventList.aspx'</script>");
                else
                {
                    person.EventContent = content;
                    person.EventTime = time;
                    person.EventImage = url;
                    if (db.SaveChanges() == 1)
                        Response.Write("<script>alert('编辑成功');location='EventList.aspx'</script>");
                    else
                        Response.Write("<script>alert('编辑失败请重试')</script>");
                }
            }
        }
        else
            Response.Write("<script>alert('不能为空')</script>");
    }

    protected void dimg_Click(object sender, EventArgs e)
    {
        dimg.Visible = false;//隐藏删除照片的按钮
        img.Visible = false;//隐藏照片
        img.ImageUrl = "";//把图片地址置为0
    }


    protected void btnImage_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        ArrayList arr = new ArrayList();
        arr = (ArrayList)Session["infor"];
        txtContent.Text = arr[0].ToString();
        txtTime.Value = arr[1].ToString();
        Session["infor"] = arr;
        Response.Write("<script>location='PhotoCut.aspx?type=3&&type1=1&&id=" + id + "'");
    }
}