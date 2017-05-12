$(function () {
    var infonumber = $("tbody").find("tr").length;
    var dataArray= new Array();
    var i;
    for (i = 0; i < infonumber; i++)
    {
        dataArray.push($("tbody tr:eq(" + i + ") div").attr("id"));
    }
    var cover =$(".cover")
        .css({
        "width": $(window).width(),
        "height": $(window).height(),
        "background": "rgba(255,255,255,0.8)",
        "zIndex": 5,
        "position": "absolute",
        "top": 0,
        "left": 0,
         "display":"none"
    });
    var popImagediv =$(".popimagediv")
        .css({
        "left":($(window).width()-$(".popimagediv").width())/2
        });
    $.ajax({

        type: 'get',
        url: '/Ajax/BindHandler.ashx',
        async: 'true',
        data: {
            informationid: dataArray
        },
        traditional: true,
        success: function (data) {
            // obj = eval("(" + data + ")");
            jsonobj = JSON.parse(data);
            //字符串转换为json对象，有这句话就不能在设置 datatype=json   
        },
        error: function () {
            //window.location.reload();
        }
    });
    $("tbody tr td:eq(0)").click(function () {
        $(".cover").css({
            "display": "block"
        });
        $(".popimagediv").css({
            "display": "block"
        });
        var number = $(this).parent("tr").index() - 1;
        $(".popimagediv img").attr("src", jsonobj[number].memberphoto);
    })
    $(".cover").click(function () {
        $(".cover").css({
            "display": "none"
        });
        $(".popimagediv").css({
            "display": "none"
        });
    })
})