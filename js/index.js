$(function(){

    //导航切换
    navSlide();

    //图片轮转
    imgSlide();

});

function navSlide(){
    $("#sx-nav-tab").delegate("li","click", function () {
        var t = $(this).index();
        if(t == 0){
            nav_distance = 50*(t+1)+"px";
        }else{
            nav_distance = (80*t+50)+"px";
        }
        $(this).css({"color":"#fff"});
        $(this).siblings().css({"color":"#D7E2EC"});
        $(this).parents(".sx-nav-content").children(".sx-nav-tabline").css({"left":nav_distance});

    });
}

function imgSlide(){

    var num=1;
    var pnum = $(".content p").length;
    var _interval;

    var slideWidth = $(".sx-slide").width();
    var btntunWdth = $(".sx-slide .btntun").width();
    $(".sx-slide .btntun").css({"left":(slideWidth-btntunWdth)/2});

    $(".sx-slide .left").hover(function(){
        $(this).find("img").css({"display":"none"});
    },function(){
        $(this).find("img").css({"display":"block"});
    });

    $(".sx-slide .left").click(function(){
        back();
    });

    $(".sx-slide .right").hover(function(){
        $(this).find("img").css({"display":"none"});
    },function(){
        $(this).find("img").css({"display":"block"});
    });

    $(".sx-slide .right").click(function(){
        forword();
    });

    function run(){
        num++;
        if(num==(pnum+1)){
            num = 1;
        }
        $(".bgimg").css({"z-index":"0","opacity":"0"});
        $(".opacity0"+num).css({"z-index":"1","opacity":"1"});
        num--;
        $("#litun li").removeClass("current");
        $("#litun li:eq("+num+")").addClass("current");
        num++;

    }

    _interval = setInterval(run,5000);

    function back(){
        num--;
        if(num==0){
            num=pnum;
        }
        $(".bgimg").css({"z-index":"0","opacity":"0"});
        $(".opacity0"+num).css({"z-index":"1","opacity":"1"});
        num--;
        $("#litun li").removeClass("current");
        $("#litun li:eq("+num+")").addClass("current");
        num++;
    }
    function forword(){
        num++;
        if(num ==(pnum+1)){
            num=1;
        }
        $(".bgimg").css({"z-index":"0","opacity":"0"});
        $(".opacity0"+num).css({"z-index":"1","opacity":"1"});
        num--;
        $("#litun li").removeClass("current");
        $("#litun li:eq("+num+")").addClass("current");
        num++;
    }



    $("#litun").delegate("li","click",function(event){
        var event = event || window.event;
        var btnnum = $(event.target).html();
        $(".bgimg").css({"z-index":"0","opacity":"0"});
        $(".opacity0"+btnnum).css({"z-index":"1","opacity":"1"});
        num = btnnum;
        $("#litun").find("li").each(function(){
            $(this).removeClass("current");
        });
        $(event.target).addClass("current");
    });

}