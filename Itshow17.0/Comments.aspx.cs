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
        IPManager manager = new IPManager();//查看IP是否用得频繁
        string IPAddress = manager.GetClientIPv4Address();
        XmlManager xmanager = new XmlManager();
        int ans = xmanager.Editor(IPAddress);

        if (ans > 0)
        {
            if (ans == 1)
            {
                xmanager.Add(IPAddress);//如果没有这个IP，就加入记录

                BadWordsFilter badwordfilter = new BadWordsFilter();                    //在此处对comment进行脏字处理
                //初始化关键字
                badwordfilter.Init();
                //检查是否有存在关键字
                bool a = badwordfilter.HasBadWord(textarea1.Value.Trim());

                if (a == false)
                {
                    string comment = textarea1.Value;

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
                    Response.Write("<script>alert('留言中有不合法的内容')</script>");

                }
            }
            else
                Response.Write("<script>alert('操作过于频繁，请10秒后再操作')</script>");

        }
        else
            Response.Write("<script>alert('操作失败请重试')</script>");
    }
}