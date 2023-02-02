// ==UserScript==
// @name         Payment Method
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Itsmaarouf
// @match        https://payment.cmi.co.ma/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*
    - This "if statement" checks if there is a PDF that needs to be printed.
    - Because the payment receipt page is available only 3 seconds.
    - whitout this function you will not get your payment receipt
    */
    if($('#print').length == 1){
    window.print();
    }

    //Search for token on the payment page.
    let token = document.querySelectorAll('input[name=paymentLinkToken]')[0].value;
    //Prepare a URL to add a token to it.
    let MyUrl = "https://payment.cmi.co.ma/fim/paymentLinkService?token=";
    //Add token to URL
    let result = MyUrl.concat(token);
    //Print it out in the console
    console.log(result)
    
    /*
    - why i need to this URL?
    - Because I want to send the link to the person I specified on the appointment at the Consulate.
    */

    //This function helps me to copy full url without opening console
    navigator.clipboard.writeText(result).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });


})();
