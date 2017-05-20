using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class BackStage_Backstage_ChangeReply : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            int id = Convert.ToInt32(Request.QueryString["id"]);
            using (var db = new ITShowEntities())
            {
                Message message = db.Message.SingleOrDefault(a => a.MessageId == id);

                myEditor.InnerHtml = message.MessageComment;
            }
        }
    }

    protected void BtnReply_Click(object sender, EventArgs e)
    {
        int id = Convert.ToInt32(Request.QueryString["id"]);
        using (var db = new ITShowEntities())
        {
            Message message = db.Message.SingleOrDefault(a => a.MessageId == id);

            message.MessageComment = Server.HtmlDecode(myEditor.InnerHtml);

            db.SaveChanges();
        }
    }
}