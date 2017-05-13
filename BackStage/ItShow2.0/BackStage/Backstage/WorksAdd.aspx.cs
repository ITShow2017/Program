using System;
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
    }

    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string title = txtTitle.Text.Trim();

        string link = txtLink.Text.Trim();

        string Pattern = @"(http|https)://[^\s]*";

        string time =txtTime.Value;

        Regex r = new Regex(Pattern);

        if (link.Length > 0&&time.Length>0 && r.IsMatch(link) && title.Length > 0)
        {
            using (var db = new ITShowEntities())
            {
                Works person = new Works()
                {
                    WorksName = title,

                    WorksUrl = link,

                    WorksTime=Convert.ToDateTime( time)
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
}