
$(document).ready(function(){
    $(window).scroll(function () {
      // console.log(1);
        var top=$(window).scrollTop();
        // alert(top);
        if(top>0){
            // console.log(1);
            $('header').addClass('fixed-head-on');
            var headerH=$('header').height();
            $('body').css('padding-top',headerH);
        }

    });
//点击导航栏链接跳转到对应部分显示
    $('.navbar-nav li a').click(function () {

        // console.log($(this).parent().siblings());
        // $(this).parent().addClass('active').siblings().removeClass('active');
        // console.log(this.hash);
        var topValue=Math.floor($(this.hash).offset().top);
        // console.log(topValue);
        var extra=parseInt($('header').css('height'));
        console.log(extra);
        $('html,body').animate({
            scrollTop:topValue+'px'
            // scrollTop:topValue-extra+'px'
        },800);
        // $(thiss).parent().siblings().removeClass('active');
    });

    //联系我们表单验证部分
    $('#contact-us form').validate({
        rules:{
            username:{
                required:true
            },
            email:{
                required: true,
                email:true
            },
            message:{
                required:true
            }
        },
        messages:{
            username:{
                required:"请输入用户名"
            },
            email:{
                required: "请输入邮箱地址",
                email:"请输入有效的电子邮件地址"
            },
            message:{
                required:"留言内容不能为空"
            }
        },
        submitHandler:function (form) {
            alert("提交成功！感谢您的留言");
            $(form).resetForm();
        }
    });
});

//关于脚本

$('body').scrollspy({ target: '#mynavbar' });
// if($('[data-animation]').length>0){
//     $('[data-animation]').each(function (index,el) {
//         var $this=$(this);
//         var animationValue=$(this).attr('data-animation');
//
//         setTimeout(function () {
//             $this.removeClass('object-no-visible').addClass('object-visible');
//             $this.addClass('animated '+animationValue);
//         },1000);
//
//     })
// }

$('#question div.panel-heading a').mouseout(function () {
    $(this).css("text-decoration","none");
});

