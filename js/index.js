/**
 * Created by Administrator on 2017/9/26.
 */
$(document).ready(
    $.ajax({
        type: "GET",
        url: 'http://localhost:63342/xiangmu/start/lvyouhuodong/js/tsconfig.json',
        dtype: 'json',
        success: function (datase) {
            /*var arrs=[];
            var obj=new Object();
            setInterval(function () {
                var index=Math.floor(Math.random()*datase.length);
                obj=datase[index];
                var userimg=obj.headimg;
                var nickname=obj.nickname;
                var city=obj.city;
                var pinjie =
                    '<p>' + '<span>' + '<img style="width: 10%;" src=' + userimg + ' alt="">' + '</span>' +
                    '<span>' + nickname + '</span>' + '<span>带书单狗去了</span>' + '<span>' + city + '</span>' +
                    '</p>';
                $('.showdanmu').append(pinjie);
            },10000);*/



            /*var datas = datases;
            for (var z = 0; z < datas.length; z++) {
                var userimg = datas[z].headimg;
                var nickname = datas[z].nickname;
                var city = datas[z].city;
                var ads=Math.random(datas[z])
                console.info(ads)
            };
            var pinjie =
                '<p>' + '<span>' + '<img src=' + userimg + ' alt="">' + '</span>' +
                '<span>' + nickname + '</span>' + '<span>带书单狗去了</span>' + '<span>' + city + '</span>' +
                '</p>';
            for (var i = 0; i < 4; i++) {
                var marquee = $('<MARQUEE>');
                var marqueePiece = $('<div>');
                marqueePiece.addClass('marquee-piece');
                marqueePiece.html(pinjie);
                marquee.addClass('marquee');
                marquee.attr('scrollAmount', parseInt(Math.random() * 15) + 3);
                marquee.attr('scrollDelay', parseInt(Math.random() * 70) + 1);
                marquee.css('top', z * 10);
                $('.marquee-wrapper').append(marquee.append(marqueePiece));
            }*/
        },
        error: function (datases) {
            console.info('网络连接失败' + datases);
        }
    })
)