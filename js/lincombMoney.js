
$(function() {           
    //菜单框架自动获取高度
    var doc_H=$(document).height(); 
    var navHeight = $(".nav").height();
    // var navHeight = document.getElementById("nav").offsetheight;
    console.log(navHeight);
    var height = doc_H - navHeight;
    var scroll=function(){ 
        $('#content').height(height);
        $('#content').css({
            "overflowY":"auto"
        })
    }
  scroll();
    console.log(height);
    console.log(IScroll);
    var myScroll = new IScroll('#content', { 
        // mouseWheel: true, 
        // click: true ,
        // bounce: true,//反弹
    });
    myScroll.refresh();


    touchClick($('.kinds li'),function(){
        $('.kinds li div').addClass('hide');
        $('.content .moneyContent').addClass('hide');
        $('.kinds li div').eq($(this).index()).removeClass('hide');
        $('.kinds li').removeClass('changeColor');
        $('.kinds li').eq($(this).index()).addClass('changeColor');
      /*  console.log($(this).index())*/
        $('.content .moneyContent').eq($(this).index()).removeClass('hide');
    });
    $(".nav").addEventListener('touchstart',function(ev){
        ev.preventDefault();
    },false);
    $(".nav").on('touchstart',function(ev){
        var moveType = '';
        var disY = ev.originalEvent.touches[0].pageY;
        // console.log(disY);
        $(document).on('touchmove',touchMove);
        $(document).on('touchend',touchEnd);
        function touchMove(ev){
            if(disY-ev.originalEvent.touches[0].pageY > 50){
                moveType = 'top';
            }
            else if(disY-ev.originalEvent.touches[0].pageY < -50){
                moveType = 'down';
            }
        }
        function touchEnd(){
            //end
            $(document).off('touchmove',touchMove);
            $(document).off('touchend',touchEnd);
            switch(moveType){
                case 'top':
                    $('.nav-content').slideUp(550);
                    $('.nav').animate( { height: "1.1rem" }, 500 );
                    // myScroll.refresh();
                    // var doc_H=$(document).height(); 
                    // var navHeight = $(".nav").height();
                    // var height = doc_H - navHeight;
                    // $('#content').height(height);
                    // $('#content').css({
                    //     "overflowY":"auto"
                    // })
                    scroll();
                    break;
                case 'down':
                    $('.nav-content').slideDown(300);
                    $('.nav').animate( { height: "6.1rem" }, 500 );
                    // myScroll.refresh();
                    scroll();
                    break;
            }
        }
        ev.originalEvent.preventDefault();
    });
    function touchClick(obj,fn){   
        obj.on('touchstart',function(ev){
            var _this = this;
            var moveCheck = false;
            $(document).on('touchmove',touchMove);
            $(document).on('touchend',touchEnd);
            function touchMove(){
                moveCheck = true;
            }
            function touchEnd(){
                if(!moveCheck){
                    fn && fn.call(_this);
                }
                $(document).off('touchmove',touchMove);
                $(document).off('touchend',touchEnd);
            }
            ev.originalEvent.stopPropagation();
            ev.isDefaultPrevented();
        });
    } 




});

