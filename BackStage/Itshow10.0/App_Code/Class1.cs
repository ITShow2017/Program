using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;

/// <summary>
/// Class1 的摘要说明
/// </summary>
public class Class1
{
    public Class1()
    {
        //
        // TODO: 在此处添加构造函数逻辑
        //
    }
    static public string md5(string str, int code)  //code 16 或 32  用于哈希加密
    {
        if (code == 16) //16位MD5加密（取32位加密的9~25字符）  
        {
            return System.Web.Security.FormsAuthentication.HashPasswordForStoringInConfigFile(str, "MD5").ToLower().Substring(8, 16);
        }

        if (code == 32) //32位加密  
        {
            return System.Web.Security.FormsAuthentication.HashPasswordForStoringInConfigFile(str, "MD5").ToLower();
        }

        return "00000000000000000000000000000000";
    }
}
public class SimpleRSA
{
    /**
     * 加密、解密算法
     * @param key 公钥或密钥
     * @param message 数据
     * @return
     */
    public static long rsa(int baseNum, int key, long message)
    {
        if (baseNum < 1 || key < 1)
        {
            return 0L;
        }
        //加密或者解密之后的数据
        long rsaMessage = 0L;

        //加密核心算法
        rsaMessage = Convert.ToInt64((Math.Round(Math.Pow(message, key)) % baseNum));
        return rsaMessage;
    }

    public static void main(String[] args)
    {
        //基数
        int baseNum = 3 * 11;
        //公钥
        int keyE = 3;
        //密钥
        int keyD = 7;
        //未加密的数据
        long msg = 24L;
        //加密后的数据
        long encodeMsg = rsa(baseNum, keyE, msg);
        //解密后的数据
        long decodeMsg = rsa(baseNum, keyD, encodeMsg);


    }

}
public class RSA
{
    string PublicKey, PrivateKey;
    void Initial()
    {

        RSACryptoServiceProvider rsaProvider;
        //声明一个RSA算法的实例，由RSACryptoServiceProvider类型的构造函数指定了密钥长度为1024位
        //实例化RSACryptoServiceProvider后，RSACryptoServiceProvider会自动生成密钥信息。
        rsaProvider = new RSACryptoServiceProvider(1024);
        //将RSA算法的公钥导出到字符串PublicKey中，参数为false表示不导出私钥
        PublicKey = rsaProvider.ToXmlString(false);
        //将RSA算法的私钥导出到字符串PrivateKey中，参数为true表示导出私钥
        PrivateKey = rsaProvider.ToXmlString(true);
        byte[] data;
    }

    byte[] EncryptData(byte[] data)
    {
        RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(1024);
        //将公钥导入到RSA对象中，准备加密；
        rsa.FromXmlString(PublicKey);
        //对数据data进行加密，并返回加密结果；
        //第二个参数用来选择Padding的格式
        return rsa.Encrypt(data, false);
    }

    byte[] DecryptData(byte[] data)
    {
        RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(1024);
        //将私钥导入RSA中，准备解密；
        rsa.FromXmlString(PrivateKey);
        //对数据进行解密，并返回解密结果；
        return rsa.Decrypt(data, false);
    }

    byte[] Sign(byte[] data)
    {
        RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(1024);
        //导入私钥，准备签名
        rsa.FromXmlString(PrivateKey);
        //将数据使用MD5进行消息摘要，然后对摘要进行签名并返回签名数据
        return rsa.SignData(data, "MD5");
    }

    bool Verify(byte[] data, byte[] Signature)
    {
        RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(1024);
        //导入公钥，准备验证签名
        rsa.FromXmlString(PublicKey);
        //返回数据验证结果
        return rsa.VerifyData(data, "MD5", Signature);
    }

}