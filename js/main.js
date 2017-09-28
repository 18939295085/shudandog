/**
 * Created by Administrator on 2017/9/25.
 */
'use strict';
/*地图的调用*/
//初始化地图对象，加载地图
var map = new AMap.Map("container", {
    resizeEnable: true,
    center: [121.499809, 31.239669],//地图中心点
    zoom: 11 //地图显示的缩放级别
});
//添加点标记，并使用自己的icon
new AMap.Marker({
    map: map,
    position: [121.499809, 31.239669],
    icon: new AMap.Icon({
        size: new AMap.Size(60, 60),  //图标大小
        image: "image/doghead.png",
        imageOffset: new AMap.Pixel(0, 0)
    })
});
/*上传图片*/
var data = [];
var a = null;
$("#img_input").on("change", function (e) {
    var file = e.target.files[0]; //获取图片资源
    // 只选择图片文件
    if (!file.type.match('image.*')) {
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file); // 读取文件
    // 渲染文件
    reader.onload = function (arg) {
        var img = '<img id="imgid" class="preview" src="' + arg.target.result + '" alt="preview"/>';
        $("#preview_box").empty().append(img);
        a = arg.target.result;
    }
});
/*
 * 选择贴图
 * */
var a = -1;
var dog = ['bookdog', 'bigrandog', 'bigsaodog', 'bigsupdog', 'bigswidog'];
$(".imgLi").hide()
$('.dogxx>ul>li').on("click", function () {
    var index = $(this).index();
    a = index;
    // console.info(dogs)
    $(this).addClass('active');
    $(this).siblings().removeClass("active");
    $('.dibuton img').attr('src', 'image/logoliang.png');
    $(".imgLi").eq(index).show();
})
/*隐藏贴图*/
$('.imgLi span').on('click', function () {
    $('.imgLi').css('display', 'none');
})
/*获取用户上传图片*/
var count = 1;
function ajaxFileUpload(id) {
    count++;
    //图片格式验证
    var x = $('#' + id);
    if (!x || !x.val()) return;
    var patn = /\.jpg$|\.jpeg$|\.png$|\.gif$/i;
    if (!patn.test(x.val())) {
        alert("您选择的不是图片");
        x.val() = "";
        return;
    }
    $.ajaxFileUpload({
        url: "http://192.168.40.59:8080/img",//上传的url，自己设置
        type: 'post',
        secureuri: false, //一般设置为false
        fileElementId: id, // 上传文件的id、name属性名
        dataType: 'json', //返回值类型，一般设置为json、application/json
        data: {'openid': 'oQqBEwPpqeJAksI7V0MycdWAGwVw', 'gouname': dog[a]},//传参
        success: function (data, status) {
            data = data.replace(/<.*?>/g, '');
            var obj = eval('(' + data + ')');
            if (obj.url == '') {
                alert(obj.msg);
                return;
            }
            $('#userfile').attr('title', count);
        },
        error: function (data, status, e) {
            $('#userfile').attr('title', count);
        }
    });
    //return false;
}
/*合成图片*/
function hecheng() {
    if (a >= 0) {
        ajaxFileUpload("img_input");
        $('.imgLi span').css('display', 'none');
        $('#container').css('display', 'block');
        $('#imgBox').fadeOut(5000);
        $('.upload').css('display', 'none');
    } else {
        $('.modal').fadeIn().fadeOut(5000);
    }
}

