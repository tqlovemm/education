$(function () {

    $("#backTop").hide();
//显示微信二维码
$(".wxFl").hover(function(){
	$(this).find(".wxBox").stop(true,true).slideDown(100);
	$(this).find(".wxIcon").addClass('wxIcon_ed');
},function(){
    $(this).find(".wxBox").stop(true,true).slideUp(100);
    $(this).find(".wxIcon").removeClass('wxIcon_ed');
});

$(".navM2").hover(function(){
	$(this).find("a").addClass('active');
	$(this).find(".nav2").stop(true,true).slideDown(100);
},function(){
	$(this).find("a").removeClass('active');
	$(this).find(".nav2").stop(true,true).slideUp(100);
})

//左导航 选中状态

$(".slUl li").bind("click",function(){
	$(this).siblings("li").removeClass("active").end().addClass("active");
})

//二级菜单展开与收起
$(".slUl > li.sl2 > a").toggle(function(){
        $(this).parent().addClass("active");
	    $(this).parent().find(".slUl").slideDown(200);
   },function(){
		$(this).parent().removeClass("active");
	    $(this).parent().find(".slUl").slideUp(200);	
});


$(window).scroll(function () {
    // 获得div的高度
//    var h = $(".foucs").offset().top();

    var h = 150;
    if ($(this).scrollTop() < h ) {

        // 滚动到指定位置

        $("#backTop").hide();

    } else {
        $("#backTop").show();
    }
});



//
});




function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-30px"
    }, 500, function () {
        $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
    });
}





