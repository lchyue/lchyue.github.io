/**
 * Created by rory on 2016/12/28.
 * 11:32
 */
/*

 (function () {
 //iphone 4 :width=320px; 1rem = 100px; dpr = 2;
 var doc = document.documentElement; //获取根元素的dom节点;
 var curDeviceWidth = doc.clientWidth || window.innerWidth; //拿到当前设备的宽度
 //动态的改变根元素字体大小：
 doc.style.fontSize = curDeviceWidth/2 * (100/320) + 'px';
 })();*/

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);