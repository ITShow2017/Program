using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Comments : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        //在此对IP是否封禁做处理
        if (true)
        {
            string comment = textarea1.Value;
            //在此处对comment进行脏字处理


            //处理发言过于频繁的逻辑，如果针对某个用户的话，好像是要先查询一遍该用户IP地址，对比上一次留言时间，那就要改数据库了。。。。


            if (txtCode.Text == Session["CheckCode1"].ToString())
            {
                string time = DateTime.Now.ToString();
                string photoUrl = "images/p1.png";
                //获取的对应图片信息
                if (photoIndex.Text == "0")
                {
                    photoUrl = "images/p1.png";
                }
                if (photoIndex.Text == "1")
                {
                    photoUrl = "images/p2.png";
                }
                if (photoIndex.Text == "2")
                {
                    photoUrl = "images/p3.png";
                }
                if (photoIndex.Text == "3")
                {
                    photoUrl = "images/p4.png";
                }
                if (photoIndex.Text == "4")
                {
                    photoUrl = "images/p5.png";
                }
                if (photoIndex.Text == "5")
                {
                    photoUrl = "images/p6.png";
                }
                if (photoIndex.Text == "6")
                {
                    photoUrl = "images/p7.png";
                }
                if (photoIndex.Text == "7")
                {
                    photoUrl = "images/p8.png";
                }
                if (photoIndex.Text == "8")
                {
                    photoUrl = "images/p9.png";
                }
                using (var db = new ITShowEntities())
                {
                    Message message = new Message();

                    message.MessageContent = comment;

                    message.MessageTime = Convert.ToDateTime(time);

                    message.MessagePhoto = photoUrl;

                    db.Message.Add(message);

                    db.SaveChanges();

                    Response.Write("<script>alert('留言成功！');location='Comments.aspx'</script>");

                }
            }
            else
            {
                Response.Write("<script>alert('验证码错误！');location='Comments.aspx'</script>");

            }
        }
        else
        {

        }
    }
}