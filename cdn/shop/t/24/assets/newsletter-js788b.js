(function($){"use strict";$.fn.firstVisitPopup=function(settings){var $var_popup_wrapper,setCookie=function(name,value){var date=new Date,expires="expires=";date.setTime(date.getTime()+864e5),expires+=date.toGMTString(),document.cookie=name+"="+value+"; "+expires+"; path=/"},getCookie=function(name){var allCookies=document.cookie.split(";"),cookieCounter=0,currentCookie="";for(cookieCounter=0;cookieCounter<allCookies.length;cookieCounter++){for(currentCookie=allCookies[cookieCounter];currentCookie.charAt(0)===" ";)currentCookie=currentCookie.substring(1,currentCookie.length);if(currentCookie.indexOf(name+"=")===0)return currentCookie.substring(name.length+1,currentCookie.length)}return!1},showMessage=function(){setTimeout(function(){$var_popup_wrapper.css({opacity:"1",visibility:"visible",transition:".5s"}).fadeIn(500)},5e3)},hideMessage=function(){$var_popup_wrapper.fadeOut(500),setCookie("fvpp"+settings.cookieName,"true")};$var_popup_wrapper=$(".popup_wrapper"),getCookie("fvpp"+settings.cookieName)?hideMessage():showMessage(),$(".popup_off").on("click",hideMessage)}})(jQuery);
//# sourceMappingURL=/cdn/shop/t/24/assets/newsletter-js.js.map?v=17737224172625062141702209807
