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
            
            if(isShowBigImg){
                // 清空子元素
                $(item).empty();
                // 4.2设置背景
                $(item).css({
                    backgroundImage:allSrc
                });
            }else{
                let $img=`
                    <img src='${src}' alt='轮播图'>
                `;
                $(item).empty().append($img);
            }
        });
    });

    // 模态框
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    //3.1获取选项卡的宽度
    $(window).on("resize",function(){
        let $ul=$("#lk_product .nav");
        let $allLi=$("[role='presentation']",$ul);
        //3.1.1获取宽度和
        let totalW=0;
        $allLi.each(function(index,item){
            totalW+=$(item).width();
        });

        let parentW=$ul.parent().width();
        // 3.1.2设置宽度
        if(totalW>parentW){
            $ul.css({
                width:totalW+'px'
            });    
        }else{
            $ul.removeAttr("style");
        }
    });
    $(window).trigger("resize");
});