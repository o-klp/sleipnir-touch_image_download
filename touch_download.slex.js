// ==UserScript==
// @name            touch_download
// @namespace       http://fenrir-inc.com
// @author          Keenan_L-P
// @description     Touch any image with 2 fingers to open in a new tab
// @description     Makes images easier to download
// @include         http://*
// @version         0.1
// ==/UserScript==
 

// set up touch event on document
window.document.addEventListener('touchstart', function(evt){
  alert('hello world', evt);
}, false);

alert('was loaded');