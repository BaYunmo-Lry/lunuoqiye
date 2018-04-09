// 轮播图1
var timer;
var i=0;
function run() {
    i++;
    if(i==2){
        i=0;
    }
    $("#slides li").eq(i).addClass("liActive").siblings("li").removeClass("liActive");
}
timer=setInterval(run,5000);

// 轮播图2
$(".fbt div").click(function () {
    var index=$(this).index();
    $(this).addClass("poiont_active").siblings("div").removeClass("poiont_active");
    $(".lunbo_box .pic").eq(index).addClass("picActive").siblings("div").removeClass("picActive");
});
var timer2;
var n=0;
function lunbo(){
    n++;
    if(n==3){
        n=0;
    }
    $(".fbt div").eq(n).addClass("poiont_active").siblings("div").removeClass("poiont_active");
    $(".lunbo_box .pic").eq(n).addClass("picActive").siblings("div").removeClass("picActive");
}
timer2=setInterval(lunbo,5000);

// 轮播3
var timer3;
function scroll(){
    $(".sectionzou ul").animate({"margin-left":"-110px"},1000,function(){
        $(".sectionzou ul li:eq(0)").appendTo($(".sectionzou ul"));
        $(".sectionzou ul").css({"margin-left":0})
    })
}
timer3=setInterval(scroll,2000);
$("#prev-02").click(function () {
    $(".sectionzou ul").animate({"margin-left":"-110px"},1000,function(){
        $(".sectionzou ul li:eq(0)").appendTo($(".sectionzou ul"));
        $(".sectionzou ul").css({"margin-left":0})
    })
});
$("#next-02").click(function () {
    $(".sectionzou ul").animate({"margin-left":"110px"},1000,function(){
        $(".sectionzou ul li:eq(0)").appendTo($(".sectionzou ul"));
        $(".sectionzou ul").css({"margin-left":0})
    });
});

// 逐渐淡出特效
window.onload=function () {
    $(".platform .box ul li").addClass("block");
};