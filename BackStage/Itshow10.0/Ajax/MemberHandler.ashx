<%@ WebHandler Language="C#" Class="MemberHandler" %>

using System;
using System.Web;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;

public class MemberHandler : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        using (var db = new ITShowEntities())
        {
            List<Member> list = (from it in db.Member select it).ToList();

            string json = JsonConvert.SerializeObject(list);

            context.Response.Write(json);
        }

    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}