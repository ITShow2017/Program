using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class EventAdd : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

  
    protected void btnAdd_Click(object sender, EventArgs e)
    {
        string content = txtContent.Text.Trim();

        string time = txtTime.Value;

        if (content.Length > 0 && time.Length > 0)
        {
            using (var db = new ITShowEntities())
            {
                Event person = new Event()
                {
                    EventContent = content,

                    //EventImage=

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
}