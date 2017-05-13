<%@ WebHandler Language="C#" Class="PhotoCutHandler" %>

using System;
using System.Web;
using System.Drawing;
using System.Collections.Generic;
using System.Linq;
using System.IO;
public class PhotoCutHandler : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Charset = "utf-8";
        string name=DateTime.Now.ToString("yyyyMMddhhmmss") + ".jpg";
        string filePath = "/File/"+name;
        HttpFileCollection files = System.Web.HttpContext.Current.Request.Files;
        HttpPostedFile file = files[0];
        Image img = new Bitmap(file.InputStream);
        img.Save(context.Server.MapPath(filePath));
        img.Dispose();
        //var httpRequest = System.Web.HttpContext.Current.Request;
        //HttpFileCollection uploadFiles = httpRequest.Files;
        ////try
        ////{

        ////int vals = context.Request.TotalBytes;  
        ////byte[] buffer = context.Request.BinaryRead(vals);  
        //string imgname = DateTime.Now.ToString("yyyyMMddhhmmss") + ".jpg";
        //string filePath = "File/" + imgname;
        //if (context.Request.Files.Count > 0)
        //{

        //    int i;
        //    for (i = 0; i < uploadFiles.Count; i++)
        //    {
        //        HttpPostedFile postedFile = uploadFiles[i];
        //        Image img = new Bitmap(postedFile.InputStream);
        //        img.Save(context.Server.MapPath(filePath));
        //        img.Dispose();
        //    }
        //}
        //}

        //catch (Exception ex)
        //{
        //    context.Response.Write("0");
        //}
        //  SaveFile();
    }
    private void SaveFile()
    {
        string basePath = "/File/";
        string name=DateTime.Now.ToString("yyyyMMddhhmmss") + ".jpg";
        basePath = System.Web.HttpContext.Current.Server.MapPath(basePath);
        HttpFileCollection files = System.Web.HttpContext.Current.Request.Files;
        if (!System.IO.Directory.Exists(basePath))
        {
            System.IO.Directory.CreateDirectory(basePath);
        }
        var suffix = files[0].ContentType.Split('/');
        //获取文件格式
        //var _suffix = suffix[1].Equals("jpeg", StringComparison.CurrentCultureIgnoreCase) ? "" : suffix[1];
        var _suffix=suffix[1];

        //文件保存
        var full = basePath + name;
        files[0].SaveAs(full);
        var _result = "{\"jsonrpc\" : \"2.0\", \"result\" : null, \"id\" : \"" + name + "\"}";
        System.Web.HttpContext.Current.Response.Write(_result);


    }
    public bool IsReusable {
        get {
            return false;
        }
    }

}