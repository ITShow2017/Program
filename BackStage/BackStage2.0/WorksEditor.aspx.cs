using System;
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

        string title = txtTitle.Text.Trim();

        string link = txtLink.Text.Trim();

        string time =txtTime.Value;

        string Pattern = @"(http|https)://[^\s]*";
        Regex r = new Regex(Pattern);

        if (title.Length > 0&& r.IsMatch(link) && link.Length>0&&time.Length>0)
        {
            using (var db = new ITShowEntities())//修改短趣
            {
                Works person = (from it in db.Works where it.WorksId == id select it).FirstOrDefault();

                if (person.WorksName == title && person.WorksTime == Convert.ToDateTime(time) && person.WorksUrl == link)
                    Response.Write("<script>alert('未修改');location='WorksList.aspx'</script>");
                else
                {
                    person.WorksName = title;
                    person.WorksUrl = link;
                    person.WorksTime =Convert.ToDateTime( time);
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
}