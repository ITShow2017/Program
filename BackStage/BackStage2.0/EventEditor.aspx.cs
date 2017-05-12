using System;
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
                    }
                    else
                        Response.Write("<script>alert('地址栏有误');location='EventList.aspx'</script>");
                }

            }
            else
                Response.Write("<script>alert('地址栏有误');location='EventList.aspx'</script>");

        }
    }

    protected void btnEditor_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        string content = txtContent.Text.Trim();
        string time = txtTime.Value;

        if (content.Length > 0 && txtTime.Value.Length > 0  /*&& txtImage.Text.Trim().Length > 0*/)
        {

            using (var db = new ITShowEntities())//修改短趣
            {
                Event person = (from it in db.Event where it.EventId == id select it).FirstOrDefault();

                if (person.EventTime == time && person.EventContent == content)
                    Response.Write("<script>alert('未修改');location='EventList.aspx'</script>");
                else
                {
                    person.EventContent = content;
                    person.EventTime = time;
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
}