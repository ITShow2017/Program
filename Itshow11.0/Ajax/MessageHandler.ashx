<%@ WebHandler Language="C#" Class="MessageHandler" %>

using System;
using System.Web;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;

public class MessageHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        using (var db = new ITShowEntities())
        {
            List<Message> list = (from it in db.Message select it).ToList();

            string json = JsonConvert.SerializeObject(list);

            context.Response.Write(json);
        }
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}