using System.Linq;
using System.Net.Mail;
using System.Web;

namespace Library.DAL
{
    public class Send : System.Web.UI.Page
    {
        /// <summary> 
        /// 发送电子邮件 
        /// </summary> 
        /// <param name="MessageFrom">发件人邮箱地址 </param> 
        /// <param name="MessageTo">收件人邮箱地址 </param> 
        /// <param name="MessageSubject">邮件主题 </param> 
        /// <param name="MessageBody">邮件内容 </param> 
        /// <returns> </returns> 
        static public bool Sendemails(string MessageFrom, string MessageTo, string MessageSubject, string MessageBody)
        {
            MailMessage message = new MailMessage();
            MailAddress from = new MailAddress(MessageFrom);
            message.From = from;
            MailAddress messageto = new MailAddress(MessageTo);
            message.To.Add(messageto);              //收件人邮箱地址可以是多个以实现群发 
            message.Subject = MessageSubject;
            message.Body = MessageBody;
            message.IsBodyHtml = true;              //是否为html格式 
            message.Priority = MailPriority.High;   //发送邮件的优先等级
            //指定发送邮件的服务器地址或IP 
            //指定发送邮件端口
            SmtpClient sc = new SmtpClient("smtp.163.com", 25);
            sc.Credentials = new System.Net.NetworkCredential("17806282596@163.com", "itstudio2"); //指定登录服务器的用户名和密码  


            sc.Send(message);       //发送邮件                              
            return true;
        }
        static public void email(string toemail, string totitle, string tobody)    //发送邮件
        {
            MailMessage mailObj = new MailMessage();

            mailObj.From = new MailAddress("lalalafunny99@sina.cn"); //发送人邮箱地址

            MailAddress messageto = new MailAddress(toemail);

            mailObj.To.Add(messageto);   //收件人邮箱地址

            mailObj.Subject = totitle;    //主题

            mailObj.IsBodyHtml = true;//确认是否是html格式

            mailObj.Priority = MailPriority.High;//确认优先级

            mailObj.Body = tobody;    //正文

            SmtpClient smtp = new SmtpClient("smtp.sina.cn", 25);

            //指定smtp服务器名称

            smtp.UseDefaultCredentials = true;

            smtp.Credentials = new System.Net.NetworkCredential("lalalafunny99@sina.cn", "lalalafunny99");  //发送人的登录名和密码

            smtp.Send(mailObj);
        }
    }
}