using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class test : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {

        }
    }

    protected void btn_Click(object sender, EventArgs e)
    {
        //DataTable dt = new DataTable();

        //DataColumn dc1 = new DataColumn("KeyId", Type.GetType("System.String"));
        //DataColumn dc2 = new DataColumn("KeyWords", Type.GetType("System.String"));
        //dt.Columns.Add(dc1);
        //dt.Columns.Add(dc2);

        //DataRow dr = dt.NewRow();

        //dr["KeyId"] = 1;
        //dr["KeyWords"] = "垃圾";
        //dt.Rows.Add(dr);
        //DataRow dr1 = dt.NewRow();
        //dr1["KeyId"] = 2;
        //dr1["KeyWords"] = "愚蠢";
        //dt.Rows.Add(dr1);
        BadWordsFilter badwordfilter = new BadWordsFilter();
        //初始化关键字
        badwordfilter.Init();
        //检查是否有存在关键字
        bool a = badwordfilter.HasBadWord(txt.Text);
        if (a == true)
        {
            Response.Write("<script>alert('该留言有不合法文字')</script>");
        }
        else
        {
            Response.Write("<script>alert('留言成功');location='test.aspx'</script>");
        }
    }
}