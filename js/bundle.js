!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";$(".container-row-areas-work__slider").slick({infinite:!0,slidesToShow:document.documentElement.clientWidth<=425?2:8,slidesToScroll:document.documentElement.clientWidth<=425?1:4,autoplay:!0,autoplaySpeed:2e3,prevArrow:document.documentElement.clientWidth<=425?"":"<div class='slider__arrow'></div>",nextArrow:document.documentElement.clientWidth<=425?"":"<div class='slider__arrow slider__arrow_next'></div>"}),document.addEventListener("scroll",function(){window.pageYOffset>1?$(".container_scroll-nav").addClass("show"):$(".container_scroll-nav").removeClass("show")});var o=document.querySelector(".main__make-request_popup");document.addEventListener("click",function(e){(e.target.classList.contains("make-request__close")||e.target===o)&&o.classList.remove("show")}),document.addEventListener("touchend",function(e){e.target.classList.contains("header__burger")&&(s.classList.remove("show"),document.querySelector(".nav_header").classList.add("show")),e.target.classList.contains("nav_header__cross")&&document.querySelector(".nav_header").classList.remove("show"),e.target===s&&c(0),e.target.classList.contains("button_make-upstairs-request")&&(document.documentElement.clientWidth<=425?c(document.querySelector(".container_make-request_mob").offsetTop-document.querySelector(".header").getBoundingClientRect().height):o.classList.add("show"))}),document.addEventListener("keydown",function(e){27===e.keyCode&&o.classList.remove("show")});var r,s=document.querySelector(".upstairs");document.documentElement.clientWidth<=425&&window.pageYOffset>document.querySelector(".header").getBoundingClientRect().height&&s.classList.add("show"),document.addEventListener("touchmove",function(e){document.documentElement.clientWidth<=425&&!document.querySelector(".nav_header").classList.contains("show")&&s.classList.add("show"),window.pageYOffset<document.querySelector(".header").getBoundingClientRect().height&&s.classList.remove("show")});var i=35;function c(e){r=requestAnimationFrame(function t(){if(window.pageYOffset>e&&window.scrollTo(0,window.pageYOffset-i),window.pageYOffset<e&&window.scrollTo(0,window.pageYOffset+i),Math.abs(e-window.pageYOffset)<=2*i&&window.scrollTo(0,e),Math.abs(window.pageYOffset-e)<=i)return cancelAnimationFrame(r),void(0===window.pageYOffset&&s.classList.remove("show"));r=requestAnimationFrame(t)})}var a=document.querySelectorAll(".list-setting__tuning-container");(a=Array.from(a)).forEach(function(e){e.addEventListener("click",function(e){this.querySelector(".list-setting__tuning").classList.toggle("list-setting__tuning_open"),this.querySelector(".tuning__container").classList.toggle("show")})})},function(e,t){}]);
//# sourceMappingURL=bundle.js.map