<%@ WebHandler Language="C#" Class="BindHandler" %>

using System;
using System.Web;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Collections.Generic;

public class BindHandler : IHttpHandler {

    public class InforId
    {
        public int id { set; get; }
    }


    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        var s = context.Request["informationid"];//获取数组使用该函数
        System.Web.Script.Serialization.JavaScriptSerializer _jsonConverter = new System.Web.Script.Serialization.JavaScriptSerializer();
        List<InforId> list = _jsonConverter.Deserialize<List<InforId>>(s);

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}