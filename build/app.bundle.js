!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o=t(1);!function(){var e=h("#contactForm"),n=h("#txtName"),t=h("#txtEmail"),i=h("#txtSubject"),r=h("#txtMessage"),l=h("#submitBtn"),c=h("#feedback"),a=h(".nav-mobile__links"),s=h(".menu"),u=h("#projects");EventTarget.prototype.on=EventTarget.prototype.addEventListener;var d=null,p=null,f=null,m=null;window.on("load",function(e){h("#year").innerHTML=(new Date).getFullYear(),h("#aboutHeading").on("click",T("about")),h("#skillsHeading").on("click",T("skills")),h("#projectsHeading").on("click",T("projects")),h("#contactHeading").on("click",T("contact")),h("#aboutHeadingMob").on("click",T("about")),h("#skillsHeadingMob").on("click",T("skills")),h("#projectsHeadingMob").on("click",T("projects")),h("#contactHeadingMob").on("click",T("contact")),(f=new XMLHttpRequest).open("GET","./../src/json/projects.json"),f.onreadystatechange=function(){4==f.readyState&&200==f.status&&_(m=JSON.parse(f.responseText))},f.send()}),window.on("scroll",function(e){document.body.scrollTop>200||document.documentElement.scrollTop>200?h(".nav").style.padding="0em 4em 0em 4em":h(".nav").style.padding="1em 4em 1em 4em"}),s.on("click",j),e.on("submit",function(o){o.preventDefault(),l.disabled=!0,c.innerHTML="Please wait...",(p=new FormData).append(n,n.value),p.append(t,t.value),p.append(i,i.value),p.append(r,r.value),(f=new XMLHttpRequest).open("POST","./../src/php/handler.php"),f.send(p),f.onreadystatechange=function(){4==f.readyState&&200==f.status&&("success"==f.responseText?(e.innerHTML="<h2>Thanks "+n.value+", your message has been sent.</h2>",console.log("success")):(l.disabled=!1,console.log("fail")))}});var v=!0,b=!1,y=void 0;try{for(var g,k=a.childNodes[Symbol.iterator]();!(v=(g=k.next()).done);v=!0){g.value.on("click",j)}}catch(e){b=!0,y=e}finally{try{!v&&k.return&&k.return()}finally{if(b)throw y}}function h(e){return document.querySelector(e)}function T(e){return function(n){$("html,body").animate({scrollTop:$("#"+e).offset().top-200},"slow")}}function _(e){e.map(function(e){var n=u.appendChild(document.createElement("div"));n.className="tile";var t=n.appendChild(document.createElement("div"));t.className="project",t.appendChild(document.createElement("h5")).textContent=e.name;var i=t.appendChild(document.createElement("img"));i.id="img"+e.id,i.src=e.img,h("#"+i.id).on("click",function(e,n){return function(t){for((d=new o.CookieManager).setCookie("SCROLLTOP",document.documentElement.scrollTop||document.body.scrollTop,365),$(window).scrollTop($("#projects").offset().top-200);u.firstChild;)u.removeChild(u.firstChild);u.classList.remove("main__projects"),u.classList.add("main__projectView"),u.innerHTML+="\n        <h3>"+e.name+'</h3>\n        <div class="project">\n          <img src='+n.src+'>\n          <div class="column">\n            <p>'+e.description+'</p>\n            <div class="buttons">\n              <a href='+e.link+' target="_blank">View Live</a>\n              <i class="fas fa-backspace fa-3x" id="close"></i>\n            </div>\n          </div>\n        </div>\n      ',h("#close").on("click",function(e){for(;u.firstChild;)u.removeChild(u.firstChild);u.classList.remove("main__projectView"),u.classList.add("main__projects"),_(m),document.documentElement.scrollTop=document.body.scrollTop=d.getCookie("SCROLLTOP")})}}(e,i))})}function j(e){"0px"==h(".nav-mobile__links").style.left?(h(".nav-mobile__links").style.left="-200px",h(".menu").style.color="#fff"):(h(".nav-mobile__links").style.left="0px",h(".nav-mobile__links").style.position="absolute",h(".menu").style.color="#000")}}()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"setCookie",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="expires="+o.toGMTString();document.cookie=e+"="+n+";"+i+";"}},{key:"getCookie",value:function(e){if(""!==document.cookie){var n=document.cookie.split(";").find(function(n){return n.split("=")[0].trim()==e});if(null!=n)return n.split("=")[1].trim()}}}]),e}();n.CookieManager=i}]);