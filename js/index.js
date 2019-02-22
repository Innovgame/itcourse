// 获取窗口大小
$(function(){
    $(window).on('resize',function(){
        // 1.获取窗口宽度
        let clientW=$(window).width();
        
        //2.判断是否大于临界值
        let isShowBigImg=clientW>=800;

        //3.获取所有item值
        let $allItems=$("#lk_carousel .item");

        //4.遍历
        $allItems.each(function(index,item){
            // 4.1 取出图片路径
            let src=isShowBigImg ? $(item).data("lg-img") : $(item).data("sm-img");
            let allSrc='url("'+src+'")';//es6语法：`url("${src}")`;
            
            // 4.2设置背景
            $(item).css({
                backgroundImage:allSrc
            });
        });
    });
    $(window).trigger("resize");
});