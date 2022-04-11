// ==UserScript==
// @name            Auto Page Reload on Error & Gateway Problem Fixer
// @description     Refresh on failed page loading & Gateway problems, '502 Bad Gateway','504 Gateway Time-out', 'Problem loading page', '503 Service Temporarily Unavailable', '500 Internal Server Error', 'Error 503 Service Unavailable', '404 Not Found', '504 Gateway Time-out'
// @author          aireca
// @namespace       https://userscripts-mirror.org/scripts/show/112519
// @version         1306101
// @updateURL       https://userscripts-mirror.org/scripts/source/112519.user.js
// @match           *://*.blsspainvisa.com/appointment.php
// @match           *://*.blsspainvisa.com/*/appointment.php
// @match           *://*.blsspainvisa.com/embassy_book_appointment.php
// @match           *://*.blsspainvisa.com/embassy_appointment.php
// @match           *://*.blsspainvisa.com/*/embassy_book_appointment.php
// @match           *://*.blsspainvisa.com/*/embassy_appointment.php
// @grant           none
// ==/UserScript==

var time = 1000;

(function ()
{
	if (document.title == '502 Bad Gateway' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == '504 Gateway Time-out' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'Problem loading page' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == '503 Service Temporarily Unavailable' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'Service Unavailable' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == '500 Internal Server Error' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'Database error' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'FastCGI Error' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'The connection has timed out' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'Problemas al cargar la página' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.title == 'Error 502 (Server Error)!!1' )
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.getElementsByTagName('h1')[0].innerHTML == '502 Bad Gateway')
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.getElementsByTagName('h1')[0].innerHTML == 'Service Unavailable')
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.getElementsByTagName('h1')[0].innerHTML == 'Error 503 Service Unavailable')
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.getElementsByTagName('h1')[0].innerHTML == '404 Not Found')
		{setTimeout(function() {window.location.reload(true);}, time);}
	else if (document.getElementsByTagName('h1')[0].innerHTML == '504 Gateway Time-out')
		{setTimeout(function() {window.location.reload(true);}, time);}
})();
