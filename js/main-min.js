jQuery(document).ready(function($){$.fn.example=function(e){var i=this}}),jQuery(document).ready(function($){function e(e){e.mobile=window.matchMedia("(max-width: 550px)"),e.mobileH=window.matchMedia("(max-width: 700px)"),e.tablet=window.matchMedia("(max-width: 1000px)"),e.desktop=window.matchMedia("(min-width: 1001px)"),e.largeDesktop=window.matchMedia("(min-width: 1600px)")}var i=$(window).height(),t=$(document).height(),d=$("#header").height(),a=500;$(window).resize(function(){i=$(window).height(),t=$(document).height(),d=$("#header").height()});var h={};e(h),h.tablet.matches&&$("body").example(500)});