// ==UserScript==
// @name         Auto_Page_Reload_on_Error_and_Gateway_Problem_Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.blsspainvisa.com/english/index.php
// @match        *://*.blsspainvisa.com/embassy_book_appointment.php

// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var time = 1000;
    const titles = ['504 Gateway Time-out', 'Problem loading page', '503 Service Temporarily Unavailable','Service Unavailable','500 Internal Server Error','Database error','FastCGI Error','The connection has timed out','Problemas al cargar la página','Error 502 (Server Error)!!1'];
    const HeadingText = ['502 Bad Gateway','Service Unavailable','Error 503 Service Unavailable','404 Not Found','504 Gateway Time-out'];
    var myTitle = document.title;

	if (titles.includes(myTitle) || HeadingText.includes(document.getElementsByTagName('h1')[0].innerText))
		{setTimeout(function() {window.location.reload(true);}, time);}
})();
