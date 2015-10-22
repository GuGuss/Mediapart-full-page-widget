// ==UserScript==
// @name        Mediapart Full Page
// @namespace   GuGuss
// @description Automatically load full page version of articles
// @include     http://www.mediapart.fr/*
// @version     1.0.0
// @updateURL   https://github.com/GuGuss/Mediapart-full-page-widget/blob/master/mediapart-full-page.user.js
// ==/UserScript==

// Set this to 1 to enable console logs.
var debug_mode = 1;
if(!debug_mode) {
  console.log('Debug mode disabled');
  console.log = function() {};
} else {
  console.log('Debug mode enabled');
}

// Grease Monkey check.
if ('function' !== GM_xmlhttpRequest) {
  console.log('Userscript manager not supported');
}

// Load the full page if not on full page yet.
if (window.location.href.indexOf('?onglet=full') == -1 ) {
  window.location.href += '?onglet=full'; 
}
