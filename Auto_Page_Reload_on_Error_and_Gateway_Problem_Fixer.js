// ==UserScript==
// @name         Auto_Page_Reload_on_Error_and_Gateway_Problem_Fixer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       @Itsmaarouf
// @match        *://*.blsspainmorocco.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("code start")
    var time = 1000;
    const titles = ['504 Gateway Time-out','403 Forbidden', 'Problem loading page','503 Service Temporarily Unavailable','Service Unavailable','500 Internal Server Error','Database error','FastCGI Error','The connection has timed out','Problemas al cargar la página','Error 502 (Server Error)!!1'];
    const HeadingText = ['502 Bad Gateway','Service Unavailable','403 ERROR','Error 503 Service Unavailable','404 Not Found','504 Gateway Time-out','This page isn’t working'];
    const myBody = ['Scheduled maintenance is under progress'];
    var myTitle = document.title;

    if(document.body.childElementCount <= 1 || titles.includes(myTitle)){
        console.log("code here")
        setTimeout(function() {
                window.location.reload(true);
            }, time);
    }else if(( HeadingText.includes(document.getElementsByTagName('h1')[0].innerText))){
        setTimeout(function() {
                window.location.reload(true);
            }, time);
    }
    console.log("End of code")
})();
