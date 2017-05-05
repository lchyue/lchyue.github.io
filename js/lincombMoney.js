touchClick($('.kinds li'),function(){
   $('.kinds li div').addClass('hide');
     $('.content .moneyContent').addClass('hide');
   $('.kinds li div').eq($(this).index()).removeClass('hide');
    $('.kinds li').removeClass('changeColor');
    $('.kinds li').eq($(this).index()).addClass('changeColor');
  /*  console.log($(this).index())*/
     $('.content .moneyContent').eq($(this).index()).removeClass('hide');
 });
 $('.nav').on('touchstart',drag);
 /*$('.kinds li').on('touchstart',drag);*/
 function drag(ev){
    var moveType = '';
     var disY = ev.originalEvent.touches[0].pageY;
     // console.log(disY);
    $('.nav').on('touchmove',touchMove);
   $(document).on('touchend',touchEnd);
  function touchMove(ev){
     if(disY-ev.originalEvent.touches[0].pageY > 50){
        moveType = 'top';
     }
      else if(disY-ev.originalEvent.touches[0].pageY < -50){
         
          moveType = 'down';
          /*alert(moveType);*/
           $('.nav-content').slideDown(300);
               $('.nav').animate( { height: "6.1rem" }, 500 );
               $(".kinds").css({
                  "position":"static",
                  "background":"rgba(255,255,255,0)",
                  height:"auto"
              });

               
       }
     }
   function touchEnd(){
         //end
        $(document).off('touchmove',touchMove);
        $('.nav').off('touchend',touchEnd);
        switch(moveType){
          case 'top':
              $('.nav-content').slideUp(550);
              $('.nav').animate( { height: "1.1rem" }, 100 );
              $(".kinds").css({
                  "position":"fixed",
                  "top":0,
                  "height":"1.1rem",
                  "width":"100%",
                  "background":"-webkit-gradient(linear, 0 0, 0 100%, from(#20bbed),to(#23b2f0))"
            });

               break;
/*           case 'down':
               $('.nav-content').slideDown(300);
               $('.nav').animate( { height: "6.1rem" }, 500 );
               $(".kinds").css({
                  "position":"static",
                  "background":"rgba(255,255,255,0)",
                  height:"auto"
              });

               break;*/
         }
     }
     ev.originalEvent.preventDefault();
 }
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