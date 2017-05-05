$('.kinds li').each(function(){
  touchClick(this,function(){
    $('.kinds li').removeClass('active');
    $(this).addClass('active');
    $('.content .moneyContent').eq($(this).index()).removeClass('hide');
  });
});
$('.nav')[0].addEventListener('touchstart',drag,false);
function drag(ev){
  var moveType = '';
  var disY = ev.touches[0].pageY;
  // console.log(disY);
  document.addEventListener('touchmove',touchMove);
  document.addEventListener('touchend',touchEnd);
  function touchMove(ev){
    if(disY-ev.touches[0].pageY > 50){
      moveType = 'top';
    }
    else if(disY-ev.touches[0].pageY < -50){
      moveType = 'down';
    }
  }
  function touchEnd(){
    //end
    switch(moveType){
      case 'top':
        $('.nav-content').slideUp(550);
        $('.nav').animate( { height: "1.1rem" }, 500 );
        break;
      case 'down':
        $('.nav-content').slideDown(300);
        $('.nav').animate( { height: "6.1rem" }, 500 );
        break;
    }
    document.removeEventListener('touchmove',touchMove);
    document.removeEventListener('touchend',touchEnd);
  }
  ev.preventDefault();
}
function touchClick(obj,fn){
   obj.addEventListener('touchstart',function(ev){
      var _this = this;
      var moveCheck = false;
      var disX = ev.touches[0].pageX;
      var disY = ev.touches[0].pageY;
      document.addEventListener('touchmove',touchmove,false);
      document.addEventListener('touchend',touchend,false);
      function touchmove(ev){
        var curX = Math.floor(disX - ev.touches[0].pageX);
        var curY = Math.floor(disY - ev.touches[0].pageY);
        if(curX > 10 && curY > 10){
          moveCheck = true;
        }
      }
      function touchend(){
        if(!moveCheck){
          fn && fn.call(_this);
        }
        moveCheck = false;
        document.removeEventListener('touchmove',touchmove);
        obj.removeEventListener('touchend',touchend);
      }
      ev.preventDefault();
      //ev.stopPropagation();
  },false);
}  